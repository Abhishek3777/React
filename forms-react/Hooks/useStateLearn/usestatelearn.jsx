import React, { useState } from "react";

function Counter() {
    // const [state, setState] = useState(initialValue);
    // state -> current value,   setState -> function to update the state
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
