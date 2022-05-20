import { useState, useContext } from "react";
import CartContext from "../CartContext";
import CartItem from "./CartItem";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'



export default function ProductPage() {


    const { cartItems, addItems, removeItems } = useContext(CartContext)


    const cart = cartItems.map(item => {
        return <CartItem
            key={nanoid()}
            id={item.id}
            title={item.title}
            price={item.price}
            qty={item.qty}
            img={item.img}
        />
    })

    return (
        <div className="cart-wrapper">
            <div className="finish">
                <button>Proceed to checkout</button>
            </div>
            {cartItems.length < 1
                ?
                <p>"Your cart is empty"</p>
                :
                cart
            }
        </div>
    )
}