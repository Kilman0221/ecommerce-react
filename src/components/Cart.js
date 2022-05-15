import { useEffect, useState } from "react";
import { useParams } from 'react-router'
import { Link } from "react-router-dom";

export default function ProductPage() {

    const [productDetails, setProductDetails] = useState([]);
    const [isRendered, setRender] = useState(false)
    useEffect(() => {
        const fetchProduct = async () => {
            const call = await fetch(`https://fakestoreapi.com/products`)
            const res = await call.json();

            setProductDetails(res)
            setRender(true)
        }
        fetchProduct()

    }, [])

    const cartItems = () => {
        localStorage.foreach(item => {
            console.log("jest")
        })
    }

    return (
        isRendered ?
            <div className="cart-wrapper">
                {cartItems}
            </div>
            : "Loading..."
    )
}