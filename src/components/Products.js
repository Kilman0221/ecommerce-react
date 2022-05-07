import { useState, useEffect } from "react";



export default function Products(props) {



    return (
        <div className="product-card">
            <img src={props.img}></img>
            <div className="product-details">
                <h2>{props.title}</h2>
                <h3>Price: {props.price}$</h3>
                <a href="#">See more</a>
                <h3>Rating: {props.rating.rate}</h3>
            </div>

        </div>

    )
}