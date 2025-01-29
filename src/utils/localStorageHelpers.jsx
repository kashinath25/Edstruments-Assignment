export const setSession = (username) => {
    localStorage.setItem("session", username);
};

export const getSession = () => {
    return localStorage.getItem("session");
};

export const clearSession = () => {
    localStorage.removeItem("session");
};
