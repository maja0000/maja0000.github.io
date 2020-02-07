import React from "react";
import "./App.css";
/////////////////////
//pictures
import mainpic from "./pictures/fog.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mainpic} alt="x" />
        <p></p>
      </header>
    </div>
  );
}

export default App;
