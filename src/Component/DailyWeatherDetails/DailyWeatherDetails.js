import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
// let { icon } = weatherDetailsProps.weather[0].icon;

function DailyWeatherDetails({ loading, weather }) {
  // let { icon } = weatherDetailsProps.weather[0].icon;
  const { weatherDisplay } = useContext(WeatherContext);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="daily-weather">
      <ul className="daily-prediction-list flex">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
          alt="icon"
        ></img>

        <li className="daily-prediction-list-leftcolumn flex-item">
          Feels like : {Math.round(weather.list[0].main.feels_like)}
          °
          <br /> Desc : {weather.list[0].weather[0].description}
          <br />
          Wind : {weather.list[0].wind.speed} km/h
          <br />
        </li>
        <li>
          Humidity : {weather.list[0].main.humidity} %
          <br />
          Pressure : {weather.list[0].main.pressure} mbar
          <br />
          Temp min : {Math.round(weather.list[0].main.temp_min)} °
          <br />
          Temp max : {Math.round(weather.list[0].main.temp_max)} °
          <br />
          {/* Visibility : {weatherDetailsProps.main.visibility} */}
        </li>
      </ul>
    </div>
  );
}

export default DailyWeatherDetails;
