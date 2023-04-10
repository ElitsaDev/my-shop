import { useState, useEffect, createContext } from 'react';
import { productServiceFactory } from '../services/productsService';

export const ProductContext = createContext();

export function ProductProvider({ children}) {
    const [products, setProducts] = useState([]);
  
    const productsService = productServiceFactory();

    useEffect(() => {
        productsService.getAll()
            .then(data => {
                console.log(data)
                setProducts(Object.values(Object.values(data)));
                
            })
            .catch(error => {
                console.log("Error" + error);
            });
    }, []);

    const contextValues = {
        products,
    }

    return (
        <>
            <ProductContext.Provider value={contextValues}>
                {children}
            </ProductContext.Provider>
        </>
    )
}

