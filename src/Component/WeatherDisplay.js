import React from "react";
import "../css/WeatherDisplay.css";
import WeatherCard from "./WeatherCard.js";

import "react-toastify/dist/ReactToastify.css";
// import Particles from "react-particles-js";
// import ParticlesComponent from "./Particles";

const particlesOprtions = {
  particles: {
    number: {
      value: 192,
      density: {
        enable: false
      }
    },
    color: {
      value: "#ffffff"
    },
    size: {
      value: 10,
      random: true
    },
    move: {
      direction: "bottom-left",
      out_mode: "out",
      speed: 3.1
    }
  },
  pagebackground: {
    backgroundImage: `url(${"https://live.staticflickr.com/4840/31162319667_c7baf8bee5_b.jp"})`
  }
};

function WeatherDisplay(props) {
  return (
    <div className="weatherDisplay">
      {/* add information that data isn't here yet */}
      {props.loading ? (
        "...loading. Please wait!"
      ) : (
        <div>
          {/* <Particles params={particlesOprtions} /> */}
          {/* <ParticlesComponent /> */}
          <WeatherCard
            weatherProps={props.weatherProps}
            onSearch={props.onSearch}
            handleChange={props.handleChange}
          />
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
