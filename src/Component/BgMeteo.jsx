import React from "react";
import Rain from "./Rain";
import Snow from "./Snow";
import Clouds from "./Clouds";

function BgMeteo({ weatherCondition }) {
  console.log(weatherCondition);
  switch (weatherCondition) {
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
      return <React.Fragment></React.Fragment>;
      break;
  }
}

export default BgMeteo;
