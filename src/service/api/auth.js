import { apiUrl } from "../../config";

export const login = (data) =>
    fetch(apiUrl("/auth/login"), {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
    }).then((response) => response.json());

export const getQrLoginToken = () =>
    fetch(apiUrl("/auth/qr-token"), {
        headers: { Accept: "application/json" },
        credentials: "include",
    }).then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Não foi possível gerar o QR Code.");
        }
        return data;
    });

export const logout = () =>
    fetch(apiUrl("/auth/logout"), {
        method: "GET",
        headers: { Accept: "application/json" },
        credentials: "include",
    }).then((response) => response.json());