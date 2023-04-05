import { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate  } from 'react-router-dom';
import styles from './BlogDetails.module.css';
import { useService } from '../../../hooks/useService';
import { useForm } from '../../../hooks/useForm';

import { formatDate } from '../../../utils/dateFormater';
import { splitBySentence } from '../../../utils/splitTextIntoFourParagraphs';
import { blogServiceFactory } from '../../../services/blogService';

import { AuthContext } from '../../../context/AuthContext';
import { BlogContext } from '../../../context/BlogContext';

export default function BlogDetails({onCreateCommentSubmit}) {
    const { blogId } = useParams();  
    const { isAuthenticated, userId } = useContext(AuthContext);
    const { deleteBlog } = useContext(BlogContext);
    const [blog, setBlog] = useState([]);
    const blogService = useService(blogServiceFactory);
    
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const { values, changeHandler, onSubmit } = useForm({
        name: '', 
        email: '',
        comment: '',
    }, onCreateCommentSubmit);
    
    useEffect(() => {
        blogService.getOne(blogId)
            .then(result => setBlog(result))
            .catch(error => {
                console.log("Error " + error);
            })
    }, [blogId]);

    let paragraphs = [];
    if (blog.content !== undefined && blog.content !== '') {
        paragraphs = (splitBySentence(blog.content));
    }
    
    const isOwner = blog._ownerId === userId;

    const onDeleteClick = async (blogId) => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${blog.title}`);

        if (result) {
            await blogService.deleteBlog(blog._id);

            deleteBlog(blog._id);

            navigate('/blog-catalog');
        }
    };

    const minLength = (e, bound) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound,
        }));
    };

    const isEmail = (e) => {
        let email = e.target.value;
        console.log(email)
        const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
        let regExpresion = new RegExp(EMAIL_PATTERN);
        
        setErrors(state => ({
            ...state,
            [e.target.name]: !regExpresion.test(email),
        }));
    };

    const isFormValid = !Object.values(errors).some(x => x);

    return (
        <>
            <section className="blog-hero spad">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-9 text-center">
                            <div className="blog__hero__text">
                                <h2>{blog.title}</h2>
                                <ul>
                                    <li>By Deercreative</li>
                                    <li>{formatDate(blog.published)}</li>
                                    <li>{blog.comments?.length || 0} Comments</li>
                                </ul>
                                {isAuthenticated && isOwner && (
                                    <div className="buttons">
                                        <Link to={`/blog-catalog/${blog._id}/edit`} type="button" className={styles.linkAsButton}>Edit Blog</Link>
                                        <button className={styles.linkAsButton} onClick={onDeleteClick}>Delete Blog</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-details spad">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12">
                            <div className="blog__details__pic">
                                <img src={`/${blog.imageUrl}`} alt={blog.title} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="blog__details__content">
                                <div className="blog__details__share">
                                    <span>share</span>
                                    <ul>
                                        <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                        <li><Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link></li>
                                        <li><Link to="#" className="youtube"><i className="fa fa-youtube-play"></i></Link></li>
                                        <li><Link to="#" className="linkedin"><i className="fa fa-linkedin"></i></Link></li>
                                    </ul>

                                </div>
                                <div className="blog__details__text">

                                    <p>{paragraphs[0]}</p>
                                    <p>{paragraphs[1]}</p>
                                </div>
                                <div className="blog__details__quote">
                                    <i className="fa fa-quote-left"></i>
                                    <p>{blog.quote}</p>
                                    <h6>_ {blog.quoteAuthor} _</h6>
                                </div>
                                <div className="blog__details__text">
                                    <p>{paragraphs[2]}</p>
                                    <p>{paragraphs[3]}</p>
                                </div>
                                <div className="blog__details__option">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog__details__author">
                                                <div className="blog__details__author__pic">
                                                    <img src="/img/blog/details/blog-author.jpg" alt="" />
                                                </div>
                                                <div className="blog__details__author__text">
                                                    <h5>Aiden Blair</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog__details__tags">
                                                <Link to="#">#Fashion</Link>
                                                <Link to="#">#Trending</Link>
                                                <Link to="/">#2020</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__details__btns">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <Link to="" className="blog__details__btns__item">
                                                <p><span className="arrow_left"></span> Previous Pod</p>
                                                <h5>It S classNameified How To Utilize Free classNameified Ad Sites</h5>
                                            </Link>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <Link to="" className="blog__details__btns__item blog__details__btns__item--next">
                                                <p>Next Pod <span className="arrow_right"></span></p>
                                                <h5>Tips For Choosing The Perfect Gloss For Your Lips</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog__details__comment">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="comment__item__card" >
                                                {blog.comments &&
                                                    blog.comments.length > 0 &&
                                                    blog.comments.map((c, index) =>
                                                        <div key={index} className="comments-list">Comment, {formatDate(c.createdOn)}: {c.comment}</div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                    {isAuthenticated && !isOwner &&
                                    <>
                                    <h4>Leave A Comment</h4>
                                    <form action="POST" onSubmit={onSubmit}>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                {errors.name &&
                                                    <div className={styles.error}>Name must be min 3 character long.</div>
                                                }
                                                <input type="text" 
                                                    placeholder="Name"
                                                    name="name"
                                                    value={values.name}
                                                    onChange={changeHandler}
                                                    onBlur={(e) => minLength(e, 3)}
                                                />
                                                {errors.email &&
                                                    <div className={styles.error}>Email is not in the right format.</div>
                                                }
                                                <input type="text" 
                                                    placeholder="Email"
                                                    name="email" 
                                                    value={values.email}
                                                    onChange={changeHandler}
                                                    onBlur={(e) => isEmail(e)}
                                                />
                                                
                                            </div>

                                            <div className="col-lg-6 text-center">
                                                <textarea 
                                                    placeholder="Comment" 
                                                    required 
                                                    name="comment"
                                                    value={values.comment}
                                                    onChange={changeHandler}
                                                />

                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" disabled={!isFormValid} className="site-btn" >Post Comment</button>
                                        </div>
                                    </form>
                                    </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}