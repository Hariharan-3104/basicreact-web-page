// // import { useContext } from "react";
// // import { nameContext } from "./App.jsx";  
// export const stomachContext=createContext();
// function Stomach()
// {

//   // let name=useContext(nameContext);
//   return(
//     <div>
//         <h1>
//             Stomach
//             <button>click</button>
//         </h1>
//       <stomachContext.Provider style={{color:"red"}} value="chicken">
//       </stomachContext.Provider>
//     </div>
//   )
// }
// export default Stomach
// //harini
// import React, { useContext } from "react";
// import { nameContext } from "./App";

// const Stomach = () => {
//   const { value, toggleBackground, isBlackBackground } = useContext(nameContext);

//   const buttonStyle = {
//     padding: "10px 20px",
//     backgroundColor: isBlackBackground ? "white" : "black",
//     color: isBlackBackground ? "black" : "white",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "20px",
//     transition: "background-color 0.3s, color 0.3s",
//   };

//   return (
//     <div>
//       <h1>Stomach: {value}</h1>
//       <button style={buttonStyle} onClick={toggleBackground}>
//         Press Me
//       </button>
//     </div>
//   );
// };

// export default Stomach;
//kanishkha

// import React from "react";

// function Stomach({ need, color }) {
//   return (
//     <div>
//       <h5>Stomach</h5>
//       <p style={{ color: color }}>Received: {need}</p>
//     </div>
//   );
// };

// export default Stomach;

//-------------------------------------------aayisha
const styles = {
  textBase: {
    padding: '10px 20px',
    fontSize: '16px',
    transition: '0.3s',
    backgroundColor: '#ffffff', // Initial background color (white)
    color: '#000000', // Initial text color (black)
  },
  backgroundBlack: {
    backgroundColor: '#000000', // Black background
  },
  backgroundWhite: {
    backgroundColor: '#ffffff', // White background
  },
  textBlack: {
    color: '#000000', // Black text
  },
  textWhite: {
    color: '#ffffff', // White text
  },
};

export default styles;