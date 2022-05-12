import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

export default function ProductPage() {

    const { prodId } = useParams();
    const [productDetails, setProductDetails] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            const call = await (`fetch('https://fakestoreapi.com/products/${prodId}')`)
            const res = await call.json();

            setProductDetails(res)
        }
        fetchProduct()

        console.log(productDetails)
    }, [])


    return (
        <div className="product">
        </div>
    )
}