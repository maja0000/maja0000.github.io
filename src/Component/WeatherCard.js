import React from "react";
import cloud from "../pictures/clouds-icon.svg";
import DailyWeatherDetails from "./DailyWeatherDetails";
import "../css/WeatherDisplay.css";
import LocationSearchBar from "./LocationSearchBar.js";
// import WeatherSlider from "./WeatherSlider.js";

var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday"
];

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}
let Today = new Date();
let date =
  Today.getFullYear() + "." + (Today.getMonth() + 1) + "." + Today.getDate();

function WeatherCard(props) {
  // console.log("test", props.weatherProps.main.temp);
  return (
    <div className="background">
      {/* {props.weatherProps.map((element, idx) => (
        <WeatherSlider key={idx} uniqueProps={element} /> */}
      {/* ))} */}
      <div className="date-temperature">
        <LocationSearchBar
          handleChange={props.handleChange}
          onSearch={props.onSearch}
        />
        <ul>
          <li className="temperature">
            {Math.round(props.weatherProps.main.temp)}°
          </li>
          <li className="">
            <p className="city">{props.weatherProps.name}</p>
            <p className="date">
              {daylist[day]}, {date}
              <br /> {hour}:{minute}
              {prepand}
            </p>
          </li>
        </ul>
      </div>
      <DailyWeatherDetails weatherDetailsProps={props.weatherProps} />
      {/* weatherProps={props.state.weatherDisplay} */}
      {/* SLIDER CARDS */}
      <div className="weekly-weather slider">
        {/* component goes here! */}
        {/* <WeatherSlider/> */}
        <div className="blurred-background slide">
          <p className="day">
            {daylist[day + 1]} <br />
            date here <br />
            <img alt="cloud" src={cloud}></img>
          </p>
          <ul className="daily-list">
            <li className="weather-details">
              Wind - {props.weatherProps.wind.speed}km/h ↑
            </li>
            <br />
            <li className="weather-details">
              Humidity - {props.weatherProps.main.humidity}%
            </li>
            <br />
            <li>Temp - {props.weatherProps.main.temp}</li>
          </ul>
        </div>

        {/* end of component */}
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
