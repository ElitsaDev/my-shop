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
import * as productsService from './services/productsService';
import * as heroService from './services/heroService';
import About from './components/about/About';
import BlogDetails from './components/blog/BlogDetails';
import Instagram from './components/instagram/Instagram';
import ShopDetails from './components/shop/ShopDetails';
function App() {
    const [isLoading, setIsLoading] = useState(true);	
    const [products, setProducts] = useState([]);
    const [heroes, setHeroes] = useState([]);
    
    useEffect(() => {
        heroService.getAll()
            .then(data => {
                setHeroes(Object.values(Object.values(data)));
                setIsLoading(false);
            })
            .catch(error => {
                console.log("Error" + error);
            })
   
      productsService.getAll()
        .then(data => {
/* Object.values(data)
0: {_id: '0', 
    categories: 'clothing', 
    branding: 'Hermes', 
    name: 'Piqué Biker Jacket', 
    imageUrl: 'img/product/product-1.jpg', …}
1: {_id: '1', categories: 'shoes', branding: 'Louis Vuitton', name: 'Ankle Boots', imageUrl: 'img/product/product-2.jpg', …}
2: {_id: '2', categories: 'clothing', branding: 'Chanel', name: 'Velvet loose sweatshirt', imageUrl: 'img/product/product-3.jpg', …}
3: {_id: '3', categories: 'accessories', branding: 'Hermes', name: 'Basic Flowing Scarf', imageUrl: 'img/product/product-4.jpg', …}
length: 4
 */
            setProducts(Object.values(Object.values(data)));
            setIsLoading(false);   
        })
        .catch(error => {
            console.log("Error" + error);
        });
        
    }, []);

    return (
        <div className="App">
             {isLoading 
            ? <PagePreloader />
            :  
            <>
            <BrowserRouter>
                {/* <Offcanvas /> */}
                <Header />
                <Routes>
                    
                        <Route path='/' element={<Home products={Object.values(products)} heroes={Object.values(heroes)}/>} />
                        <Route path='/index' element={<Home products={Object.values(products)} heroes={Object.values(heroes)}/>} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/shop' element={<Shop products={products}/>} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/categories' element={<Categories />} />
                        <Route path='/shopping-cart' element={<ShoppingCard />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/instagram' element={<Instagram />} />
                        <Route path='/shop-details' element={<ShopDetails />} />
                        <Route path='/blog-details' element={<BlogDetails/>} />
                        <Route path='*' element={<h1>Error 404</h1>} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </>
             } 
        </div>
    );
}

export default App;
