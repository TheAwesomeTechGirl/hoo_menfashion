"use client";
import { useState } from 'react';

const CounterBox = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex items-center justify-center border border-[#FF5E00CC] p-2 rounded-lg shadow-md w-48">
      <button
        onClick={decrement}
        className="px-4 py-2 text-xl font-bold text-black rounded-full  "
      >
        -
      </button>
      <div className="px-6 text-2xl font-semibold">{count}</div>
      <button
        onClick={increment}
        className="px-4 py-2 text-xl font-bold text-black"
      >
        +
      </button>
    </div>
  );
};

export default CounterBox;
