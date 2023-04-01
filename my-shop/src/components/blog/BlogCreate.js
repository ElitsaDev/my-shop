import styles from "./BlogCreate.module.css"
import { useState } from "react";

export default function BlogCreate({
    onCreateBlogSubmit,
}) {
    const [values, setValues] = useState({
        title: '',
        imageUrl: '',
        published: '',
        updated: '',
        content: '',
        quote: '',
        quoteAuthor: '',
        comments: [],
    });

    const onChangeHandler = (e) => {
        const newDate = new Date();
        setValues(state => ({ ...state, [e.target.name]: e.target.value, published: newDate }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onCreateBlogSubmit(values);
    };

    return (
        <>
            <section className="blog-create">
                <div className={styles.container}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12">
                            <div className="blog__content">
                                <div className="blog__content__create">
                                    <h1>Create Blog</h1>
                                    <form id="blog-create" onSubmit={onSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" placeholder="title" name="title" value={values.title} onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" placeholder="image" name="imageUrl" value={values.imageUrl} onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="hidden" id="date" placeholder="published on" name="published" value={values.published} onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="hidden" id="date" placeholder="updated on" name="updated" value={values.updated} onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-12 col-md-12 text-center">
                                                <textarea placeholder="Content of blog post" name="content" value={values.content} onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" placeholder="quote" name="quote" value={values.quote} onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" placeholder=" author of quote" name="quoteAuthor" value={values.quoteAuthor} onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-lg-12 col-md-12" >
                                                <button type="submit" className={styles.btn}>Create Blog </button>
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