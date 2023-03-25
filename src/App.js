import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Offcanvas from './components/offcanvas/Offcanvas';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Shop from './components/shop/Shop';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Checkout from './components/checkout/Checkout';
import ShoppingCard from './components/shopping-card/ShoppingCard';

import { useState, useEffect } from 'react';
import PagePreloader from './components/pagePreloader/PagePreloader';
import Categories from './components/categories/Categories';
import Hero from './components/hero/Hero';

function App() {
    const [isLoading, setIsLoading] = useState(true);	
    const [shoppingProducts, setShoppingProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/shoppingProducts.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setShoppingProducts(data.shoppingProducts);
                setIsLoading(false);
            }).catch(err => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="App">
            {/* {isLoading 
            ? <PagePreloader />
            :  */}
            <>
                <Offcanvas />
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/shop' element={<Shop />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/categories' element={<Categories />} />
                        <Route path='/shopping-cart' element={<ShoppingCard  shoppingProducts={shoppingProducts}/>} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </>
            {/* } */}
        </div>
    );
}

export default App;
