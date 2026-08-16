import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


function fetchApi2() {

    const [data, setData] = useState([]);
    const [loading, setLoadeing] = useState(true);

    async function fetchData() {


        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(res.data);
        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setLoadeing(false);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (

        <>
            <div className="main">
                {data && data.map((d) => (
                    <div key={d.id}>
                        <p>{d.id}</p>
                        <p>{d.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default fetchApi2
