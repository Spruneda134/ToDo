'use client';

import { useState } from "react";

export default function TodoApp() {
  const [numbers, setNumbers] = useState([]); // start with empty array

  function addNumber() {
    // Add a new number: for example, the length + 1 (1, 2, 3, ...)
    setNumbers([...numbers, numbers.length + 1]);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Number List</h1>
      <button onClick={addNumber}>
        Add Number
      </button>

      <ul>
        {numbers.map((num, idx) => (
          <li key={idx}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
