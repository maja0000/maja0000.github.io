import React from "react";

function DailyWeatherDetails({ weatherDetailsProps }) {
  console.log(weatherDetailsProps);
  return (
    <div className="daily-weather">
      <ul className="daily-prediction-list flex">
        <li className="daily-prediction-list-leftcolumn flex-item">
          {weatherDetailsProps.weather[0].main}
          <br />
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
