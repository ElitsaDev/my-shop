import { url } from '../config';
const baseUrl = `${url}/data/heroes`;

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return Object.values(result);
};