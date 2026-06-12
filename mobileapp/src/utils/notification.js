let showNotificationCallback = null;

export const registerNotificationListener = (callback) => {
  showNotificationCallback = callback;
};

export const showNotification = (title, message, type = "info") => {
  if (showNotificationCallback) {
    showNotificationCallback(title, message, type);
  } else {
    console.warn(`[Fallback Alert] ${type} - ${title}: ${message}`);
  }
};
