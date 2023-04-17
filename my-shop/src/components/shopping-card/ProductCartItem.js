import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './ProductCartItem.module.css';

import { productServiceFactory } from '../../services/productsService';
import { useService } from "../../hooks/useService";
import { useShoppingCart } from '../../context/shoppingCart/ShoppingCartContext';

import { formatCurrency } from "../../utils/currencyFormater";
import ShoppingCartContext from '../../context/shoppingCart/ShoppingCartContext';

export default function ProductCartItem({
   item
}) {
    
    const { cartItems, removeItem, getItemQuantity, changeCartQuantity } = useShoppingCart();
    const [ quantity, setQuantity] = useState(Number(item.quantity));


   useEffect(() => {
    setQuantity(quantity)
   }, [quantity]);

    return (
        <tr>
            <td className="product__cart__item">
                <div className="product__cart__item__pic">
                    <img src={item.imageUrl} alt="" />
                </div>
                <div className={styles["product__cart__item__text"]}>
                    <h6>{item.name}</h6>
                    <h5>${item.price}</h5>
                </div>
            </td>

            <td className="quantity__item">
                <div className={styles["quantity"]}>
                    <div className="pro-qty-2">
                         {item.quantity > 0 && quantity > 0 &&
                             <button onClick={() => setQuantity(quantity - 1) }><i class="fa fa-angle-left dec qtybtn"></i></button>
                        }
                         <input type="text" value={quantity} className={styles["counter"]} onClick={() => changeCartQuantity({id: item.id, quantity: quantity })} />
                        <button onClick={() => setQuantity(quantity + 1)}><i class="fa fa-angle-right inc qtybtn"></i></button> 
                    </div>
                </div>
            </td>
             <td className="cart__price">{(item.discount && formatCurrency(item.price * (1 - item.discount / 100) * quantity)) || formatCurrency(item.price * quantity)}</td> 
            <td className="cart__close"><i onClick={() => removeItem(item)} className="fa fa-close"></i></td>
        </tr>
    );
}