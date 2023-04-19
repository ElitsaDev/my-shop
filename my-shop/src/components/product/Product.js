import { Link } from "react-router-dom";
import styles from './Product.module.css';

import { formatCurrency } from "../../utils/currencyFormater";
import Rating from "./Rating";

import { useShoppingCart } from "../../context/shoppingCart/ShoppingCartContext";

export default function Product({
    _id,
    categories,
    branding,
    name,
    imageUrl,
    price,
    rating,
    color,
    available,
    isNew,
    isBestSale,
}) {

    const { cart, remove, addToCart } = useShoppingCart()

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
                
                {cart.some((product) => product._id === _id)
                    ? <Link to="#" className="remove-cart"
                        onClick={() => remove({
                            _id,
                            categories,
                            branding,
                            name,
                            imageUrl,
                            price,
                            rating,
                            color,
                            available,
                            isNew,
                            isBestSale,
                        })}
                    >- Remove from Cart</Link>
                    : <Link to="#" className={available ? styles["add-cart"] : styles["out-of-stock"]}
                        onClick={() => addToCart({
                            _id,
                            categories,
                            branding,
                            name,
                            imageUrl,
                            price,
                            rating,
                            color,
                            available,
                            isNew,
                            isBestSale,
                        })}
                    >{!available ? "Sorry, Sold Out " : "+ Add To Cart"}</Link>
                }

                <Rating value={rating} />
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