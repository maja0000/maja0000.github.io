import React from "react";

function DailyWeatherDetails({ weatherDetailsProps }) {
  // let { icon } = weatherDetailsProps.weather[0].icon;
  console.log(weatherDetailsProps);
  return (
    <div className="daily-weather">
      <ul className="daily-prediction-list flex">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${weatherDetailsProps.weather[0].icon}@2x.png`}
          alt="icon"
        ></img>
        <li className="daily-prediction-list-leftcolumn flex-item">
          Desc : {weatherDetailsProps.weather[0].description}
          <br />
          Wind : {weatherDetailsProps.wind.speed}km/h
        </li>
        <li>
          Humidity : {weatherDetailsProps.main.humidity} %
          <br />
          Pressure :{weatherDetailsProps.main.pressure} mbar
          <br />
          Visibility : {weatherDetailsProps.main.visibility}
        </li>
      </ul>
    </div>
  );
}

export default DailyWeatherDetails;
