import { useCallback, useState } from "react";
import { apiUrl } from "../../../config";

export const useAuth = () => {
    const [isValidLogin, setValidLogin] = useState(false);
    const [isFetching, setFeching] = useState(true);

    const hasLogin = useCallback(() => {
        setFeching(true);
        fetch(apiUrl("/auth/me"), {
            headers: { 'Accept': 'application/json' },
            credentials: "include",
        })
        .then((response) => response.json())
        .then((response) => {
            setValidLogin(response.auth);
        })
        .catch(() => {
            setValidLogin(false);
        }).finally(() => {
            setFeching(false);
        })
    }, [])

    return {
        isValidLogin,
        hasLogin,
        isFetching
    }
}
