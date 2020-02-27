import React from "react";

function DailyWeatherDetails({ weatherDetailsProps }) {
  // let { icon } = weatherDetailsProps.weather[0].icon;
  //   console.log(weatherDetailsProps);
  return (
    <div className="daily-weather">
      <ul className="daily-prediction-list flex">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${weatherDetailsProps.list[0].weather[0].icon}@2x.png`}
          alt="icon"
        ></img>

        <li className="daily-prediction-list-leftcolumn flex-item">
          Feels like : {Math.round(weatherDetailsProps.list[0].main.feels_like)}
          °
          <br /> Desc : {weatherDetailsProps.list[0].weather[0].description}
          <br />
          Wind : {weatherDetailsProps.list[0].wind.speed}km/h
          <br />
        </li>
        <li>
          Humidity : {weatherDetailsProps.list[0].main.humidity} %
          <br />
          Pressure : {weatherDetailsProps.list[0].main.pressure} mbar
          <br />
          Temp min : {weatherDetailsProps.list[0].main.temp_min} °
          <br />
          Temp max : {weatherDetailsProps.list[0].main.temp_max} °
          <br />
          {/* Visibility : {weatherDetailsProps.main.visibility} */}
        </li>
      </ul>
    </div>
  );
}

export default DailyWeatherDetails;
