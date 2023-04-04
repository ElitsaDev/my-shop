import { useContext } from "react";
import { Link } from "react-router-dom";
import { useShoppingCard } from "../../context/ShoppingCardContext";
import { AuthContext } from "../../context/AuthContext";

export default function Offcanvas() {
    const { cardQuantity } = useShoppingCard({});
    const { userEmail, isAuthenticated, isAdmin } = useContext(AuthContext);
    return (
        <>
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__option">
                    <div className="offcanvas__links">
                        {!isAuthenticated ? (
                            <>
                                <Link to="/register">Sign up</Link>
                                <Link to="/login">Sign in</Link>
                            </>
                        )
                            : <>
                                <span style={{ color: 'white', paddingRight: '2rem' }}>{userEmail}</span>
                                <Link to="/logout">Logout</Link>
                            </>
                        }
                    </div>
                    <div className="offcanvas__top__hover">
                        <span>Usd <i className="arrow_carrot-down"></i></span>
                        <ul>
                            <li>USD</li>
                            <li>EUR</li>
                            <li>USD</li>
                        </ul>
                    </div>
                </div>
                <div className="offcanvas__nav__option">
                    <ul>
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
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__text">
                    <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
            </div>
        </>
    );
}