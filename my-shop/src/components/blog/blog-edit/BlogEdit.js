import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogEdit.module.css"
import { useForm } from "../../../hooks/useForm";
import { useService } from '../../../hooks/useService';
import { blogServiceFactory } from "../../../services/blogService";
import { useNavigate } from "react-router-dom";

export default function BlogEdit({
    onEditBlogSubmit,
}) {
    const {values, changeHandler, onSubmit, changeValues}  = useForm({
        _id: '',
        title: '',
        imageUrl: '',
        published: new Date(),
        updated: '',
        content: '',
        quote: '',
        quoteAuthor: '',  
    }, onEditBlogSubmit);

    const blogService = useService(blogServiceFactory);
    const { blogId } = useParams();
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        blogService.getOne(blogId)
        .then(result => {
            changeValues(result);
        });
    }, []);

     onEditBlogSubmit = async (values) => {
        const result = await blogService.edit(values._id, values);

        setBlogs(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/blog-catalog/${values._id}`);
    };

    return (
        <>
            <section className="blog-edit">
                <div className={styles.container}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12">
                            <div className="blog__content">
                                <div className="blog__content__edit">
                                    <h1>Edit Blog</h1>
                                    <form id="blog-edit" 
                                            method="POST"
                                            className={styles["blog-form"]}
                                            onSubmit={onSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" placeholder="title" name="title" value={values.title} onChange={changeHandler} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" placeholder="image" name="imageUrl" value={values.imageUrl} onChange={changeHandler} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="hidden" id="date" placeholder="published on" name="published" value={values.published} onChange={changeHandler} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="hidden" id="date" placeholder="updated on" name="updated" value={values.updated} onChange={changeHandler} />
                                            </div>
                                            <div className="col-lg-12 col-md-12 text-center">
                                                <textarea type="text" placeholder="Content of blog post" name="content" value={values.content} onChange={changeHandler} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" placeholder="quote" name="quote" value={values.quote} onChange={changeHandler} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" placeholder=" author of quote" name="quoteAuthor" value={values.quoteAuthor} onChange={changeHandler} />
                                            </div>
                                            <div className="col-lg-12 col-md-12" >
                                                <button type="submit" className={styles.btn} >Edit Blog</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}