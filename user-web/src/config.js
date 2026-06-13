// API Configuration
export const API_BASE_URL = 'http://localhost:5000/api/v1';

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  ME: '/auth/me',

  // Fines
  GET_FINES: '/fines',
  GET_FINE_BY_REF: '/fines/:referenceNo',
  VERIFY_FINE: '/fines/:referenceNo/verify',
  MOTORIST_FINES: '/fines/motorist/my-fines',
  ISSUE_FINE: '/fines',

  // Payments
  MAKE_PAYMENT: '/payments',
  GET_PAYMENTS: '/payments',
  GET_PAYMENT_STATUS: '/payments/status/:referenceNo',
  GET_RECEIPT: '/payments/receipt/:receiptNo',

  // Categories
  GET_CATEGORIES: '/fine-categories',

  // Districts
  GET_DISTRICTS: '/districts',

  // Cards
  GET_SAVED_CARDS: '/users/me/cards',
  SAVE_CARD: '/users/me/cards',
};
