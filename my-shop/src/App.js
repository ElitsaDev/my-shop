import './App.css';
import { Routes, Route } from 'react-router-dom';

import PagePreloader from './components/pagePreloader/PagePreloader';
import Offcanvas from './components/offcanvas/Offcanvas';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Shop from './components/shop/Shop';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Checkout from './components/checkout/Checkout';
import ShoppingCard from './components/shopping-card/ShoppingCard';

import { useState, useEffect } from 'react';

import Categories from './components/categories/Categories';
import * as productsService from './services/productsService';

import * as blogService from './services/blogService';
import About from './components/about/About';

import Instagram from './components/instagram/Instagram';
import ShopDetails from './components/shop/ShopDetails';
import BlogCreate from './components/blog/BlogCreate';
import BlogCatalog from './components/blog/BlogCatalog';
import BlogDetails from './components/blog/BlogDetails';
import { ShoppingCardProvider } from './context/ShoppingCardContext';
import Error404 from './components/error404/Error404';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

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

    useEffect(() => {
        blogService.getAll()
            .then(result => {
                //console.log(result);
                setBlogs(result);
            })
            .catch(error => {
                console.log("Error" + error);
            });
    }, []);

    const onCreateBlogSubmit = async (data) => {
        const newBlog = await blogService.create(data)
            .catch(error => {
                console.log("Error" + error);
            });
        setBlogs(state => [...state, newBlog]);
    }

    const onStateHandler = () => {
        setIsLoading(false);
    }

    return (
        <div className="App">
            {isLoading
                ? <PagePreloader />
                :
                <>
                    <ShoppingCardProvider>
                        <Offcanvas />
                        <Header />
                        <main>
                            <Routes>
                                <Route path='/' element={<Home products={Object.values(products)} onStateHandler={onStateHandler} />} />
                                <Route path='/index' element={<Home products={Object.values(products)} onStateHandler={onStateHandler} />} />
                                <Route path='/register' element={<Register />} />
                                <Route path='/login' element={<Login />} />

                                <Route path='/contact' element={<Contact />} />
                                <Route path='/about' element={<About />} />


                                <Route path='/blog-catalog' element={<BlogCatalog blogs={blogs} />} />
                                <Route path='/blog-create' element={<BlogCreate onCreateBlogSubmit={onCreateBlogSubmit} />} />
                                <Route path='/blog-catalog/:blogId' element={<BlogDetails />} />


                                <Route path='/checkout' element={<Checkout />} />
                                <Route path='/shop' element={<Shop products={Object.values(products)} />} />
                                <Route path='/shopping-cart' element={<ShoppingCard products={Object.values(products)} />} />


                                <Route path='/product-catalog/:productId' element={<ShopDetails />} />

                                {/* <Route path='/instagram' element={<Instagram />} /> */}
                                {/* <Route path='/categories' element={<Categories />} /> */}
                                <Route path='*' element={<Error404 />} />
                            </Routes>
                        </main>
                    </ShoppingCardProvider>
                    <Footer />
                </>
            }
        </div>
    );
}

export default App;
