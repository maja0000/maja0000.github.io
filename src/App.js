import React from "react";
import "./App.css";
import Onboarding from "./Component/Onboarding.js";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Component/Legal";

// import mainpic from "./pictures/fog.jpg";

function App() {
  return (
    <div className="App">
      <Onboarding />
      <Legal />
      <StickyFooter />
    </div>
  );
}

export default App;
