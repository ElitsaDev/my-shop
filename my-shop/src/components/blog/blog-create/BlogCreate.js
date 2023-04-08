import { useContext, useRef } from "react";
import styles from "./BlogCreate.module.css"
import { useForm } from "../../../hooks/useForm";
import { BlogContext } from "../../../context/BlogContext";
import { useNavigate } from "react-router-dom";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

export default function BlogCreate() {
    const { onCreateBlogSubmit } = useContext(BlogContext);
    const {values, changeHandler, onSubmit}  = useForm({
        title: '',
        imageUrl: '',
        published: new Date(),
        updated: '',
        content: '',
        quote: '',
        quoteAuthor: '',  
    }, onCreateBlogSubmit);
    const navigate = useNavigate();
    const box = useRef(); 
    
    useOnClickOutside(box, () => navigate("/blog-catalog"));
   
    return (
        <div>
            <section className="blog-create">
                <div className={styles.container} ref={box}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12">
                            <div className="blog__content">
                                <div className="blog__content__create">
                                    <h1>Create Blog</h1>
                                    <form id="blog-create" 
                                            method="POST"
                                            className={styles["blog-form"]}
                                            onSubmit={onSubmit}
                                            data-testid="blog-create"
                                           
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" 
                                                    placeholder="title" 
                                                    name="title" 
                                                    value={values.title} 
                                                    onChange={changeHandler} 
                                                    data-testid="title-input"
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" 
                                                    placeholder="image" 
                                                    name="imageUrl" 
                                                    value={values.imageUrl} 
                                                    onChange={changeHandler} 
                                                    data-testid="imageUrl-input"
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="hidden" 
                                                    id="date" 
                                                    placeholder="published on" 
                                                    name="published" 
                                                    value={values.published} 
                                                    onChange={changeHandler} 
                                                    data-testid="published-input"
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="hidden" 
                                                    id="date" 
                                                    placeholder="updated on" 
                                                    name="updated" 
                                                    value={values.updated} 
                                                    onChange={changeHandler} 
                                                    data-testid="updated-input"
                                                />
                                            </div>
                                            <div className="col-lg-12 col-md-12 text-center">
                                                <textarea type="text" 
                                                    placeholder="Content of blog post" 
                                                    name="content" 
                                                    value={values.content} 
                                                    onChange={changeHandler} 
                                                    data-testid="content-input"
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" 
                                                    placeholder="quote" 
                                                    name="quote" 
                                                    value={values.quote} 
                                                    onChange={changeHandler} 
                                                    data-testid="quote-input"
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" 
                                                    placeholder=" author of quote" 
                                                    name="quoteAuthor" 
                                                    value={values.quoteAuthor} 
                                                    onChange={changeHandler} 
                                                    data-testid="quoteAuthor-input"
                                                />
                                            </div>
                                            <div className="col-lg-12 col-md-12" >
                                                <button type="submit" className={styles.btn} >Create Blog</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}