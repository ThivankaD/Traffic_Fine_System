/**
 * Validates Sri Lankan National Identity Card (NIC) number.
 * Supports:
 * - Old format: 9 digits followed by 'V' or 'X' (e.g. 850011234V)
 * - New format: 12 digits (e.g. 198500101234)
 * Both formats must have a valid day of year (001-365 for males, 501-865 for females).
 */
function validateNIC(nic) {
  if (!nic) return false;
  const cleaned = nic.trim().toUpperCase();

  // Old format: 9 digits + V/X
  if (/^\d{9}[VX]$/.test(cleaned)) {
    const day = parseInt(cleaned.substring(2, 5), 10);
    return (day >= 1 && day <= 365) || (day >= 501 && day <= 865);
  }

  // New format: 12 digits
  if (/^\d{12}$/.test(cleaned)) {
    const day = parseInt(cleaned.substring(4, 7), 10);
    return (day >= 1 && day <= 365) || (day >= 501 && day <= 865);
  }

  return false;
}

/**
 * Normalizes Sri Lankan mobile numbers into "+947XXXXXXXX" format and validates them.
 * Supports inputs like:
 * - +94773521176
 * - 0773521176
 * - 773521176
 * - 94773521176
 * Returns the normalized phone number or null if invalid.
 */
function normalizeAndValidatePhone(phone) {
  if (!phone) return null;
  const clean = phone.replace(/[^0-9+]/g, "").trim();

  let normalized = clean;
  if (clean.startsWith("+94") && clean.length === 12) {
    normalized = clean;
  } else if (clean.startsWith("94") && clean.length === 11) {
    normalized = "+" + clean;
  } else if (clean.startsWith("0") && clean.length === 10) {
    normalized = "+94" + clean.substring(1);
  } else if (clean.length === 9) {
    normalized = "+94" + clean;
  }

  // Final check: must match +94 followed by exactly 9 digits
  if (/^\+94\d{9}$/.test(normalized)) {
    return normalized;
  }
  return null;
}

/**
 * Validates Sri Lankan driving license (DL) number.
 * Supports:
 * - 9 to 10 digits followed by a letter (e.g. 123456789V, 1234567890B)
 * - Letter followed by 7 to 8 digits (e.g. B1234567)
 */
function validateDL(dlNo) {
  if (!dlNo) return false;
  const cleaned = dlNo.trim().toUpperCase();

  // 9 to 10 digits followed by a letter
  if (/^\d{9,10}[A-Z]$/.test(cleaned)) {
    return true;
  }

  // Letter followed by 7 to 8 digits
  if (/^[A-Z]\d{7,8}$/.test(cleaned)) {
    return true;
  }

  return false;
}

module.exports = {
  validateNIC,
  normalizeAndValidatePhone,
  validateDL,
};
