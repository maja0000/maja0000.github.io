import React from "react";
import SearchBar from "./Component/Searchbar/Searchbar";


import WeatherDisplay from "./Component/WeatherDisplay";
import Onboarding from "./Component/Onboarding.js";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Component/Legal";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <SearchBar/>
     
      </header>
      <WeatherDisplay />

      <Onboarding />
      <Legal />
      <StickyFooter />

    </div>
  );
}

export default App;

