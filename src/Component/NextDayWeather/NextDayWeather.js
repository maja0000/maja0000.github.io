import React from "react";
import "../WeatherDisplay/WeatherDisplay.css";

class NextDayWeather extends React.Component() {
  constructor() {
    super();
    this.props = {};
  }
  render() {
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
}

export default NextDayWeather;
