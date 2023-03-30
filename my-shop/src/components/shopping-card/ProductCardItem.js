import { useShoppingCard } from "../../context/ShoppingCardContext";
import { Link } from "react-router-dom";
import styles from './ShoppingCard.module.css';
import { formatCurrency } from "../../utils/currencyFormater";
import * as productsService from '../../services/productsService';
import { useState, useEffect } from 'react';

export default function ProductCardItem({
    id,
    imageUrl,
    name,
    price,
    discount,
}) {
    const { getItemQuantity, increaseCardQuantity, decreaseCardQuantity, removeFromCard } = useShoppingCard();
    const [ product, setProduct] = useState();

    useEffect(() => {
         productsService.getAll()
            .then(products => {
             setProduct(Object.values(Object.values(products)).find(p => p._id === id));   
              
            })
            .catch(error => {
                console.log("Error" + error);
            });

    }, [id]);

    const quantity = getItemQuantity(id);

    return (
        <tr>
            <td className="product__cart__item">
                <div className="product__cart__item__pic">
                    <img src={product.imageUrl} alt="" />
                </div>
                <div className="product__cart__item__text">
                    <h6>{product.name}</h6>
                    <h5>${product.price}</h5>
                    <Link to='#' className="add-cart" onClick={() => increaseCardQuantity(id)}>+ Add To Cart</Link>
                </div>
            </td>

            <td className="quantity__item">
                <div className="quantity">
                    <div className="pro-qty-2">
                        {quantity > 0 &&
                            <button onClick={() => decreaseCardQuantity(id)}><i class="fa fa-angle-left dec qtybtn"></i></button>
                        }
                        <input type="text" value={quantity} className={styles["counter"]} onClick={() => removeFromCard(id)} />
                        <button onClick={() => increaseCardQuantity(id)}><i class="fa fa-angle-right inc qtybtn"></i></button>
                    </div>
                </div>
            </td>
            <td className="cart__price">{(discount && formatCurrency(price * (1 - discount / 100) * quantity)) || formatCurrency(price * quantity)}</td>
            <td className="cart__close"><i  onClick={() => removeFromCard(id)}  className="fa fa-close"></i></td>
        </tr>
    );
}