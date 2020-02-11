import React from "react";
import "./App.css";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Component/Legal";
import SignInSide from "./Component/SignInSide.js";

// import mainpic from "./pictures/fog.jpg";

function App() {
  return (
    <div className="App">
      <SignInSide />
      <Legal />
      <StickyFooter />
    </div>
  );
}

export default App;
