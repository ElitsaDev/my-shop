const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

            if (state.cart.find((cartItem) => cartItem._id === action.payload._id) == null) {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, amount: 1 }]
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, amount: action.payload.amount }]
                }
            }

        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            };

        case 'REMOVE_ITEM':
            return {
                ...state,
                cart: state.cart.filter((cartItem) => cartItem._id !== action.payload._id)
            };

        case 'GET_TOTALS':
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem;
                    const itemTotal = price * amount;
                    cartTotal.total += itemTotal;
                    cartTotal.amount += amount;
                    return cartTotal;
                },
                {
                    total: 0,
                    amount: 0
                }
            );
            total = parseFloat(total.toFixed(2));
            return {
                ...state,
                total,
                amount
            };
            
        case 'TOGGLE_AMOUNT':
            console.log(action.payload)
            let tempCart = state.cart
                .map((cartItem) => {
                    if (cartItem._id === action.payload.id) {
                        if (action.payload.type === 'increase') {
                            return { ...cartItem, amount: cartItem.amount + 1 };
                        } else if (action.payload.type === 'decrease') {
                            return { ...cartItem, amount: cartItem.amount - 1 };
                        }
                    }
                    return cartItem;
                })
                .filter((cartItem) => cartItem.amount !== 0);
            return {
                ...state,
                cart: tempCart
            };
    }
    throw new Error('no matching action type');
};

export default reducer;
