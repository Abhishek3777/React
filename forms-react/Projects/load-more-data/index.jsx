import React, { useEffect, useState } from 'react';
// import { dummyProducts } from './data';
import axios from 'axios';
import './style.css'

const index = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await axios.get(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`);
            if (response && response.data.products && response.data.products.length) {
                setProducts((prevData) => [...prevData, ...response.data.products]);
                setLoading(false);
            }
            console.log(response);
        }
        catch (e) {
            console.log(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100)
            setDisable(true);
    }, [products])

    if (loading)
        return <h1> Loading items ...</h1>



    return (
        <div className='load-more-container'>
            <div className='product-container'>

                {
                    loading && <h1> Loading items ...</h1>
                }

                {
                    products && products.length ?

                        products.map((item) => (
                            <div className='product' key={`item.id`}>
                                <img src={item.thumbnail} />
                                <p>  {item.title} </p>

                            </div>
                        ))
                        : null
                }

            </div>
            <div className='button-container'>
                <button disabled={disable} onClick={() => setCount(count + 1)}>Load More Products</button>
                {
                    disable ? <p>You have reached to 100 products</p> : null
                }
            </div>
        </div>
    )
}

export default index
