                               


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
