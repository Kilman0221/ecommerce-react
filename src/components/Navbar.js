import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'


export default function Navbar() {

    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        window.addEventListener('storage', handleStorage())

        function handleStorage() {
            console.log("shgawg")
            setCartCount(localStorage.length)
        }
    }, [cartCount])


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
                <li><NavLink to="/cart"><img src="/Assets/cart.svg" alt="" /> ({cartCount})</NavLink></li>
            </ul>
        </nav>
    )
}