'use client';

import { useState } from 'react';

interface CounterProps {
  initialCount: number; // Prop for initial count
  step: number; // Prop for increment/decrement step
}

export default function Counter({ initialCount, step }: CounterProps) {
  const [count, setCount] = useState(initialCount); // State for the counter

  const increment = () => {
    setCount(count + step); // Event handler: increments count
  };

  const decrement = () => {
    setCount(count - step); // Event handler: decrements count
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      {count > 10 ? ( // Conditional rendering: message based on count
        <p>Count is high!</p>
      ) : (
        <p>Count is low.</p>
      )}
      <button onClick={increment}>+ {step}</button>
      <button onClick={decrement}>- {step}</button>
    </div>
  );
}