import React, { useEffect, useState } from 'react'
import axios from 'axios'

const fetchApi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setData(response.data);
            }
            catch (err) {
                console.log(err.message);
            }
        }
        fetchData();

    }, [])

    return (
        <div>
            <div>
                <h1>Posts</h1>
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default fetchApi
