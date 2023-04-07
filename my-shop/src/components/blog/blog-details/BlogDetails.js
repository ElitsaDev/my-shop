import { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from './BlogDetails.module.css';
import { useService } from '../../../hooks/useService';

import { formatDate } from '../../../utils/dateFormater';
import { splitBySentence } from '../../../utils/splitTextIntoFourParagraphs';
import { blogServiceFactory } from '../../../services/blogService';
import { commentServiceFactory } from '../../../services/commentService';

import { AuthContext } from '../../../context/AuthContext';
import { BlogContext } from '../../../context/BlogContext';
import AddComment from './AddComment';

export default function BlogDetails() {
    const { blogId } = useParams();
    const { isAuthenticated, userId } = useContext(AuthContext);
    const { deleteBlog } = useContext(BlogContext);
    const [blog, setBlog] = useState([]);
    const [comments, setComments] = useState([]);
    const blogService = useService(blogServiceFactory);
    const commentService = useService(commentServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            blogService.getOne(blogId),
            commentService.getAll(blogId)
        ])
            .then(([blogData, comments]) => {
                setBlog({
                    ...blogData,
                    comments,
                });
                setComments(comments);
            })
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

    const onCreateCommentSubmit = async (values) => {

        const response = await commentService.create(blogId, values.comment);

        setBlog(state => ({
            ...state,
            comments: [...state.comments, response]
        }));
        setComments(...comments, response);
    };

    const onDeleteCommentClick = async (commentId) => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete your comment`);
        if (result) {
           
           await commentService.deleteComment(commentId);   
       
            setBlog(state => ({
                ...state,
                comments: [state.comments.filter(c => c._id !== commentId) || []]
            }));
            setComments( state => state.filter(c => c._id !== commentId))
            navigate(`/blog-catalog`);
        }
    }

   /* TODO feature:  make modal to show data
    const onEditCommentClick = async(commentId, commentData) => {
        console.log(commentData)   
    }
    */

    //console.log(blog);

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
                                        <div className="col-lg-12 col-md-12 col-sm-6">

                                            {blog.comments &&
                                                blog.comments.map(c =>
                                                    <div key={c._id} className="blog__details__btns__item" >
                                                        <p className={styles["comments-list"]}> Comment from {c.author?.username || c.author?.email}</p>
                                                        <h5>{formatDate(c._createdOn)}: {c.comment}</h5>
                                                        {c._ownerId === userId &&
                                                            <>
                                                                <div className="buttons">
                                                                    {/* <span><button className={styles.linkAsButton} onClick={() => onEditCommentClick(c._id, c)}>Edit</button></span> */}
                                                                    <span><button className={styles.linkAsButton} onClick={() => onDeleteCommentClick(c._id)} >Delete</button></span>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>
                                    {isAuthenticated && !isOwner &&
                                        <AddComment onCreateCommentSubmit={onCreateCommentSubmit} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}