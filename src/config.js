export const BACKEND_URL = (
  import.meta.env.VITE_BACKEND_URL ||
  "https://pwa-backend-2a4n.onrender.com"
).replace(/\/$/, "");

export const apiUrl = (path) => `${BACKEND_URL}/api${path}`;
