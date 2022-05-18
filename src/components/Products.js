import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from "../CartContext";


export default function Products(props) {

    const { addItems } = useContext(CartContext)

    return (
        <div className="product-card">
            <img src={props.img} alt="product"></img>

            <div className="product-details">
                <Link to={`product/${props.id}`}>

                    <h2>{props.title}</h2>
                    <h3>Price: {props.price}$</h3>

                    <h3>Rating: {props.rating.rate}</h3>
                </Link>

                <span className="anchor-wrapper">
                    <Link to="#" onClick={() => addItems(props.id, props.title, props.price, 1, props.img)}>Add</Link>
                </span>
            </div>

        </div>

    )
}