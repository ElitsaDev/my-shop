const baseUrl = "http://localhost:3030/data/heroes";

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return Object.values(result);
};