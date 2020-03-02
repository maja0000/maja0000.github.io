import React from "react";
import "../css/WeatherDisplay.css";
import WeatherCard from "./WeatherCard.js";
import "react-toastify/dist/ReactToastify.css";

function WeatherDisplay(props) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default WeatherDisplay;
