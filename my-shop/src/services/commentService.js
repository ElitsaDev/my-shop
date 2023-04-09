import { requestFactory } from './requester';
import { url } from '../config';
const baseUrl = `${url}/data/comments`;

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

    const editComment = (commentId, comment) => request.put(`${baseUrl}/${commentId}`, comment);

    const deleteComment = (commentId) => request.delete(`${baseUrl}/${commentId}`);

    return {
        getAll,
        create,
        editComment,
        deleteComment,
    }
}