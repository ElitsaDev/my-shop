import { Link } from "react-router-dom";
export default function Product({
    branding,
    categories,
    color,
    imageUrl,
    name,
    price,
    isNew,
    isBestSale,
}) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
            <div className="product__item">
                <div className="product__item__pic set-bg" data-setbg={imageUrl} >
                    <img src={imageUrl}></img>
                    {isNew && <span className="label">New</span>}
                    {isBestSale && <span className="label">Sale</span>}
                    <ul className="product__hover">
                        <li><Link to="#"><img src="img/icon/heart.png" alt="" /></Link></li>
                        <li><Link to="#"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></Link></li>
                        <li><Link to="#"><img src="img/icon/search.png" alt="" /></Link></li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6>{name}</h6>
                    <Link to="#" className="add-cart">+ Add To Cart</Link>
                    <div className="rating">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <h5>${price}</h5>
                    <div className="product__color__select">
                        <label htmlFor="pc-1">
                            <input type="radio" id="pc-1" />
                        </label>
                        <label className="active black" htmlFor="pc-2">
                            <input type="radio" id="pc-2" />
                        </label>
                        <label className="grey" htmlFor="pc-3">
                            <input type="radio" id="pc-3" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}