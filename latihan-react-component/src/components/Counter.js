import React, { useState } from 'react';
import './Counter.css';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <div>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
