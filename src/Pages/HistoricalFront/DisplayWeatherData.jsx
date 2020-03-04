import React from "react";
import "./HistoricalWeather.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
export function DisplayWeatherData({
  cityName,
  weatherData,
  loading,
  hasError
}) {
  console.warn(cityName, weatherData, loading, hasError);
  const colors = [
    "rgba(88, 0, 171, 0.9)",
    "rgba(245, 145, 29, 0.9)",
    "rgba(43, 145, 254, 1)"
  ];
  if (loading) {
    return (
      <div className="historicalweather">
        <div className="description">
          <h1>Loading ...</h1>
        </div>
      </div>
    );
  }
  if (hasError) {
    return (
      <div className="historicalweather">
        <div className="description">
          <h1>
            Sorry, we cannot reach the historical weather data for '{cityName}'
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="historicalweather">
      <div className="description">
        <h1>Average weather in 2019</h1>
        <h2>{cityName}</h2>
      </div>

      {Object.keys(weatherData).map((category, index) => (
        <div className="charts">
          <LineChart
            className="linechart"
            width={250}
            height={160}
            data={weatherData[category].yearData}
          >
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              name={category}
              type="monotone"
              dataKey="value"
              stroke={colors[index]}
              strokeWidth="3"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      ))}

      <div className="dataSrc">
        Data provided by{" "}
        <a href="https://www.meteostat.net" title="meteostat" target="_blank">
          meteostat. <br />
        </a>
        Meteorological data: Copyright &copy; National Oceanic and Atmospheric
        Administration (NOAA), Deutscher Wetterdienst (DWD). Learn more about
        the{" "}
        <a
          href="https://www.meteostat.net/sources"
          title="meteostat Sources"
          target="_blank"
        >
          sources.
        </a>
      </div>
    </div>
  );
}
