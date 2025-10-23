import React, { useEffect, useState } from 'react'

const useEffectLearn = () => {
    const [count, setCount] = useState(0);


    // 1. useEffect without dependency array
    useEffect(() => {
        console.log('effect1');
    });


    // 2. useEffect with []
    // runs only once after the first render, wont run again, no matter how many times the component re-renders
    useEffect(() => {
        console.log('effect2');
    }, [])

    // 3. useEffect with dependency
    // runs after first render and each time count changess
    useEffect(() => {
        console.log('Count changed', count);
    }, [count]);

    



    return (
        <>

            
        </>
    )
}

export default useEffectLearn
