import { Link, useNavigate } from "react-router-dom";

import { useShoppingCart } from "../../context/shoppingCart/ShoppingCartContext";

import ProductCartItem from "./ProductCartItem";
import { useState, useEffect } from "react";

export default function ShoppingCart({
    cardId,
}) {
    const [total, setTotal] = useState();
    const { cartItems, cartQuantity, clearCart } = useShoppingCart();

   
    useEffect(() => {
        setTotal(
            cartItems.reduce((accumulator, currentValue) => accumulator + Number(currentValue.price) * currentValue.quantity, 0)
        );
      }, [cartItems]);
    
    console.log(cartItems);
    console.log(cartQuantity)
    return (
        <>
            {/* <!-- Breadcrumb Section Begin --> */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shopping Cart</h4>
                                <div className="breadcrumb__links">
                                    <Link to="/">Home</Link>
                                    <Link to="/shop">Shop</Link>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Section End --> */}

            {/* <!-- Shopping Cart Section Begin --> */}
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping__cart__table">
                                {cartItems.length === 0
                                    && (<>
                                        <h4>Cart is Empty</h4>
                                        <img src="img/shopping-cart/empty-cart.png" alt="" />
                                    </>)
                                }
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems && cartItems.map((item) =>
                                            <ProductCartItem key={item._id} item={item} />
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <Link to="/shop">Continue Shopping</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn update__btn">
                                        <Link to="#" onClick={clearCart}><i className="fa fa-spinner"></i> Clear cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart__discount">
                                <h6>Discount codes</h6>
                                <form action="#">
                                    <input type="text" placeholder="Coupon code" />
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                            <div className="cart__total">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Subtotal <span>$ {total}</span></li>
                                    <li>Total with VAT <span>$ {(total * 1.2).toFixed(2)}</span></li>
                                </ul>
                                <Link to={`/checkout/${cardId}`} className="primary-btn">Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Shopping Cart Section End --> */}
        </>
    );
}