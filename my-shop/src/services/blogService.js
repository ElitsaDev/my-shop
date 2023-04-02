import * as request from './requester';
const baseUrl = 'http://localhost:3030/data/blogs'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const blogs = Object.values(result);

    return blogs;
};

export const getOne = async (blogId) => {
    const result = await request.get(`${baseUrl}/${blogId}`);

    return result;
};

export const create = async (blogData) => {
    const result = await request.post(baseUrl, blogData);

    console.log(result);

    return result;
};

export const addComment = async (blogId, data) => {
    const result = await request.post(`${baseUrl}/${blogId}/comments`, data);

    return result;
};