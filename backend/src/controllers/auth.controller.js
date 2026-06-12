const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../config/db");
const env = require("../config/env");

const signAccessToken = (user) =>
  jwt.sign(
    { id: user.id, role: user.role, districtId: user.districtId ?? null },
    env.JWT_SECRET,
    { expiresIn: env.JWT_EXPIRES_IN },
  );

const signRefreshToken = (user) =>
  jwt.sign(
    { id: user.id, role: user.role, districtId: user.districtId ?? null },
    env.JWT_SECRET,
    { expiresIn: env.JWT_REFRESH_EXPIRES_IN },
  );

const buildProfile = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
  phone: user.phone,
  nic: user.nic || null,
  dlNo: user.dlNo || null,
  districtId: user.districtId,
  isActive: user.isActive,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
  district: user.district || null,
  officer: user.officer || null,
});

const buildAuthResponse = async (user, statusCode, res) => {
  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  await prisma.user.update({
    where: { id: user.id },
    data: { refreshToken },
  });

  return res.status(statusCode).json({
    success: true,
    data: {
      accessToken,
      refreshToken,
      user: buildProfile(user),
    },
  });
};

const signup = async (req, res, next) => {
  try {
    const { name, email, password, phone = null, nic, dlNo } = req.body;

    const existingNic = await prisma.user.findUnique({ where: { nic } });
    if (existingNic) {
      return res.status(400).json({ success: false, message: "NIC already registered." });
    }

    const existingDl = await prisma.user.findUnique({ where: { dlNo } });
    if (existingDl) {
      return res.status(400).json({ success: false, message: "Driving License already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "USER",
        phone,
        nic,
        dlNo,
      },
    });

    return buildAuthResponse(user, 201, res);
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const {
      name,
      email,
      password,
      role,
      phone = null,
      districtId = null,
      badgeNo = null,
    } = req.body;

    if (role === "OFFICER" && (!badgeNo || !phone || !districtId)) {
      return res.status(400).json({
        success: false,
        message: "Officer registration requires badgeNo, phone and districtId.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        phone,
        districtId: districtId ? Number(districtId) : null,
      },
    });

    if (role === "OFFICER") {
      await prisma.officer.create({
        data: {
          userId: user.id,
          badgeNo,
          phone,
          districtId: Number(districtId),
        },
      });
    }

    return buildAuthResponse(user, 201, res);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        district: true,
        officer: {
          include: { district: true },
        },
      },
    });

    if (!user || !user.isActive) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }

    return buildAuthResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res
        .status(400)
        .json({ success: false, message: "refreshToken is required." });
    }

    const decoded = jwt.verify(refreshToken, env.JWT_SECRET);

    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user || !user.isActive || user.refreshToken !== refreshToken) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid refresh token." });
    }

    const accessToken = signAccessToken(user);

    return res.status(200).json({
      success: true,
      data: { accessToken },
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    await prisma.user.update({
      where: { id: req.user.id },
      data: { refreshToken: null },
    });

    return res
      .status(200)
      .json({ success: true, data: { message: "Logged out successfully." } });
  } catch (error) {
    next(error);
  }
};

const me = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: {
        district: true,
        officer: {
          include: { district: true },
        },
      },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    return res.status(200).json({ success: true, data: buildProfile(user) });
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, register, login, refresh, logout, me };
