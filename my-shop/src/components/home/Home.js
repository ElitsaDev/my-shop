import Banner from '../banner/Banner';
import Categories from '../categories/Categories';
import Instagram from '../instagram/Instagram';
import LatestBlog from '../latestBlog/LatestBlog';
import ProductList from '../product/ProductList';
import HeroList from '../hero/HeroList';
import { HeroesContext } from '../../context/HeroesContext';
export default function Home({products, onStateHandler}) {
    
    
    const contextValue = {
        onStateHandler,
    };
    return (
        <>
            {/* <!-- Hero Section Begin -->
            <!-- Hero Section End --> */}
            {/* onStateHandler={onStateHandler} */}
            <HeroesContext.Provider value={contextValue} >
            <HeroList  /> 
            </HeroesContext.Provider>
            {/* <!-- Banner Section Begin -->
            <!-- Banner Section End --> */}
            <Banner />

            {/* <!-- Product Section Begin -->
            !-- Product Section End --> */}
            <ProductList products={products}/>

            {/* <!-- Categories Section Begin -->
            <!-- Categories Section End --> */}
            <Categories />

            {/* <!-- Instagram Section Begin -->
            <!-- Instagram Section End --> */}
            <Instagram />

            {/* <!-- Latest Blog Section Begin -->
            <!-- Latest Blog Section End --> */}
            <LatestBlog />
        </>
    );
}