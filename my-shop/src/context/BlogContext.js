import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
import { blogServiceFactory } from "../services/blogService";
import { useState, useEffect } from "react";

export const BlogContext = createContext();

export function BlogProvider({ children }){
    const [blogs, setBlogs] = useState([]);
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
