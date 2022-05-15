import React from "react";
import { NavLink } from 'react-router-dom'


export default function Navbar() {



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
                <li><NavLink to="/loggin">Log-in</NavLink></li>
                <li><NavLink to="/cart"><img src="/Assets/cart.svg" alt="" /> (0)</NavLink></li>
            </ul>
        </nav>
    )
}