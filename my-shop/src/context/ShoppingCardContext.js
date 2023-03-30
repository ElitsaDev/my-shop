import { createContext, useContext, useState } from "react"
//todo change id to real value
const ShoppingCardContext = createContext({
    getItemQuantity(id){},
    increaseCardQuantity(id){},
    decreaseCardQuantity(id){},
    removeFromCard(id){},
    cardQuantity: 0,
    cardItems: [],
    
});

export function useShoppingCard(){
    return useContext(ShoppingCardContext);
}

export function ShoppingCardProvider({ children }){
    
    const [cardItems, setCardItems] = useState([]);
    const cardQuantity = cardItems.reduce((quantity, item) => item.quantity + quantity, 0);
   
    function getItemQuantity(id){
        return cardItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCardQuantity(id){
        setCardItems(currentItems => {
            if(currentItems.find(item => item.id === id) == null){
                return [...currentItems, {id, quantity: 1}]
            }else {
                return currentItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseCardQuantity(id){
        setCardItems(currentItems => {
            if(currentItems.find(item => item.id === id) === 1){
                return currentItems.filter(item => item.id !== id)
            }else {
                return currentItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCard(id){
        setCardItems(currentItems => {return currentItems.filter(item => item.id !== id)});
    }

    return (
        <ShoppingCardContext.Provider 
            value = {{getItemQuantity, 
            increaseCardQuantity, 
            decreaseCardQuantity, 
            removeFromCard,
            cardItems,
            cardQuantity,
            
            }}
        >
            {children}
        </ShoppingCardContext.Provider>
    );
}