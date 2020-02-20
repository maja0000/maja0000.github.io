import React from "react";
import SignInSide from "../Component/SignInSide";
import WeatherDisplay from "../Component/WeatherDisplay.js";
import "../css/Frontpage.css";

function Frontpage() {
  return (
    <div className="frontpage">
      <WeatherDisplay />
      <SignInSide />
    </div>
  );
}

export default Frontpage;
