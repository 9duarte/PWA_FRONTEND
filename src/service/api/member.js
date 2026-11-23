import { apiUrl } from "../../config";

export const getMember = (userId) =>
  fetch(apiUrl(`/users/member/${userId}`), {
    headers: { Accept: 'application/json' },
    credentials: "include",
  }).then((response) => response.json());

export const createMember = (userId, data) =>
  fetch(apiUrl(`/users/${userId}/member`), {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
    credentials: "include",
  });