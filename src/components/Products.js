import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export default function Products(props) {



    return (
        <div className="product-card">
            <img src={props.img}></img>
            <Link to={`product/${props.id}`}>

                <div className="product-details">
                    <h2>{props.title}</h2>
                    <h3>Price: {props.price}$</h3>
                    <span className="anchor-wrapper">
                        <Link to={
                            {
                                pathname: `products/product/${props.id}`,
                                state: { id: props.id }
                            }}>See more</Link>
                    </span>
                    <h3>Rating: {props.rating.rate}</h3>
                </div>
            </Link>

        </div>

    )
}