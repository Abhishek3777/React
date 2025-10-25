import React, { useState } from 'react'

const usestatelearn = () => {
  const [count, setCount] = useState(10);


  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }

  return (
    <div>
      Count : {count}

      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default usestatelearn
