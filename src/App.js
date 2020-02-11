import React from "react";
import "./App.css";
import Onboarding from "./Component/Onboarding.js";
import StickyFooter from "./Component/StickyFooter.js";

// import mainpic from "./pictures/fog.jpg";

function App() {
  return (
    <div className="App">
      <Onboarding />
      <StickyFooter />
    </div>
  );
}

export default App;
