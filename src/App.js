import React from "react";
import WeatherDisplay from "./Component/WeatherDisplay";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Component/Legal";

function App() {
  return (
    <div className="App">
      <WeatherDisplay />
      <Legal />
      <StickyFooter />
    </div>
  );
}

export default App;
