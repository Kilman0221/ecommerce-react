import { useState, useEffect } from "react";



export default function Products(props) {



    return (
        <div className="product-card">
            <img src={props.img}></img>
            <h2>{props.title}</h2>
            <h3>Price: {props.price}$</h3>
        </div>

    )
}