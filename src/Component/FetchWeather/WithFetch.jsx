import React, { useState } from "react";

const withFetch = Component => {
  function WithFetch() {
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
  }
};
