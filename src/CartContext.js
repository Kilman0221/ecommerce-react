import { createContext, useState } from "react";


const CartContext = createContext();


export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    const addItems = (id, title, qty) => {

        console.log(cartItems)


        if (cartItems.length < 1) {
            setCartItems(prevItems => [...prevItems, { id, title, qty }])
        }
        else {
            setCartItems(prevItems => prevItems.forEach(item => {
                if (item.id === id) {
                    console.log(item.id)
                    // return item.qty++;
                } else {
                    return [...prevItems, { id, title, qty }]
                }
            }))
        }

    }

    const removeItems = (id, title) => {

    }


    return (
        <CartContext.Provider value={{ cartItems, addItems }}>
            {children}
        </CartContext.Provider >
    )
}

export default CartContext;