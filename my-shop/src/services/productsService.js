import { requestFactory } from './requester';
const baseUrl = "http://localhost:3030/data/products";

export const productServiceFactory = (token) => {

    const request = requestFactory(token);

    const getAll = async () => {
        const response = await fetch(baseUrl);
        const result = await response.json();
        return result;
    };

    const getOne = async (productId) => {
        const result = await request.get(`${baseUrl}/${productId}`);
        return result;
    };

    return {
        getAll,
        getOne,
    }
}