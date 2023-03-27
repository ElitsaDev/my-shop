import Banner from '../banner/Banner';
import Categories from '../categories/Categories';
import Instagram from '../instagram/Instagram';
import LatestBlog from '../latestBlog/LatestBlog';
import ProductList from '../product/ProductList';
import HeroList from '../hero/HeroList';

export default function Home({products, heroes}) {
    
    return (
        <>
            {/* <!-- Hero Section Begin -->
            <!-- Hero Section End --> */}
            <HeroList heroes={heroes} />

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