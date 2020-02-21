import React from "react";
import cloud from "../pictures/clouds-icon.svg";

function WeatherSlider() {
  return (
    <div className="blurred-background slide">
      <p className="day">
        Monday <br />
        date here <br />
        <img alt="cloud" src={cloud}></img>
      </p>
      <ul className="daily-list">
        <li className="weather-details">Wind :</li>
        <br />
        <li className="weather-details">Humidity:</li>
        <br />
        <li className="weather-details">Air quality:</li>
      </ul>
    </div>
  );
}
export default WeatherSlider;
