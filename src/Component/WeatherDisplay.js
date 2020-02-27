import React from "react";
import "../css/WeatherDisplay.css";
import WeatherCard from "./WeatherCard.js";

import "react-toastify/dist/ReactToastify.css";
import Particles from "react-particles-js";
import ParticlesComponent from "./Particles";

function WeatherDisplay(props) {
  return (
    <div className="weatherDisplay">
      {/* add information that data isn't here yet */}
      {props.loading ? (
        "...loading. Please wait!"
      ) : (
        <div>
          <WeatherCard
            weatherProps={props.weatherProps}
            onSearch={props.onSearch}
            handleChange={props.handleChange}
          />

          <Particles />
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
