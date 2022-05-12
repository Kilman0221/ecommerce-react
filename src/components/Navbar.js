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
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/Loggin">Log-in</NavLink></li>
                <li><NavLink to="/Cart">cart-holder</NavLink></li>
            </ul>
        </nav>
    )
}