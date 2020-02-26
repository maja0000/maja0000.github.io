import React from "react";
import "../css/WeatherDisplay.css";

// import cloud from "../pictures/clouds-icon.svg";

function WeatherSlider({ day, uniquePropsForecast, key }) {
  return (
    <div className="blurred-background slide">
      <p className="day">
        {day}
        <br />
        <div>
          <img
            className="weather-icon-slider"
            src={`http://openweathermap.org/img/wn/${uniquePropsForecast.weather[0].icon}@2x.png`}
            alt="icon"
          ></img>
          <img
            className="weather-icon-slider"
            src={`http://openweathermap.org/img/wn/${uniquePropsForecast.weather[0].icon}@2x.png`}
            alt="icon"
          ></img>
          <img
            className="weather-icon-slider"
            src={`http://openweathermap.org/img/wn/${uniquePropsForecast.weather[0].icon}@2x.png`}
            alt="icon"
          ></img>
        </div>
      </p>
      <ul className="daily-list">
        {" "}
        <li>Temp : {Math.round(uniquePropsForecast.main.temp)}°</li>
        <br />
        <li>Feels like : {Math.round(uniquePropsForecast.main.feels_like)}°</li>
        <br />
        <li className="weather-details">
          Wind : {uniquePropsForecast.wind.speed} km/h ↑
        </li>
        <br />
        <li className="weather-details">
          Humidity : {uniquePropsForecast.main.humidity}%
        </li>
        <br />
      </ul>
    </div>
  );
}
export default WeatherSlider;
