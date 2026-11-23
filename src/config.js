export const BACKEND_URL = (
  import.meta.env.VITE_BACKEND_URL
).replace(/\/$/, "");

export const apiUrl = (path) => `${BACKEND_URL}/api${path}`;
