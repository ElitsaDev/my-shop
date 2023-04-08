import {useState, useEffect, createContext } from "react";
import { useNavigate } from 'react-router-dom';
import { blogServiceFactory } from "../services/blogService";

export const BlogContext = createContext();

export function BlogProvider({ children }) {
    const [blogs, setBlogs] = useState([]);
    const [latestBlogs, setLatesBlogs] = useState([]);
    const blogService = blogServiceFactory(); //auth.accessToken
    const navigate = useNavigate();

    useEffect(() => {
        blogService.getAll()
            .then(result => {
                //console.log(result);
                setBlogs(result);
            })
            .catch(error => {
                console.log("Error" + error);
            });
    }, []);

    useEffect(() => {
        blogService.getLatestBlogs()
            .then(result => {
                //console.log(result);
                setLatesBlogs(result);
            })
            .catch(error => {
                console.log("Error Latest blogs" + error);
            });
    }, []);

    const onCreateBlogSubmit = async (data) => {
        const newBlog = await blogService.create(data)
            .catch(error => {
                console.log("Error" + error);
            });

        setBlogs(state => [...state, newBlog]);
    };

    const onEditBlogSubmit = async (data) => {
        const editBlog = await blogService.edit(data._id, data)
            .catch(error => {
                console.log("Error" + error);
            });

        setBlogs(state => state.map(blog => blog._id === data._id ? editBlog : blog));

        navigate(`/blog-catalog/${data._id}`);
    };

    const deleteBlog = (blogId) => {
        setBlogs(state => state.filter(blog => blog._id !== blogId));
    };

    const contextValues = {
        blogs,
        latestBlogs,
        onCreateBlogSubmit,
        onEditBlogSubmit,
        deleteBlog,
    };

    return (
        <BlogContext.Provider value={contextValues}>
            {children}
        </BlogContext.Provider>
    );
}
