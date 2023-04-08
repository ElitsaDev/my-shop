import { Link } from "react-router-dom";

export default function Hero({
    title,
    imageUrl,
    collection,
    description,
}) {
    return (
        <div className="hero__items set-bg" data-setbg={imageUrl}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-7 col-md-8">
                        <div className="hero__text">
                            <h6>{collection}</h6>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <Link to="/shop" className="primary-btn">Shop now <span className="arrow_right"></span></Link>
                            <div className="hero__social">
                                <Link to="#"><i className="fa fa-facebook"></i></Link>
                                <Link to="#"><i className="fa fa-twitter"></i></Link>
                                <Link to="#"><i className="fa fa-pinterest"></i></Link>
                                <Link to="/instagram"><i className="fa fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

