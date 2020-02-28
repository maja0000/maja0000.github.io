import React from "react";
import "../css/WeatherDisplay.css";
import WeatherCard from "./WeatherCard.js";
import "react-toastify/dist/ReactToastify.css";

function WeatherDisplay(props) {
  return (
    <div className="weatherDisplay">
      {/* add information that data isn't here yet */}
      {props.loading ? (
        "🔄🔄🔄 ...loading. Please wait!"
      ) : (
        <WeatherCard
          weatherProps={props.weatherProps}
          onSearch={props.onSearch}
          handleChange={props.handleChange}
        />
      )}
    </div>
  );
}

export default WeatherDisplay;
