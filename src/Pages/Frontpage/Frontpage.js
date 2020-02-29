// Library
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
// Components
import WeatherDisplay from "../../Component/WeatherDisplay/WeatherDisplay.js";
import Animation from "../../Component/Animation/Animation";
import statisticIcon from "../../pictures/icons/statisticIcon.svg";
import HistoricalWeather from "../Homepage/HistoricalWeather/HistoricalWeather";
import useFetch from "../../Component/FetchWeather/FetchWeather";
// Context
import WeatherContext from "../../Context/WeatherContext";

// Css
import "react-toastify/dist/ReactToastify.css";
import "./Frontpage.css";
import "./index.css";

function Frontpage() {
  // State
  const [weatherDisplay, setWeatherDisplay] = useState("[]");
  const [loading, setLoading] = useState(true);
  const [citySearch, setCitySearch] = useState("Berlin");
  const [firstTime, setFirstTime] = useState(
    !sessionStorage.getItem("firstTime")
  );
  const [cityName, setCityName] = useState("");
  const [onlyStatistics, setOnlyStatistics] = useState(false);

  useEffect(() => {
    // Check First Time connection
    if (firstTime) {
      sessionStorage.setItem("firstTime", true);
    }
    setTimeout(() => {
      setFirstTime(false);
      sessionStorage.setItem("firstTime", false);
    }, 4000);

    ///  call function for geolocation
    fetchMyurl("http://ip-api.com/json/", "Geolocation Error")
      .then(result => {
        console.log("result", result);
        setCitySearch(result.city);
      })
      .then(result => getWeather());
  }, []);

  // get City name from ip address
  const fetchMyurl = (url, errorMessage) => {
    return fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(toast.error(`⚠️ ${errorMessage}`));
      }
    });
  };

  // get API function for current weather
  const getWeather = () => {
    console.log("citySearch ", citySearch);
    fetchMyurl(
      `http://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&units=metric&appid=886d3852a40cc28c819dfcb6e2ae6402`
    ).then(result => {
      setWeatherDisplay(result);
      setCityName(result.city.name);
      setLoading(false);
      console.log("Fetch done", result);
    });
  };

  return firstTime || loading ? (
    <Animation />
  ) : (
    <WeatherContext.Provider
      value={{
        weatherDisplay: weatherDisplay,
        setWeatherDisplay: setWeatherDisplay,
        loading: loading,
        citySearch: citySearch,
        setCitySearch: setCitySearch,
        getWeather: getWeather,
        setOnlyStatistics: setOnlyStatistics
      }}
    >
      <div className="frontpage">
        <ToastContainer />
        {!onlyStatistics && <WeatherDisplay />}
        <HistoricalWeather />
        <button
          className="btn-header"
          type="button"
          onClick={() => setOnlyStatistics(!onlyStatistics)}
        >
          <img
            src={statisticIcon}
            alt="statistic-link"
            className="navbarIcon"
          />
        </button>
      </div>
    </WeatherContext.Provider>
  );
}

export default Frontpage;
