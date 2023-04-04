import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import PagePreloader from './components/pagePreloader/PagePreloader';
import Offcanvas from './components/offcanvas/Offcanvas';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import Shop from './components/shop/Shop';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Checkout from './components/checkout/Checkout';
import ShoppingCard from './components/shopping-card/ShoppingCard';
import About from './components/about/About';
import ShopDetails from './components/shop/ShopDetails';
import BlogCreate from './components/blog/blog-create/BlogCreate';
import BlogEdit from './components/blog/blog-edit/BlogEdit';
import BlogCatalog from './components/blog/BlogCatalog';
import BlogDetails from './components/blog/blog-details/BlogDetails';
import Error404 from './components/error404/Error404';

import { authServiceFactory } from './services/authService';
import { productServiceFactory } from './services/productsService';
import { blogServiceFactory } from './services/blogService';
import { contactServiceFactory } from './services/contactService';
import { commentServiceFactory } from './services/commentService';

import { ShoppingCardProvider } from './context/ShoppingCardContext';
import { AuthProvider } from './context/AuthContext';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [auth, setAuth] = useState({});
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [comments, setComments] = useState([]);
    const productsService = productServiceFactory(auth.accessToken);
    //const authService = authServiceFactory(auth.accessToken);
    const blogService = blogServiceFactory(auth.accessToken);
    const contactService = contactServiceFactory(auth.accessToken);
    const commentService = commentServiceFactory(auth.accessToken);


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
    };

    const onEditBlogSubmit = async (data) => {
        const editBlog = await blogService.edit(data._id, data)
            .catch(error => {
                console.log("Error" + error);
            });
        setBlogs(state => state.map(blog => blog._id === data._id ? editBlog : blog))
    };

    const onStateHandler = () => {
        setIsLoading(false);
    };

    const onCreateContactSubmit = async (data) => {
        const newContact = await contactService.create(data)
            .catch(error => {
                console.log("Error" + error);
            });
        setContacts(state => [...state, newContact]);
    };

    const onCreateCommentSubmit = async (data) => {
        const newComment = await commentService.create(data)
            .catch(error => {
                console.log("Error" + error);
            });
        setComments(state => [...state, newComment]);
    };

    return (
        <div className="App">
            {isLoading
                ? <PagePreloader />
                :
                <>
                    <ShoppingCardProvider>
                        <AuthProvider>
                            <Offcanvas />
                            <Header />
                            <main>
                                <Routes>

                                    <Route path='/' element={<Home products={Object.values(products)} onStateHandler={onStateHandler} />} />
                                    <Route path='/index' element={<Home products={Object.values(products)} onStateHandler={onStateHandler} />} />

                                    <Route path='/register' element={<Register />} />
                                    <Route path='/login' element={<Login />} />
                                    <Route path='/logout' element={<Logout />} />
                                    <Route path='/contact' element={<Contact onCreateContactSubmit={onCreateContactSubmit} />} />
                                    <Route path='/about' element={<About />} />

                                    <Route path='/blog-catalog' element={<BlogCatalog blogs={blogs} />} />
                                    <Route path='/blog-create' element={<BlogCreate onCreateBlogSubmit={onCreateBlogSubmit} />} />
                                    <Route path='/blog-catalog/:blogId' element={<BlogDetails onCreateCommentSubmit={onCreateCommentSubmit} />} />
                                    <Route path='/blog-catalog/:blogId/edit' element={<BlogEdit onEditBlogSubmit={onEditBlogSubmit} />} />


                                    <Route path='/checkout' element={<Checkout />} />
                                    <Route path='/shop' element={<Shop products={Object.values(products)} />} />
                                    <Route path='/shopping-cart' element={<ShoppingCard products={Object.values(products)} />} />


                                    <Route path='/product-catalog/:productId' element={<ShopDetails />} />

                                    <Route path='*' element={<Error404 />} />
                                </Routes>
                            </main>
                        </AuthProvider>
                    </ShoppingCardProvider>
                    <Footer />
                </>
            }
        </div>
    );
}

export default App;
