import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
import { daylist, day, date, hour, minute, prepand } from "./today";

function MeteoDisplay(props) {
  const { weatherDisplay, loading } = useContext(WeatherContext);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <React.Fragment>
      <ul>
        <li className="temperature">
          {Math.round(weatherDisplay.list[0].main.temp)}°
        </li>
        <li className="">
          <p className="city">{weatherDisplay.city.name}</p>
          <p className="date">
            {daylist[day]}, {date}
            <br /> {hour}:{minute}
            {prepand}
          </p>
        </li>
      </ul>
    </React.Fragment>
  );
}
export default MeteoDisplay;