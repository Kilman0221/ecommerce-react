import React, { useState, useEffect } from "react";
import Products from "./Products";
import Carousel from "./Carousel";


export default function Home() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState([])

    let compMount = true;
    useEffect(() => {

        const fetchData = async () => {

            setLoading(true)
            const api = await fetch('https://fakestoreapi.com/products');
            const json = await api.json();

            setData(json)
            setFilter(json)
        }
        //     if (compMount) {
        //         setFilter(await res.clone().json())
        //         setLoading(false)
        //         console.log(filter)

        //     }

        //     return () => {
        //         compMount = false
        //     }
        // }

        fetchData()


    }, [])


    console.log(filter)

    const products = filter.length > 0 ? filter.map(item => {
        return <Products
            id={item.id}
            title={item.title}
            price={item.price}
            desc={item.description}
            category={item.category}
            img={item.image}
            rating={item.rating}
        />
    }) : "";
    return (
        <main>
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
                <label htmlFor="search-bar">
                    <input id="search-bar" type="text" placeholder="Search for products" />
                </label>

            </div>
            <div className="products">
                {products}
            </div>
        </main>
    )
}