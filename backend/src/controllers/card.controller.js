const prisma = require("../config/db");

const listSavedCards = async (req, res, next) => {
  try {
    const cards = await prisma.savedCard.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({ success: true, data: cards });
  } catch (error) {
    next(error);
  }
};

const saveCard = async (req, res, next) => {
  try {
    const { cardholderName, cardNumber, expiry, brand = "Visa" } = req.body;

    if (!cardholderName || !cardNumber || !expiry) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    // Clean and mask the card number to store it securely
    const cleanedNumber = cardNumber.replace(/\s+/g, "");
    let maskedCardNumber = cleanedNumber;
    if (cleanedNumber.length >= 4) {
      const last4 = cleanedNumber.slice(-4);
      maskedCardNumber = `**** **** **** ${last4}`;
    } else {
      maskedCardNumber = `**** **** **** ${cleanedNumber}`;
    }

    // Detect card brand if not specified
    let detectedBrand = brand;
    if (cleanedNumber.startsWith("4")) {
      detectedBrand = "Visa";
    } else if (cleanedNumber.startsWith("5")) {
      detectedBrand = "MasterCard";
    } else if (cleanedNumber.startsWith("3")) {
      detectedBrand = "American Express";
    }

    const card = await prisma.savedCard.create({
      data: {
        userId: req.user.id,
        cardholderName,
        cardNumber: maskedCardNumber,
        expiry,
        brand: detectedBrand,
      },
    });

    return res.status(201).json({ success: true, data: card });
  } catch (error) {
    next(error);
  }
};

const deleteCard = async (req, res, next) => {
  try {
    const cardId = Number(req.params.id);

    // Ensure the card exists and belongs to the authenticated user
    const card = await prisma.savedCard.findFirst({
      where: { id: cardId, userId: req.user.id },
    });

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Saved card not found or unauthorized.",
      });
    }

    await prisma.savedCard.delete({
      where: { id: cardId },
    });

    return res.status(200).json({ success: true, message: "Card deleted successfully." });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listSavedCards,
  saveCard,
  deleteCard,
};
