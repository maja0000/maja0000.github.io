import React from "react";

function DailyWeatherDetails() {
  return (
    <div className="daily-weather">
      <ul className="daily-prediction-list flex">
        <li className="daily-prediction-list-leftcolumn flex-item">
          {" "}
          Rain prediction : 0% <br /> Wind: 12km/h <br /> Humidity: 60% <br />
          Visibility 5.0 mi
        </li>
        <li className="flex-item">
          UV Index 0 of 10
          <br />
          Sunrise : 7:25am <br />
          Sunset: 5:15 pm
        </li>
      </ul>
    </div>
  );
}

export default DailyWeatherDetails;
