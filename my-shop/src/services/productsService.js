import * as request from './requester';
const baseUrl = "http://localhost:3030/jsonstore/products";

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result;
};

export const getOne = async (productId) => {
    const result = await request.get(`${baseUrl}/${productId}`);

    return result;
};