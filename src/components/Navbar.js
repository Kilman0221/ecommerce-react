import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink } from 'react-router-dom'
import CartContext from "../CartContext";


export default function Navbar() {

    const { cartItems } = useContext(CartContext)

    return (
        <nav>
            <div className="logo">
                <NavLink to="/"><h1>E-COMMERCE_</h1></NavLink>
            </div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/login">Log-in</NavLink></li>
                <li><NavLink to="/cart"><img src="/Assets/cart.svg" alt="" /> <span>{cartItems.length}</span></NavLink></li>
            </ul>
        </nav>
    )
}