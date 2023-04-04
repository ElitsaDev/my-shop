import { Link } from "react-router-dom";
import { useShoppingCard } from "../../context/ShoppingCardContext";
import { formatCurrency } from "../../utils/currencyFormater";

export default function Product({
    _id,
    branding,
    categories,
    color,
    imageUrl,
    name,
    price,
    isNew,
    isBestSale,
}) {
    const { increaseCardQuantity } = useShoppingCard();

    return (
        
        <div className="product__item">
            <div className="product__item__pic set-bg" data-setbg={imageUrl} >
                <img src={imageUrl} alt={name}></img>
                {isNew && <span className="label">New</span>}
                {isBestSale && <span className="label">Sale</span>}
                <ul className="product__hover">
                    <li><Link to="#"><img src="img/icon/heart.png" alt="" /></Link></li>
                    <li><Link to={`/product-catalog/${_id}`}><img src="img/icon/details_icon.png" alt="" /></Link></li>
                </ul>
            </div>
            <div className="product__item__text">
                <h6>{name}</h6>
                <Link to="#" className="add-cart" onClick={() => increaseCardQuantity(_id)}>+ Add To Cart</Link>
                <div className="rating">
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <h5>{formatCurrency(price)}</h5>
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

    );
}