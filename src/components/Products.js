import { useState, useEffect } from "react";
import Carousel from "./Carousel";



export default function Products() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState()
    useEffect(() => {

        const getData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');

            setData(await res.clone().json())
            setFilter(await res.json())

            setLoading(false)
        }

        getData();

    }, [])
    console.log(data)
    console.log(loading)


    return (
        <section>
            {loading && "Loading..."}
            <div className="trending">
                <Carousel />
            </div>
            <div className="filter">
                <ul>
                    <li><button>All</button></li>
                    <li><button>Electronics</button></li>
                    <li><button>Jewelery</button></li>
                    <li><button>Men's clothing</button></li>
                    <li><button>Women's clothing</button></li>
                </ul>
            </div>
            <div className="products"></div>
        </section>

    )
}