import React, { useContext } from 'react';
import { UserContext } from './userContext';

const Child = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <div>
            <h1>Hi {user}</h1>
            <button onClick={() => setUser('shaurya')}></button>
        </div>
    )
}

export default Child
