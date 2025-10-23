import React, { useState } from "react";

function Counter() {
  // const [state, setState] = useState(initialValue);
  // state -> current value,   setState -> function to update the state
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrement</button>
    </div>
  );
}

export default Counter;
