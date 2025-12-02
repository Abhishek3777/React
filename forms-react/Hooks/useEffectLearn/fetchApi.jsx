import React, { useEffect, useState } from 'react';
import axios from 'axios'

const fetchApi = () => {
    const users1 = [
        { id: 1, name: "Abhi" },
        { id: 2, name: "Rohan" }
    ];

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getUsers() {
        try {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(res.data);
            setLoading(false);
            console.log(res);
        }
        catch (err) {
            console.log(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    if (loading)
        return <h1> ...Loading</h1>

    return (
        <div>
            <h1>Data : </h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default fetchApi
