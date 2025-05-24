// src/utils/auth.js
export const setAuth = () => {
  const expiryTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours
  localStorage.setItem("isAdmin", "true");
  localStorage.setItem("expiry", expiryTime);
};

export const isAuthenticated = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const expiry = localStorage.getItem("expiry");
  const now = new Date().getTime();

  return isAdmin === "true" && expiry && now < parseInt(expiry);
};

export const logout = () => {
  localStorage.removeItem("isAdmin");
  localStorage.removeItem("expiry");
};
