import { Link } from "react-router-dom";
import { formatDate } from "../../utils/dateFormater";

export default function BlogItem({
    ...blog
}) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="blog__item">
                <div className="blog__item__pic set-bg" src={blog.imageUrl}></div>
                <div className="blog__item__text">
                    <span><img src="img/icon/calendar.png" alt="" /> {formatDate(blog.published)}</span>
                    <h5>{blog.title}</h5>
                    <Link to={`/blog-catalog/${blog._id}`}>Read More</Link>
                </div>
            </div>
        </div>
    );
}