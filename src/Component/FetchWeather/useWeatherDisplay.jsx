import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// get City name from ip address
const fetchMyurl = (url, errorMessage) => {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("error");
      return Promise.reject(toast.error(`⚠️ ${errorMessage}`));
    }
  });
};

const loadCityWeather = citySearch => {
  return fetchMyurl(
    `http://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&units=metric&appid=886d3852a40cc28c819dfcb6e2ae6402`
  );
};

const useWeatherDisplay = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");

  const updateWeather = weatherData => {
    console.log(weatherData);
    setWeather(weatherData);
  };

  const updateCity = newCity => {
    console.log("update", newCity);
    setCity(newCity);
    loadCityWeather(newCity).then(weatherData => {
      updateWeather(weatherData);
      setLoading(false);
    });
  };

  useEffect(() => {
    // Fetch + setState weatherDisplay
    fetchMyurl("http://ip-api.com/json/", "Geolocation Error").then(result => {
      updateCity(result.city);
    });
  }, []);

  return { loading, weather, updateCity };
};
export default useWeatherDisplay;
