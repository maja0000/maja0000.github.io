import React from "react";
import cloud from "../pictures/clouds-icon.svg";
import DailyWeatherDetails from "./DailyWeatherDetails";
import "../css/WeatherDisplay.css";
import LocationSearchBar from "./LocationSearchBar.js";

function WeatherCard(props) {
  return (
    <div className="background">
      <div className="date-temperature">
        <LocationSearchBar />
        <ul>
          <li className="temperature">9°</li>
          <li className="">
            <p className="city">
              {/* {props.weatherProps.name} */}
              Berlin
            </p>
            <p className="date">
              Monday
              <br />
              7th January
            </p>
          </li>
        </ul>
      </div>
      <DailyWeatherDetails />
      {/* SLIDER CARDS */}
      <div className="weekly-weather slider">
        {/* component goes here! */}
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
        <div className="blurred-background slide">
          Tuesday <br />
          <img alt="cloud" src={cloud}></img>
        </div>
        <div className="blurred-background slide">
          Friday <br />
          <img alt="cloud" src={cloud}></img>
        </div>
        <div className="blurred-background slide">
          Friday <br />
          <img alt="cloud" src={cloud}></img>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
