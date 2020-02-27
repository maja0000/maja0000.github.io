import React from "react";
import "../css/WeatherDisplay.css";
import WeatherCard from "./WeatherCard.js";
// import { responsiveFontSizes } from "@material-ui/core";
// import DailyWeatherDetails from "./DailyWeatherDetails";

function WeatherDisplay(props) {
  return (
    <div className="weatherDisplay">
      {/* add information that data isn't here yet */}
      {props.loading ? (
        "...loading</br> Please wait!"
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
