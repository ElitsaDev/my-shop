import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./BlogEdit.module.css"
import { useForm } from "../../../hooks/useForm";
import { useService } from '../../../hooks/useService';
import { blogServiceFactory } from "../../../services/blogService";
import { useContext } from "react";
import { BlogContext } from "../../../context/BlogContext";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

export default function BlogEdit() {
    const { onEditBlogSubmit } = useContext(BlogContext);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
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
    const navigate = useNavigate();
    const box = useRef(); 
    
    useOnClickOutside(box, () => navigate("/blog-catalog"));

    useEffect(() => {
        blogService.getOne(blogId)
            .then(result => {
                changeValues(result);
            });
    }, [blogId]);

    return (
        <>
            <section className="blog-edit">
                <div className={styles.container} ref={box}>
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


/*
{
  _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
  title: 'new travel here',
  imageUrl: 'img/blog/details/blog-details-6.jpg',
  published: '2023-04-04T10:12:15.486Z',
  updated: '',
  content: 'A beautiful image is a visual representation of something. It can be two-dimensional, three-dimensional, or somehow otherwise feed into the visual system to convey information. An image can 
be an artifact, such as a photograph or other two-dimensional picture, that resembles a subject.',   
  quote: 'new quote 2',
  quoteAuthor: 'peter2',
  _createdOn: 1680603196621,
  _id: 'e7e779ed-3f46-4af6-8677-1000c16d9631',
  _updatedOn: 1680604291198
}
*/