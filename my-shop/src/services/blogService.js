import { requestFactory } from './requester';
const baseUrl = 'http://localhost:3030/data/blogs'

export const blogServiceFactory = (token) => {

    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const blogs = Object.values(result);

        return blogs;
    };

    const getOne = async (blogId) => {
        const result = await request.get(`${baseUrl}/${blogId}`);

        return result;
    };

    const create = async (blogData) => {
        const result = await request.post(baseUrl, blogData);

        console.log(result);

        return result;
    };

    const addComment = async (blogId, data) => {
        const result = await request.post(`${baseUrl}/${blogId}/comments`, data);

        return result;
    };

    return {
        getAll,
        getOne,
        create,
        addComment
    }
}
