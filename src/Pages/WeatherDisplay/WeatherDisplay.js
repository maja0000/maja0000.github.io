import React from "react";
import "./WeatherDisplay.css";
import WeatherCard from "../../Component/WeatherCard/WeatherCard";
import "react-toastify/dist/ReactToastify.css";

function WeatherDisplay() {
  return (
    <div className="weatherDisplay">
      {/* add information that data isn't here yet */}
      <WeatherCard />
    </div>
  );
}

export default WeatherDisplay;
