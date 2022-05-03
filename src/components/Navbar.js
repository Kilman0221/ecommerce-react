import React from "react";



export default function Navbar() {



    return (
        <nav>
            <div className="logo">e-commerce</div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <ul>
                <li><a href="/">Log-in</a></li>
                <li><a href="/">cart-holder</a></li>
            </ul>
        </nav>
    )
}