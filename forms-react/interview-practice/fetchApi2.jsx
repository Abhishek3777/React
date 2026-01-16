import React, { useEffect, useState } from 'react'
import axios from 'axios';

const fetchApi2 = () => {
    const users1 = [
        { id: 1, name: 'Abhi' },
        { id: 2, name: 'Sam' }
    ];

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadUsers() {
        try {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(res.data);
        }
        catch(err){
            console.log(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        loadUsers();
    }, [])
    if(loading)
        return <h1>... Loading</h1>
    return (
        <div>
            <ul>
                {
                    users.map((u) => (
                        <li key={u.id}> {u.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default fetchApi2
