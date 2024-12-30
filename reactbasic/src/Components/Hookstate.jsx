import React, { useState } from 'react';
import './Hari.css';

function Hookstate({ num1, num2 }) {
  // Declare state variables for count and name
  const [count, setCount] = useState(0);
  const [name, setName] = useState('hariharan');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="container">
      <video id="background-video" autoPlay loop muted>
        <source src="F:/react/reactbasic/src/assets/vecteezy_math-science-formula-mathematic-equation-calculation_40513133.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <div>
        <p>Name: {name}</p>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter new name"
        />
      </div>
      <div>
        <p>The sum of {num1} and {num2} is {num1 + num2}</p>
      </div>
    </div>
  );
}

export default Hookstate;
