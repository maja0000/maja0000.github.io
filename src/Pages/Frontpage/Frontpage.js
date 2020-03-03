// Library
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
// Components
// import WeatherDisplay from "../../Pages/WeatherDisplay/WeatherDisplay.js";
import Animation from "../../Component/Animation/Animation";
// import statisticIcon from "../../pictures/icons/statisticIcon.svg";
// import HistoricalWeather from "../Homepage/HistoricalWeather/HistoricalWeather";
import WeatherCard from "../../Component/WeatherCard/WeatherCard";
import BgMeteo from "../../Component/Animation/BgMeteo";
import WeatherCardHeader from "../../Component/WeatherCard/WeatherCardHeader";
import HistoricalWeather from "../Homepage/HistoricalWeather/HistoricalWeather";
import SearchBar from "../../Component/LocationSearchBar/LocationSearchBar";

// Context
import WeatherContext from "../../Context/WeatherContext";
import useWeatherDisplay from "../../Component/FetchWeather/useWeatherDisplay";

// Css
import "react-toastify/dist/ReactToastify.css";
import "./Frontpage.css";
import "./index.css";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import DailyWeatherDetails from "../../Component/DailyWeatherDetails/DailyWeatherDetails";
import Slider from "../../Component/Slider/Slider";

function Frontpage() {
  const { loading, weather, updateCity } = useWeatherDisplay();

  const firstTime = !sessionStorage.getItem("firstTime");

  !loading && console.log("weatherlist", weather);

  useEffect(() => {
    // Check First Time connection
    if (firstTime) {
      sessionStorage.setItem("firstTime", true);
    }
    setTimeout(() => {
      sessionStorage.setItem("firstTime", false);
    }, 4000);

    ///  call function for geolocation
  }, []);

  return firstTime || loading ? (
    <Animation />
  ) : (
    <div className="frontpage">
      <ToastContainer />
      <WeatherCard
        Background={<BgMeteo weatherType={weather.list[0].weather[0].main} />}
        header={<WeatherCardHeader loading={loading} weather={weather} />}
        searchBar={<SearchBar updateCity={updateCity} weather={weather} />}
        loading={loading}
      >
        <DailyWeatherDetails loading={loading} weather={weather} />
      </WeatherCard>
      <Slider weather={weather.list} />

      {/* <HistoricalWeather /> */}
      {/* 
      {!onlyStatistics && <WeatherDisplay />}
      <button
        className="btn-header"
        type="button"
        onClick={() => setOnlyStatistics(!onlyStatistics)}
      >
        <img src={statisticIcon} alt="statistic-link" className="navbarIcon" />
      </button> */}
    </div>
  );
}

export default Frontpage;
