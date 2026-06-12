const express = require("express");
const { body, param, query } = require("express-validator");
const {
  createFine,
  getFineByReference,
  verifyFine,
  getAllFines,
  getMyFines,
  cancelFine,
  getMotoristFines,
} = require("../controllers/fine.controller");
const { verifyToken, requireRole } = require("../middleware/auth");
const validate = require("../middleware/validate");

const router = express.Router();

router.get(
  "/motorist/my-fines",
  verifyToken,
  [
    query("page").optional().isInt({ min: 1 }),
    query("limit").optional().isInt({ min: 1, max: 100 }),
  ],
  validate,
  getMotoristFines
);

router.get(
  "/officer/my-fines",
  verifyToken,
  requireRole("OFFICER"),
  [
    query("page").optional().isInt({ min: 1 }),
    query("limit").optional().isInt({ min: 1, max: 100 }),
  ],
  validate,
  getMyFines,
);

router.get(
  "/",
  verifyToken,
  requireRole("ADMIN"),
  [
    query("page").optional().isInt({ min: 1 }),
    query("limit").optional().isInt({ min: 1, max: 100 }),
  ],
  validate,
  getAllFines,
);

router.get(
  "/:referenceNo/verify",
  [
    param("referenceNo").notEmpty().withMessage("referenceNo is required"),
    body("fineCategoryId")
      .isInt({ min: 1 })
      .withMessage("fineCategoryId is required"),
  ],
  validate,
  verifyFine,
);

router.get(
  "/:referenceNo",
  [param("referenceNo").notEmpty().withMessage("referenceNo is required")],
  validate,
  getFineByReference,
);

router.post(
  "/",
  verifyToken,
  requireRole("OFFICER"),
  [
    body("vehicleNo")
      .trim()
      .notEmpty()
      .withMessage("Vehicle number is required"),
    body("driverIdentifier")
      .trim()
      .notEmpty()
      .withMessage("Driver's NIC or License number is required"),
    body("categoryId")
      .isInt({ min: 1 })
      .withMessage("Valid category ID is required"),
    body("notes")
      .trim()
      .notEmpty()
      .withMessage("Notes/Remarks are required"),
    body("location")
      .optional()
      .trim(),
  ],
  validate,
  createFine,
);

router.put(
  "/:id/cancel",
  verifyToken,
  requireRole("ADMIN"),
  [param("id").isInt({ min: 1 }).withMessage("id must be a positive integer")],
  validate,
  cancelFine,
);

module.exports = router;
