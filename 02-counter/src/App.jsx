import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  
  let [counter, setCounter] = useState(15);
  // let counter = 5;

  function addValue() {
    counter = counter + 1;
    if (counter > 20) {
      return  counter = 20;
    }
    setCounter(counter)
  }
  const removeValue = () => {
    counter -= 1
    if (counter < 0) {
      return counter = 0;
    }
      setCounter(counter);
    
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>chai aur react</h1>
      <h2 onClick={addValue}>counter : {counter}</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={addValue}>Add Value : {counter}</button>
        <button onClick={removeValue}>Remove Value : {counter}</button>
      </div>
    </>
  );
}

export default App;
