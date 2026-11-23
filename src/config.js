export const BACKEND_URL = (
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"
).replace(/\/$/, "");

export const apiUrl = (path) => `${BACKEND_URL}/api${path}`;
