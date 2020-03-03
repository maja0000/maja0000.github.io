import React, { useContext } from "react";

// Components
import WeatherContext from "../../Context/WeatherContext";
import DailyWeatherDetails from "../DailyWeatherDetails/DailyWeatherDetails";
import Background from "../Background/Background";
import WeatherCardHeader from "./WeatherCardHeader";
import Slider from "../Slider/Slider.jsx";

// utils

function WeatherCard({ header, Background, loading, children, searchBar }) {
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="weatherCard">
      {Background}
      {searchBar}
      {header}
      {children}
    </div>
  );
}

export default WeatherCard;
