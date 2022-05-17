import React, { useState, useEffect } from "react";
import Products from "./Products";
import Carousel from "./Carousel";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

export default function Home() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState([])
    useEffect(() => {

        const fetchData = async () => {

            const api = await fetch('https://fakestoreapi.com/products');
            const json = await api.json();

            setData(json)
            setFilter(json)
            setLoading(false)


        }
        fetchData()

    }, [])



    //filter functionality

    const filterProducts = (category) => {
        const updated = data.filter((prod) => prod.category === category)
        setFilter(updated);
    }
    const products = filter.length > 0 ? filter.map(item => {
        return <Products
            key={nanoid()}
            id={item.id}
            title={item.title}
            price={item.price}
            desc={item.description}
            category={item.category}
            img={item.image}
            rating={item.rating}
        />
    }) : "";
    function handleSearch(event) {
        const input = event.target.value
        if (input === "") {
            setFilter(data)
        } else {
            const searched = data.filter((prod) => prod.title.toLowerCase().includes(input.toLowerCase()))
            setFilter(searched)
        }

    }



    return (
        < main >
            <div className="trending">
                <Carousel />
            </div>
            <div className="filter">
                <ul>
                    <li><button onClick={() => { setFilter(data) }}>All</button></li>
                    <li><button onClick={() => { filterProducts("electronics") }}>Electronics</button></li>
                    <li><button onClick={() => { filterProducts("jewelery") }}>Jewelery</button></li>
                    <li><button onClick={() => { filterProducts("men's clothing") }}>Men's clothing</button></li>
                    <li><button onClick={() => { filterProducts("women's clothing") }}>Women's clothing</button></li>
                </ul>
                <label htmlFor="search-bar">
                    <input id="search-bar" type="text" onChange={handleSearch} placeholder="Search for products" />
                </label>

            </div>
            <div className="products">

                {loading ? "Loading..." : products}
            </div>
        </main>

    )
}