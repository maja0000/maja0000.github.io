// import SignInSide from "../Component/SignInSide";
import "../css/Frontpage.css";
import { Breakpoint } from "react-socks";
import React, { useState, useEffect } from "react";
import "../css/WeatherDisplay.css";
import WeatherCard from "./WeatherCard.js";
import HistoricalWeather from "../Component/HistoricalWeather.jsx";

function Frontpage() {
  const [weatherDisplay, setWeatherDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [citySearch, setCitySearch] = useState("Berlin");

  /// call the fetch function
  useEffect(() => {
    ///  call function for geolocation
    getCityNameFromIp();
    getWeather(); /*gave different name to differenciate the api fetches better*/
  });

  // change location based on user's input
  const handleChange = event => {
    console.log("change input");
    setCitySearch(event.target.value);
  };

  // this function gets called when user presses enter in searchbar
  const searchForNewLocation = event => {
    console.log("click search");
    getWeather();
  };

  // get City name from ip address
  const getCityNameFromIp = () => {
    fetch("http://ip-api.com/json/")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(
            alert("Sorry, we could not find your location.")
          );
        }
      })
      .then(result => {
        setCitySearch(result.city);
      })
      .then(result => getWeather());
  };

  // get API function for current weather
  const getWeather = () => {
    /*gave different name*/
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&APPID=886d3852a40cc28c819dfcb6e2ae6402`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(alert("Sorry, we could not find your city."));
        }
      })
      .then(result => {
        setWeatherDisplay(result);
        setLoading(false);
      });
  };

  return (
    <div className="frontpage">
      <div className="weatherDisplay">
        {/* add information that data isn't here yet */}
        {loading ? (
          "...loading</br> Please wait!"
        ) : (
          <WeatherCard
            weatherProps={weatherDisplay}
            onSearch={searchForNewLocation}
            handleChange={handleChange}
          />
        )}
      </div>
      <Breakpoint large up>
        {" "}
        */}
        <HistoricalWeather />
      </Breakpoint>
    </div>
  );
}

export default Frontpage;
