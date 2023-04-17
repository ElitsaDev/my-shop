export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const GET_ITEM_QUANTITY = 'GET_ITEM_QUANTITY';
export const CHANGE_CART_QUANTITY = 'CHANGE_CART_QUANTITY';

export default function ShoppingCartReducer(state, action) {
    switch (action.type) {

        case ADD_TO_CART: {
            if (state.cartItems.find(item => item._id === action.payload._id) == null) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
                }
            } else {
                /*
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                });
                */
                return state.cartItems.map(item => {
                    if(item._id === action.payload._id){
                        return  {
                        ...state,
                        cartItems: [...state.cartItems, { ...action.payload, quantity: Number(action.payload.quantity + 1) }]
                        }  
                    } else {
                        return {
                        ...state,
                        cartItems: [...state.cartItems, { ...action.payload }]
                        }
                    }
                });
                    
            }
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.payload._id)
            }
        }
        case GET_ITEM_QUANTITY: {
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item._id === action.payload._id)?.quantity || 0
            }
        }

        case CHANGE_CART_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) =>
                    item._id === action.payload.id ? (item.quantity = action.payload.quantity) : item.quantity
                ),
            };
        default:
            return state;
    }
}

 // return cardItems.find(item => item.id === id)?.quantity || 0;

