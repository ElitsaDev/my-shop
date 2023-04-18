import styles from './ProductCartItem.module.css';
import { useShoppingCart } from '../../context/shoppingCart/ShoppingCartContext';

export default function ProductCartItem({
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
    amount
}) {
    const { remove, toggleAmount } = useShoppingCart()

    return (
        <tr>
            <td className="product__cart__item">
                <div className="product__cart__item__pic">
                    <img src={imageUrl} alt="" />
                </div>
                <div className={styles["product__cart__item__text"]}>
                    <h6>{name}</h6>
                    <h5>${price}</h5>
                </div>
            </td>

            <td className="quantity__item">
                <div className={styles["quantity"]}>
                    <div className="pro-qty-2">

                        <button onClick={() => toggleAmount(_id, 'decrease')}><i className="fa fa-angle-left dec qtybtn"></i></button>
                        <p className="amount">{amount}</p>
                        <button onClick={() => toggleAmount(_id, 'increase')}><i className="fa fa-angle-right inc qtybtn"></i></button>
                    </div>
                </div>
            </td>
            <td className="cart__close"><i onClick={() => remove({
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
                amount
            })} className="fa fa-close"></i></td>
        </tr>
    );
}