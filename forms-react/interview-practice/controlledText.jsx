import React, { useState } from 'react'

const controlledText = () => {
    const [data, setData] = useState({
        username: ''
    });
    const [capital, setCapital] = useState(false);

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        alert(`The username is ${data.username}`);
    }
    function capitalise() {
        setCapital(prev => !prev);

    }
    const displayedUsername = capital ? data.username.toUpperCase() :
        data.username.toLowerCase();

    return (
        <div>
            <h3>Live showcase <br />
                {displayedUsername}
            </h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='username' value={data.username} onChange={handleChange} placeholder='enter username' />
                <button>submit</button>

            </form>
            <button onClick={capitalise}>Capitalise</button>
        </div>
    )
}

export default controlledText
