import React, { useState, useEffect } from "react";

export default function HistoricalWeather() {
  const [station, setStation] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [precipitation, setPrecipitation] = useState(0);
  const [sunshine, setSunshine] = useState(0);
  const [pressure, setPressure] = useState(0);

  useEffect(() => {
    getWeatherStation();
  });

  const getWeatherStation = () => {
    fetch(
      `https://api.meteostat.net/v1/stations/search?q=${citySearch}&key=oiIXVxv8`
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        setStation(result.data[0].station);
      })
      .then(result => getHistoricalWeatherData());
  };

  const getHistoricalWeatherData = () => {
    fetch(
      "https://api.meteostat.net/v1/climate/normals?station=10637&key=oiIXVxv8"
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        setTemperature(result.data.temperature);
        setPrecipitation(result.data.precipitation);
        setSunshine(result.data.sunshine);
        setPressure(result.data.pressure);
      });
  };
}