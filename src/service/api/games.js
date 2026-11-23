import { apiUrl } from "../../config";

export const getGames = ({ pageSize, current } = {}) => {
    const query = new URLSearchParams({
        limit: pageSize || 10,
        skip: (current || 1) -1,
    });

    return fetch(`${apiUrl("/games")}?${query}`,{
        headers: { Accept: "application/json" },
        credentials: "include",
    }).then((response) => response.json ());
};

export const createGame = (data) =>
    fetch(apiUrl("/games"), {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
    });