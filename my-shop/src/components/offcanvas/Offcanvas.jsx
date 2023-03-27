import { Link } from "react-router-dom";

export default function Offcanvas() {
    return (
        <>
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__option">
                    <div className="offcanvas__links">
                        <Link to="/register">Sign up</Link>
                        <Link to="/login">Sign in</Link>  
                        <Link to="/faqs">FAQs</Link>   
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
                    <a href="#" className="search-switch"><img src="img/icon/search.png" alt="" /></a>
                    <a href="#"><img src="img/icon/heart.png" alt="" /></a>
                    <a href="#"><img src="img/icon/cart.png" alt="" /> <span>0</span></a>
                    <div className="price">$0.00</div>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__text">
                    <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
            </div>
        </>
    );
}