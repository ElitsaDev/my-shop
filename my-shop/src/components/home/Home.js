
import Banner from '../banner/Banner';
import Categories from '../categories/Categories';
import Instagram from '../instagram/Instagram';

import LatestBlog from '../latestBlog/LatestBlog';
import ProductList from '../product/ProductList';
import HeroList from '../hero/HeroList';

export default function Home() {
    

    return (
        <>
           
            <HeroList/>

            <Banner />

            <ProductList />

            <Categories />

            <Instagram />

            <LatestBlog />
        </>
    );
}