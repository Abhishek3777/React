import React, { useEffect, useState } from 'react';
// import { dummyProducts } from './data';
import axios from 'axios';

const index = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await axios.get(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20
                }`);
            if (response && response.data.products && response.data.products.length) {
                setProducts(response.data.products);
            }
            setLoading(false);
        }
        catch (e) {
            console.log(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading)
        return <h1> Loading items ...</h1>

    console.log(products);

    return (
        <div className='container'>
            <div className='product-container'>
                <h1>Products Data</h1>
                {
                    loading && <h1> Loading items ...</h1>
                }

                {
                    products && products.length ?

                        products.map((item) => (
                            <div className='product' key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />
                                <p>  {item.title} </p>
                                <p>{item.description}</p>
                            </div>
                        ))
                        : null
                }

            </div>
            <div className='button-container'>
                <button>Load More Products</button>
            </div>
        </div>
    )
}

export default index
