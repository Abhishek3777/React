import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const index = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const dummyNews = [
        {
            title: "AI Revolution: New Breakthrough in Machine Learning",
            description: "Researchers have developed a model that mimics human reasoning.",
            urlToImage: "https://via.placeholder.com/300x200?text=AI+News",
        },
        {
            title: "Global Markets Rally Amid Tech Growth",
            description: "Stocks surged as tech companies reported record profits.",
            urlToImage: "https://via.placeholder.com/300x200?text=Market+News",
        },
        {
            title: "SpaceX Announces Next Mars Mission",
            description: "The mission aims to test new life-support systems for future colonies.",
            urlToImage: "https://via.placeholder.com/300x200?text=Space+News",
        },
    ];

    async function fetchNews() {
        try {
            setLoading(true);
            setError(null);
            // const res = await axios.get("https://newsapi.org/v2/top-headlines", {
            //     params: {
            //         apiKey: API_KEY,
            //     }
            // })
            setData(dummyNews);
        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchNews();
    }, [])

    if (loading)
        return <h1> Please wait loading!</h1>

    if (error !== null)
        return <h1>{error}</h1>


    return (
        <div>
            <h1>News App</h1>
            {
                data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className='content'>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            {
                                item.urlToImage && <img src={item.urlToImage} alt="image" style={{ width: "300px" }} />
                            }

                        </div>
                    )

                    )

                ) : (
                    <p> No News Available</p>
                )
            }
        </div>
    )
}

export default index
