import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from './Offcanvas.module.css';

import { useShoppingCard } from "../../context/ShoppingCardContext";
import { AuthContext } from "../../context/AuthContext";

export default function Offcanvas({ open }) {
    const { cardQuantity } = useShoppingCard({});
    const { userEmail, isAuthenticated, isAdmin } = useContext(AuthContext);

    let styleActive = '';
    open === true ? styleActive = "offcanvas-menu-wrapper active" : styleActive = "offcanvas-menu-wrapper"

    return (
        <>
            <div className="offcanvas-menu-overlay"></div>
            <div className={styleActive}>
                <div className="offcanvas__option">
                    <div className="offcanvas__links">
                        {!isAuthenticated ? (
                            <>
                                <Link to="/register">Sign up</Link>
                                <Link to="/login">Sign in</Link>
                            </>
                        )
                            : <>
                                <span style={{ color: 'black', paddingRight: '2rem' }}>{userEmail}</span>
                                <Link to="/logout">Logout</Link>
                            </>
                        }
                    </div>
                    <div className="offcanvas__links">
                        <Link to="#">$USD</Link>
                    </div>
                </div>
                <div className="offcanvas__nav__option">
                    <Link to="/shopping-cart"><img src="img/icon/cart.png" alt="" style={{ width: "1.2rem", height: "1.2rem", position: "relative" }} /> <span>0</span></Link>
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            right: 130,
                            fontSize: "0.8rem",
                            transform: "translate(0%, -15%)",
                        }}>{cardQuantity}</div>
                    <ul className={styles.slicknav_menu}>
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>

                        <li><Link to="/about">About Us</Link></li>

                        <li><Link to="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link to="/checkout">Check Out</Link></li>
                        {isAdmin &&
                            <li><Link to="/blog-create">Blog Create</Link></li>
                        }

                        <li><Link to="/blog-catalog">Blog</Link></li>
                        <li><Link to="/contact">Contacts</Link></li>
                    </ul>
                </div>
                {/* <div id="mobile-menu-wrap"></div> */}
                <div className="offcanvas__text">
                    <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
            </div>
        </>
    );
}