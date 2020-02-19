import React from "react";
import "./App.css";

import WeatherDisplay from "./Component/WeatherDisplay";

import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Component/Legal";
import SignInSide from "./Component/SignInSide.js";

function App() {
  return (
    <div className="App">
      {/* <WeatherDisplay /> */}
      <SignInSide />
      <Legal />
      <StickyFooter />
    </div>
  );
}

export default App;
