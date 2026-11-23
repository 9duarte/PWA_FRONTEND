import { apiUrl } from "../../config";

export const getUsers = ({pageSize, current} = {}) => {
    const query = new URLSearchParams({
        limit: pageSize,
        skip: (current || 1) - 1,
    });

    return fetch(`${apiUrl("/users")}?${query}`, {
        headers: { Accept: "application/json"},
        credentials: "include",
    }).then((response) => response.json());
};

export const createUser = (data) =>
    fetch(apiUrl("/users"), {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
    })