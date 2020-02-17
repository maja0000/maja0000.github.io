import React from "react";
import "./App.css";

import WeatherDisplay from "./Component/WeatherDisplay";
import Onboarding from "./Component/Onboarding.js";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Component/Legal";




function App() {
  return (
    <div className="App">

      <WeatherDisplay />


      <Onboarding />
      <Legal />
      <StickyFooter />
    </div>
  );
}

export default App;
