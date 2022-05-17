import { createContext, useState } from "react";


const CartContext = createContext();


export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

    const addItems = (id, title, qty) => {



        if (cartItems.length < 1) {
            setCartItems(prevItems => [{ id, title, qty }])
        }
        else {

            if (cartItems.filter(x => x.id === id).length > 0) {
                setCartItems(prevItems => prevItems.map(item => {
                    if (item.id === id) {
                        item.qty += 1;
                        return item
                    } else return item
                }))
            } else {
                setCartItems(prevItems => [...prevItems, { id, title, qty }])
            }
        }

    }

    const removeItems = (id, title) => {

    }

    console.log(cartItems)

    return (
        <CartContext.Provider value={{ cartItems, addItems }}>
            {children}
        </CartContext.Provider >
    )
}

export default CartContext;