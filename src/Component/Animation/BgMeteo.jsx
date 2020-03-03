import React, { useContext } from "react";
import Rain from "./Rain";
import Snow from "./Snow";
import Clouds from "./Clouds";
import WeatherContext from "../../Context/WeatherContext";

function BgMeteo({ weatherType }) {
  console.log("weather display :", weatherType);
  switch (weatherType) {
    case "Snow":
      return <Snow />;
      break;
    case "Rain":
      return <Rain />;
      break;
    case "Clouds":
      return <Clouds />;
      break;

    default:
      return null;
      break;
  }
}

export default BgMeteo;
