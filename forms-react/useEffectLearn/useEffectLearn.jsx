import React, { useEffect, useState } from 'react'

const useEffectLearn = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Count changed', count);
    },[count]);


    return (
        <>

            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default useEffectLearn
