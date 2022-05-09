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

            const api = await fetch('https://fakestoreapi.com/products');
            const json = await api.json();

            setData(json)
            setFilter(json)


        }
        fetchData()
        setLoading(false)


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
        < main >
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
                {loading ? "Loading..." : products}
            </div>
        </main>

    )
}