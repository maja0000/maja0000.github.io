import React from "react";
import "./WeatherDisplay.css";
import WeatherCard from "../../Component/WeatherCard/WeatherCard";
import "react-toastify/dist/ReactToastify.css";

function WeatherDisplay(props) {
  return (
    <div className="weatherDisplay">
      {/* add information that data isn't here yet */}
      {props.loading ? (
        "🔄🔄🔄 ...loading. Please wait!"
      ) : (
        <WeatherCard
          onSearch={props.onSearch}
          handleChange={props.handleChange}
        />
      )}
    </div>
  );
}

export default WeatherDisplay;
