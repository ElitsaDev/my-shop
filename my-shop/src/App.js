import { useState, useEffect, useRef } from 'react';
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
import ShoppingCart from './components/shopping-card/ShoppingCart';
import About from './components/about/About';
import ShopDetails from './components/shop/ShopDetails';
import BlogCreate from './components/blog/blog-create/BlogCreate';
import BlogEdit from './components/blog/blog-edit/BlogEdit';
import BlogCatalog from './components/blog/BlogCatalog';
import BlogDetails from './components/blog/blog-details/BlogDetails';
import Error404 from './components/error404/Error404';
import RouteGuardAdmin from './components/route-guards/RouteGuardAdmin';
import RouteGuardAuth from './components/route-guards/RouteGuardAuth';
import RouteGuardGuest from './components/route-guards/RouteGuardGuest';

import { contactServiceFactory } from './services/contactService';
import { commentServiceFactory } from './services/commentService';
import { heroServiceFactory } from './services/heroService';
import { useOnClickOutside } from './hooks/useOnClickOutside';

import { AuthProvider } from './context/AuthContext';
import { BlogProvider } from './context/BlogContext';
import { ProductProvider } from './context/ProductContext';
import { HeroProvider } from './context/HeroContext';

import { ShoppingCartProvider } from './context/shoppingCart/ShoppingCartState';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [auth, setAuth] = useState({});
    const [heroes, setHeroes] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [comments, setComments] = useState([]);
    const [open, setOpen] = useState(false);
    const node = useRef();

    const heroService = heroServiceFactory();

    useEffect(() => {
        heroService.getAll()
            .then(data => {
                setHeroes(Object.values(data));
                setIsLoading(false);
            })
            .catch(error => {
                console.log( error );
            });
    }, []);

    useOnClickOutside(node, () => setOpen(false));

    const contactService = contactServiceFactory(auth.accessToken);
    const commentService = commentServiceFactory(auth.accessToken);

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
                        <ShoppingCartProvider>
                        <AuthProvider>
                            <div ref={node}>
                                <Offcanvas setOpen={setOpen} open={open} />
                                <Header setOpen={setOpen} open={open} />
                            </div>
                            <main>
                                <BlogProvider>
                                    <ProductProvider>
                                        <HeroProvider >
                                            <Routes>
                                                <Route element={<RouteGuardAdmin />} >
                                                    <Route path='/blog-create' element={<BlogCreate />} />
                                                    <Route path='/blog-catalog/:blogId/edit' element={<BlogEdit />} />
                                                </Route>
                                                <Route element={<RouteGuardAuth />} >
                                                    <Route path='/logout' element={<Logout />} />
                                                </Route>
                                                <Route element={<RouteGuardGuest />} >
                                                    <Route path='/register' element={<Register />} />
                                                    <Route path='/login' element={<Login />} />
                                                </Route>

                                                <Route path='/' element={<Home />} />
                                                <Route path='/index' element={<Home />} />

                                                <Route path='/contact' element={<Contact onCreateContactSubmit={onCreateContactSubmit} />} />
                                                <Route path='/about' element={<About />} />

                                                <Route path='/blog-catalog' element={<BlogCatalog />} />
                                                <Route path='/blog-catalog/:blogId' element={<BlogDetails onCreateCommentSubmit={onCreateCommentSubmit} />} />

                                                <Route path='/checkout' element={<Checkout />} />
                                                <Route path='/shop' element={<Shop />} />
                                                <Route path='/shopping-cart' element={<ShoppingCart />} />

                                                <Route path='/product-catalog/:productId' element={<ShopDetails />} />

                                                <Route path='*' element={<Error404 />} />
                                            </Routes>
                                        </HeroProvider>
                                    </ProductProvider>
                                </BlogProvider>
                            </main>
                        </AuthProvider>
                    </ShoppingCartProvider>    
                    <Footer />
                </>
            }
        </div>
    );
}

export default App;
