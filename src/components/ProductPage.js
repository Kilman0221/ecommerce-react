import { useEffect, useState } from "react";
import { useParams } from 'react-router'
import { Link } from "react-router-dom";

export default function ProductPage() {

    const { id } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const [isRendered, setRender] = useState(false);


    useEffect(() => {
        const fetchProduct = async () => {
            const call = await fetch(`https://fakestoreapi.com/products/${id}`)
            const res = await call.json();

            setProductDetails(res)
            setRender(true)
        }
        fetchProduct()

    }, [])




    function addToCart(id) {
        localStorage.setItem(id, 1)
        console.log("aerthaet")

    }
    console.log(productDetails)
    return (
        isRendered ?
            <div className="product">
                <img src={productDetails.image} alt="product" />
                <div className="product-info">
                    <h1>{productDetails.title}</h1>
                    <p>{productDetails.description}</p>
                    <p>Rating: {productDetails.rating.rate} ({productDetails.rating.count})</p>
                    <Link to="#" onClick={() => addToCart(productDetails.id)}>Add to cart</Link>
                </div>
            </div>
            : "Loading..."
    )
}