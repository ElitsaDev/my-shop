import { Link } from "react-router-dom";
import { useShoppingCard } from "../../context/ShoppingCardContext";

export default function Header() {
    const { cardQuantity } = useShoppingCard({});
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="header__top__left">
                                <p>Free shipping, 30-day return or refund guarantee.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="header__top__right">
                                <div className="header__top__links">
                                    <Link to="/register">Sign up</Link>
                                    <Link to="/login">Sign in</Link>  
                                    <Link to="#">FAQs</Link>
                                    <Link to="#">$USD</Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__logo">
                            <Link to="/"><img src="img/logo.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="#">Pages</Link>
                                    <ul className="dropdown">
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/shopping-cart/details">Shop Details</Link></li>
                                        <li><Link to="/shopping-cart">Shopping Cart</Link></li>
                                        <li><Link to="/checkout">Check Out</Link></li>
                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contacts</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                            <Link to="/shopping-cart"><img src="img/icon/cart.png" alt="" style={{width: "1.2rem", height: "1.2rem", position: "relative"}}/> <span>0</span></Link>
                            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
                                style={{
                                    color: "white", 
                                    width: "1.5rem", 
                                    height: "1.5rem", 
                                    position: "absolute", 
                                    bottom: 0, 
                                    right: 0, 
                                    fontSize: "0.8rem",
                                    transform: "translate(-95%, -65%)",
                                }}>{cardQuantity}</div>
                        </div>
                    </div>
                </div>
                <div className="canvas__open"><i className="fa fa-bars"></i></div>
            </div>
        </header>
    );
}