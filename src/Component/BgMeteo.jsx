import React from "react";
import Rain from "./Rain";
import Snow from "./Snow";
import Clouds from "./Clouds";

function BgMeteo({ weatherCondition }) {
  switch (weatherCondition) {
    case "Snow":
      return <Snow />;

    case "Rain":
      return <Rain />;

    case "Clouds":
      return <Clouds />;

    default:
      return <React.Fragment></React.Fragment>;
  }
}

export default BgMeteo;
