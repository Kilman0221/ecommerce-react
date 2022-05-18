import { createContext, useState } from "react";


const CartContext = createContext();


export function CartProvider({ children }) {


    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart') || "[]"));


    const addItems = (id, title, price, qty, img) => {

        if (cartItems.length < 1) {
            setCartItems(prevItems => [{ id, title, price, qty, img }])
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
                setCartItems(prevItems => [...prevItems, { id, title, price, qty, img }])
            }
        }

    }

    const removeItems = (id) => {

        setCartItems(prevItems => prevItems.map(item => {   //
            if (item.id === id) {
                item.qty -= 1;
                return item
            } else return item
        }).filter(x => x.qty > 0)) //flitering items which qty value is below 1
    }


    localStorage.setItem('cart', JSON.stringify(cartItems))

    return (
        <CartContext.Provider value={{ cartItems, addItems, removeItems }}>
            {children}
        </CartContext.Provider >
    )
}

export default CartContext;