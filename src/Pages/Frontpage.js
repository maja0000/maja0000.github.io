import React from "react";
// import SignInSide from "../Component/SignInSide";
import WeatherDisplay from "../Component/WeatherDisplay.js";
import "../css/Frontpage.css";
// import { Breakpoint } from "react-socks";

function Frontpage() {
  return (
    <div className="frontpage">
      <WeatherDisplay />
      {/* <Breakpoint large up> */}
      {/* <SignInSide /> */}
      {/* </Breakpoint> */}
    </div>
  );
}

export default Frontpage;
