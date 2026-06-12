const prisma = require("../config/db");

const generateReferenceNo = () => {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).toUpperCase().slice(2, 7);
  return `TF-${datePart}-${randomPart}`;
};

const createFine = async (req, res, next) => {
  try {
    const {
      vehicleNo,
      driverIdentifier,
      location,
      categoryId,
      notes,
    } = req.body;

    const officer = await prisma.officer.findUnique({
      where: { userId: req.user.id },
      include: { district: true },
    });
    if (!officer) {
      return res
        .status(403)
        .json({ success: false, message: "Officer profile not found." });
    }

    const normalizedIdentifier = driverIdentifier ? driverIdentifier.trim().toUpperCase() : "";

    const motorist = await prisma.user.findFirst({
      where: {
        role: "USER",
        OR: [
          { nic: normalizedIdentifier },
          { dlNo: normalizedIdentifier }
        ]
      }
    });

    if (!motorist) {
      return res.status(404).json({
        success: false,
        message: "Motorist not found with the provided NIC or Driving License."
      });
    }

    const category = await prisma.fineCategory.findFirst({
      where: { id: Number(categoryId), isActive: true },
    });

    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Fine category not found." });
    }

    const fineLocation = location || officer.district?.name || "Colombo";

    const fine = await prisma.fine.create({
      data: {
        referenceNo: generateReferenceNo(),
        vehicleNo: vehicleNo.toUpperCase(),
        driverName: motorist.name,
        driverPhone: motorist.phone || null,
        driverNIC: motorist.nic || null,
        driverDL: motorist.dlNo || null,
        driverEmail: motorist.email || null,
        offenseDate: new Date(),
        location: fineLocation,
        categoryId: Number(categoryId),
        officerId: officer.id,
        notes: notes || null,
      },
      include: {
        category: true,
        officer: {
          include: {
            district: true,
            user: { select: { name: true, email: true } },
          },
        },
      },
    });

    return res.status(201).json({ success: true, data: fine });
  } catch (error) {
    next(error);
  }
};

const getFineByReference = async (req, res, next) => {
  try {
    const fine = await prisma.fine.findUnique({
      where: { referenceNo: req.params.referenceNo },
      include: {
        category: true,
        officer: {
          include: { district: true, user: { select: { name: true } } },
        },
        payment: true,
      },
    });

    if (!fine) {
      return res
        .status(404)
        .json({ success: false, message: "Fine not found." });
    }

    return res.status(200).json({ success: true, data: fine });
  } catch (error) {
    next(error);
  }
};

const verifyFine = async (req, res, next) => {
  try {
    const { referenceNo } = req.params;
    const { fineCategoryId } = req.body;

    const fine = await prisma.fine.findFirst({
      where: {
        referenceNo,
        categoryId: Number(fineCategoryId),
        status: "PENDING",
      },
      include: { category: true },
    });

    if (!fine) {
      return res.status(200).json({
        success: true,
        data: { valid: false, amount: null, driverName: null },
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        valid: true,
        amount: fine.category.amount,
        driverName: fine.driverName,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getAllFines = async (req, res, next) => {
  try {
    const page = Math.max(parseInt(req.query.page || "1", 10), 1);
    const limit = Math.min(
      Math.max(parseInt(req.query.limit || "10", 10), 1),
      100,
    );
    const skip = (page - 1) * limit;
    const { status, districtId, vehicleNo, officerId } = req.query;

    const where = {};
    if (status) where.status = status;
    if (vehicleNo) where.vehicleNo = { contains: vehicleNo.toUpperCase() };
    if (officerId) where.officerId = Number(officerId);
    if (districtId) where.officer = { districtId: Number(districtId) };

    const [fines, total] = await Promise.all([
      prisma.fine.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          category: true,
          officer: {
            include: { district: true, user: { select: { name: true } } },
          },
          payment: true,
        },
      }),
      prisma.fine.count({ where }),
    ]);

    return res.status(200).json({
      success: true,
      data: fines,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    next(error);
  }
};

const getMyFines = async (req, res, next) => {
  try {
    const page = Math.max(parseInt(req.query.page || "1", 10), 1);
    const limit = Math.min(
      Math.max(parseInt(req.query.limit || "10", 10), 1),
      100,
    );
    const skip = (page - 1) * limit;

    const officer = await prisma.officer.findUnique({
      where: { userId: req.user.id },
    });
    if (!officer) {
      return res
        .status(404)
        .json({ success: false, message: "Officer profile not found." });
    }

    const [fines, total] = await Promise.all([
      prisma.fine.findMany({
        where: { officerId: officer.id },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: { category: true, payment: true },
      }),
      prisma.fine.count({ where: { officerId: officer.id } }),
    ]);

    return res.status(200).json({
      success: true,
      data: fines,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    next(error);
  }
};

const cancelFine = async (req, res, next) => {
  try {
    const fine = await prisma.fine.findUnique({
      where: { id: Number(req.params.id) },
      include: { payment: true },
    });

    if (!fine) {
      return res
        .status(404)
        .json({ success: false, message: "Fine not found." });
    }

    if (fine.status === "PAID") {
      return res
        .status(400)
        .json({ success: false, message: "Cannot cancel a paid fine." });
    }

    const updated = await prisma.fine.update({
      where: { id: fine.id },
      data: { status: "CANCELLED" },
    });

    return res.status(200).json({ success: true, data: updated });
  } catch (error) {
    next(error);
  }
};

const getMotoristFines = async (req, res, next) => {
  try {
    const page = Math.max(parseInt(req.query.page || "1", 10), 1);
    const limit = Math.min(
      Math.max(parseInt(req.query.limit || "10", 10), 1),
      100,
    );
    const skip = (page - 1) * limit;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    const where = {
      OR: [
        ...(user.phone ? [{ driverPhone: user.phone }] : []),
        { driverEmail: user.email },
        ...(user.nic ? [{ driverNIC: user.nic }] : []),
        ...(user.dlNo ? [{ driverDL: user.dlNo }] : []),
      ],
    };

    const [fines, total] = await Promise.all([
      prisma.fine.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: { category: true, payment: true },
      }),
      prisma.fine.count({ where }),
    ]);

    return res.status(200).json({
      success: true,
      data: fines,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    next(error);
  }
};

const getDriverDetailsForLookup = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const normalizedIdentifier = identifier ? identifier.trim().toUpperCase() : "";

    const motorist = await prisma.user.findFirst({
      where: {
        role: "USER",
        OR: [
          { nic: normalizedIdentifier },
          { dlNo: normalizedIdentifier }
        ]
      }
    });

    if (!motorist) {
      return res.status(404).json({
        success: false,
        message: "Motorist not found with the provided NIC or Driving License."
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        name: motorist.name,
        phone: motorist.phone || "N/A",
        email: motorist.email,
        nic: motorist.nic || "N/A",
        dlNo: motorist.dlNo || "N/A"
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createFine,
  getFineByReference,
  verifyFine,
  getAllFines,
  getMyFines,
  cancelFine,
  getMotoristFines,
  getDriverDetailsForLookup,
};
