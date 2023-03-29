import { useState } from "react";
import Product from "./Product";

export default function ProductList({ products }) {

    const [isActive, setIsActive] = useState({
        bestActive: false,
        newActive: false,
        hotActive: false,
    });

    const [productsBest, setProductsBest] = useState([]);
    const [productsNew, setProductsNew] = useState([]);
    const [productsHotSales, setProductsHotSales] = useState([]);
    const [isNew, setIsNew] = useState(false);
    const [isBestSale, setIsBestSale] = useState(false);

    const handleClick = (e) => {
        if (e.target.tagName === 'LI') {
            if (e.target.innerText === "Best Sellers") {
                let fillteredBestProducts = products.filter(pr => {
                    return pr.featured === true;
                });
                //console.log(fillteredProducts)
                setProductsBest(fillteredBestProducts);
                setIsActive({ bestActive: true, newActive: false, hotActive: false });
            } else if (e.target.innerText === "New Arrivals") {

                let fillteredNewProducts = products.filter(pr => {
                    //console.log( pr.name + Date.parse(pr._createdOn))
                    return Date.parse(pr._createdOn) > 1603355358412;
                });

                fillteredNewProducts.sort((a, b) => (a._createdOn - b._createdOn));
                console.log(fillteredNewProducts)
                setProductsNew(fillteredNewProducts);
                setIsNew(true);
                setIsActive({ bestActive: false, newActive: true, hotActive: false });
            } else if (e.target.innerText === "Hot Sales") {
                let fillteredHotSalesProducts = products.filter(pr => {
                    return pr.rating > 4
                });
                setProductsHotSales(fillteredHotSalesProducts);
                setIsBestSale(true);
                setIsActive({ bestActive: false, newActive: false, hotActive: true });
            }
        }
    };
    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="filter__controls">
                            <li className={isActive.bestActive ? "active" : ''} data-filter="*" onClick={handleClick}>Best Sellers</li>
                            <li className={isActive.newActive ? "active" : ''} data-filter=".new-arrivals" onClick={handleClick}>New Arrivals</li>
                            <li className={isActive.hotActive ? "active" : ''} data-filter=".hot-sales" onClick={handleClick}>Hot Sales</li>
                        </ul>
                    </div>
                </div>
                <div className="row product__filter">
                    {isActive.bestActive && productsBest && productsBest.map(p =>
                        < Product
                            {...p}
                            key={p._id}

                        />
                    )}
                    {isActive.newActive && productsNew && productsNew.map(p =>
                        < Product
                            {...p}
                            key={p._id}
                            isNew={isNew}
                        />
                    )}
                    {isActive.hotActive && productsHotSales && productsHotSales.map(p =>
                        < Product
                            {...p}
                            key={p._id}
                            isBestSale={isBestSale}
                        />
                    )}
                    {!isActive.bestActive && !isActive.newActive && !isActive.hotActive && products.map(p =>
                        < Product
                            {...p}
                            key={p._id}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}