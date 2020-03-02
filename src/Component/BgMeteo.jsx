import React from "react";
import Rain from "./Rain";
import Snow from "./Snow";
import Clouds from "./Clouds";

function BgMeteo({ weatherCondition }) {
<<<<<<< HEAD
=======
  //   console.log(weatherCondition);
>>>>>>> a96544ab0104286462c5515a82d6fc26e8ad4021
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
