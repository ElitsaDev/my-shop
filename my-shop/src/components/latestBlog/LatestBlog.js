import { useContext } from "react";
import { Link } from "react-router-dom";

import { BlogContext } from "../../context/BlogContext";
import { formatDate } from "../../utils/dateFormater";

export default function LatestBlog() {

    const { latestBlogs } = useContext(BlogContext);

    if (latestBlogs.length > 3) {
        latestBlogs.splice(0, 3);
    }

    return (
        <section className="latest spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Latest News</span>
                            <h2>Fashion New Trends</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {latestBlogs.map(blog => (
                        <div key={blog._id} className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg" data-setbg={blog.imageUrl}></div>
                                <div className="blog__item__text">
                                    <span><img src="img/icon/calendar.png" alt="" /> {formatDate(blog.published)}</span>
                                    <h5>{blog.title}</h5>
                                    <Link to={`/blog-catalog/${blog._id}`}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}