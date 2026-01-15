import React, { useState } from 'react'

const counter = () => {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(prev => prev + 1);
    }
    function decrement(){
        
        setCount(prev => (prev > 0 ? prev - 1 : 0));
    }
    function reset(){
        setCount(0);
    }
 
  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default counter
