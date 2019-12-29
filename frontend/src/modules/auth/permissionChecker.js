export const isAuthenticated = () => {
    if (typeof window === "undefined") return true;
    let token = window.localStorage.getItem("asauth");
    
    if (token) {
        token = JSON.parse(token);
        if (token.token) return true;
        return false
    }
    return false;
};
