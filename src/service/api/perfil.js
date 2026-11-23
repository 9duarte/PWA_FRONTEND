import { apiUrl } from "../../config";

export const getPerfil = () =>
  fetch(apiUrl("/users/perfil"), {
    headers: { Accept: "application/json" },
    credentials: "include",
  }).then((response) => response.json());