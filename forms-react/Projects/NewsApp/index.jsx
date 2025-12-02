import React, { useEffect, useState } from 'react'

const index = () => {


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

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function fetchApi() {
        try {
            setLoading(true);
            setData(dummyNews);
            setLoading(false);
        }
        catch (err) {
            setError(err);
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchApi();
    }, []);

    if (loading)
        return <h1> Loading...</h1>

    if (error !== null)
        return <h1> {error}</h1>

    return (
        <div>
            {
                data && data.length > 0 ?

                    data.map((item) => (
                        <div>
                            <h3 key={item.key}>{data.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))
                    : <p>No Data found!</p>
            }
        </div>
    )
}

export default index
