import { requestFactory } from './requester';
const baseUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {

    const request = requestFactory(token);

    const getAll = async (blogId) => {
        const searchQuery = encodeURIComponent(`blogId="${blogId}"`);
        const relationQuery = encodeURIComponent(`author=_ownerId:users`);

        const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
        const comments = Object.values(result);

        return comments;
    };

    const create = async (blogId, comment) => {
        const result = await request.post(baseUrl, { blogId, comment });

        return result;
    };
    return {
        getAll,
        create,
    }
}