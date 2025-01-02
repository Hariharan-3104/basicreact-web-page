

import './App.css'
import { useState , useRef} from 'react'
function App() {
  let [Count,setCount]=useState(0);
  let countRef =useRef(0);

  let increment =()=>{
    setCount(Count+1);
    countRef.current++;

    console.log("state:", Count)
    console.log("Ref:", countRef.current)
  }

   useEffect(()=>{
     console.log("value updated");
     return(()=>{
       console.log("valuechanged ");
     })
   },[Count])



  return (
    <div>
          <h1>count:{Count}</h1>
          {/* <button onClick={()=>setCount(Count+1)}>+</button>
          <button onClick={()=>setCount(Count-1)}>-</button>   */}
          <button onClick={increment}>+</button>

    </div>
  )
}

export default App
// ////////////////////////
// // state: 0
// // App.jsx:60 Ref: 1
// // App.jsx:59 state: 1
// // App.jsx:60 Ref: 2
// // App.jsx:59 state: 2
// // App.jsx:60 Ref: 3

// // countref is called only in return function
// //---------------------------------------------------------

import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  // Array of image URLs
  const images = [
    "img 1.jpg",
    "img 2.png",
    "img 3.jpg",
    "img 4.jpg",
  ];

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Update image index based on input length
    if (newValue.trim() !== "") {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div>
      <h1>Dynamic Images on Input</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          margin: "20px 0",
          fontSize: "16px",
        }}
      />
      {inputValue.trim() && (
        <div>
          <img
            src={images[imageIndex]}
            alt={`Dynamic ${imageIndex}`}
            style={{
              display: "block",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;                                   

//-------------------------------------------------
import { createContext  } from "react";
import Hen from "./Hen";
import { stomachContext } from "./Stomach"; 
export let nameContext = createContext();
function App() {

  return (
    <nameContext.Provider value="chicken">  
      <Hen />
      <button onClick=stomachContext}>click</button>
      </nameContext.Provider>
    
  )
}

export default App
//------------------------------------------------

import React, { useState, createContext } from "react";
import Hen from "./Hen";
import "./App.css";

export let nameContext = createContext();

function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  const toggleBackground = () => {
    setIsBlackBackground((prev) => !prev);
  };

  const appStyle = {
    height: "100vh",
    backgroundColor: isBlackBackground ? "black" : "white",
    color: isBlackBackground ? "white" : "black",
    transition: "background-color 0.5s, color 0.5s",
  };

  return (
    <nameContext.Provider value={{ value: "water", toggleBackground, isBlackBackground }}>
      <div style={appStyle}>
        <Hen />
      </div>
    </nameContext.Provider>
  );
}

export default App;
//---------------------------------------

import React, { useState } from "react";
import Hen from "./Hen";

const App = () => {
  const [color, setColor] = useState("black");
  const changeColor = () => {
    setColor(color === "black" ? "blue" : "black");
  };

  const need = "Water";

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <Hen need={need} color={color} />
    </div>
  );
};

export default App;
//-------------------------------------------------------------

import React, { useState } from 'react';
import styles from './props-dilling/Stomach';

function App() {
  const [clickCount, setClickCount] = useState(0);

  // Handle button click to toggle states
  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  // Compute the text style based on the click count
  let textStyle = { ...styles.textBase };

  if (clickCount % 2 === 0) {
    // On even clicks: black background, white text
    textStyle = { ...textStyle, ...styles.backgroundBlack, ...styles.textWhite };
  } else {
    // On odd clicks: white background, black text
    textStyle = { ...textStyle, ...styles.backgroundWhite, ...styles.textBlack };
  }

  return (
    <div>
      <h1 style={textStyle}>aaayisha rifqa</h1>
      <button onClick={handleClick} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        Click Me
      </button>
    </div>
  );
}

export default App;
