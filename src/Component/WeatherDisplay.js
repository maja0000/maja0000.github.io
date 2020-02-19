import React from "react";
import "./WeatherDisplay.css";
import cloud from "./pictures/clouds-icon.svg";

class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="background">
        <div className="date-temperature">
          <ul>
            <li className="temperature">9°</li>
            <li className="">
              <p className="city">Berlin</p>
              <p className="date">
                Monday
                <br />
                7th January
              </p>
            </li>
          </ul>
        </div>
        <div className="daily-weather">
          <ul className="daily-prediction-list">
            <li className="daily-prediction-list-leftcolumn">
              {" "}
              Rain prediction : 0% <br /> Wind: 12km/h <br /> Humidity: 60%{" "}
              <br />
              Visibility 5.0 mi
            </li>
            <li>
              UV Index 0 of 10
              <br />
              Sunrise : 7:25am <br />
              Sunset: 5:15 pm
            </li>
          </ul>
        </div>

        <div className="weekly-weather slider">
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
}

export default WeatherDisplay;
