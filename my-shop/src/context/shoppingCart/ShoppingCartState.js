import React, { useReducer, useEffect } from 'react';

import reducer from './ShoppingCartReduser';
import ShoppingCartContext from './ShoppingCartContext';

const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0
};

export const ShoppingCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const remove = (item) => {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
    };

    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id });
    };

    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id });
    };

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' });
    }, [state.cart]);

    const toggleAmount = (id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
    };

    const contextObject = {
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
        addToCart,
    }

    return (
        <ShoppingCartContext.Provider value={contextObject} >
            {children}
        </ShoppingCartContext.Provider>
    );
};
