import React from "react";
import WeatherSlider from "./WeatherSlider.js";
// utils
import { daylist, day } from "../WeatherCard/today";

function Slider({ data }) {
  return (
    <div className="slider">
      {data.slice(0, 5).map((element, idx) => (
        <WeatherSlider
          key={idx}
          day={daylist[(day + idx + 1) % daylist.length]}
          daylist={daylist}
          uniquePropsForecast={element}
        />
      ))}
    </div>
  );
}

export default Slider;
