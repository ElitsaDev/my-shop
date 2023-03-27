import { Link } from "react-router-dom";

export default function Header() {
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
                                    <Link to="/faqs">FAQs</Link>
                                </div>
                                <div className="header__top__hover">
                                    <span>Usd <i className="arrow_carrot-down"></i></span>
                                    <ul>
                                        <li>USD</li>
                                        <li>EUR</li>
                                        <li>USD</li>
                                    </ul>
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
                                        <li><Link to="/shop-details">Shop Details</Link></li>
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
                            <Link to="#" className="search-switch"><img src="img/icon/search.png" alt="" /></Link>
                            <Link to="#"><img src="img/icon/heart.png" alt="" /></Link>
                            <Link to="#"><img src="img/icon/cart.png" alt="" /> <span>0</span></Link>
                            <div className="price">$0.00</div>
                        </div>
                    </div>
                </div>
                <div className="canvas__open"><i className="fa fa-bars"></i></div>
            </div>
        </header>
    );
}