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
                            <a href="/shop" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                            <div className="hero__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

