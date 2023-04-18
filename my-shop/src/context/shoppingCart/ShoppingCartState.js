import { useReducer } from "react";
import ShoppingCartContext from './ShoppingCartContext';
import ShoppingCartReducer from './ShoppingCartReduser';
//TODO - if try to add product in state, prevent this action
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    GET_ITEM_QUANTITY,
    CHANGE_CART_QUANTITY,
    CLEAR_CART,
    
} from "./ShoppingCartReduser";

export default function ShoppingCartProvider({ children }) {
    const initialState = {
        cartItems: [],
        cartQuantity: 0,
    };

    const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);

   // const cartQuantity = state.cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    function getItemQuantity(item) {
        dispatch({type: GET_ITEM_QUANTITY, payload: item})
    }
    
    const addToCart = item => {
        dispatch({ type: ADD_TO_CART, payload: item })
    }

    const removeFromCart = itemId => {
        dispatch({ type: REMOVE_ITEM, payload: itemId })
    }

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
      };

    function changeCartQuantity(id, item) {
        dispatch({type: CHANGE_CART_QUANTITY, payload: {id, item}})
    }

    const contextObject = {
        getItemQuantity,
        cartItems: state.cartItems,
        cartQuantity: state.cartItems.length,
        addToCart,
        removeFromCart,
        changeCartQuantity,
        clearCart,
       
    }

    return (
        <ShoppingCartContext.Provider value={contextObject}>
            {children}
        </ShoppingCartContext.Provider>
    );
}