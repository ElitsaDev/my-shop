import Hero from '../hero/Hero';
import Banner from '../banner/Banner';
import Product from '../product/Product';
import Categories from '../categories/Categories';
import Instagram from '../instagram/Instagram';
import LatestBlog from '../latestBlog/LatestBlog';


export default function Home() {
    return (
        <>
            {/* <!-- Hero Section Begin -->
            <!-- Hero Section End --> */}
            <Hero />

            {/* <!-- Banner Section Begin -->
            <!-- Banner Section End --> */}
            <Banner />

            {/* <!-- Product Section Begin -->
            !-- Product Section End --> */}
            <Product />

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