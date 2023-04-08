import Banner from '../banner/Banner';
import Categories from '../categories/Categories';
import Instagram from '../instagram/Instagram';
import LatestBlog from '../latestBlog/LatestBlog';
import ProductList from '../product/ProductList';
import HeroList from '../hero/HeroList';
import { HeroesContext } from '../../context/HeroesContext';

export default function Home({ products, onStateHandler }) {

    const contextValue = {
        onStateHandler,
    };

    return (
        <>
            <HeroesContext.Provider value={contextValue} >
                <HeroList />
            </HeroesContext.Provider>

            <Banner />

            <ProductList products={products} />

            <Categories />

            <Instagram />

            <LatestBlog />
        </>
    );
}