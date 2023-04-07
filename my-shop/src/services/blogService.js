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

    const edit = (blogId, blogData) => request.put(`${baseUrl}/${blogId}`, blogData);

    const deleteBlog = (blogId) => request.delete(`${baseUrl}/${blogId}`);

    const getLatestBlogs = async() => {
        const sortQuery = encodeURIComponent(`_createdOn desc`);
        const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

        const blogs = Object.values(result);

        return blogs;
    }

    return {
        getAll,
        getOne,
        create,
        edit,
        deleteBlog,
        getLatestBlogs,
    }
}
