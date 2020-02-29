import React, { useContext } from "react";

// Components
import WeatherContext from "../../Context/WeatherContext";
import DailyWeatherDetails from "../DailyWeatherDetails/DailyWeatherDetails";
import Background from "../Background/Background";
import WeatherCardHeader from "./WeatherCardHeader";
import Slider from "../Slider/Slider.jsx";
// css
import "../WeatherDisplay/WeatherDisplay.css";

// utils

function WeatherCard(props) {
  const { weatherDisplay, loading } = useContext(WeatherContext);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="weatherCard">
      <Background />
      <WeatherCardHeader
        onSearch={props.onSearch}
        handleChange={props.handleChange}
      />
      <DailyWeatherDetails />
      <Slider data={weatherDisplay.list} />
    </div>
  );
}

export default WeatherCard;
