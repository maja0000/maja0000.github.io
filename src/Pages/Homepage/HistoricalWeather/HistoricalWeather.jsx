import React, { useState, useEffect, useContext } from "react";
import WeatherContext from "../../../Context/WeatherContext";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const colors = [
  "rgba(88, 0, 171, 0.9)",
  "rgba(245, 145, 29, 0.9)",
  "rgba(43, 145, 254, 1)"
];

export default function HistoricalWeather() {
  let [station, setStation] = useState(10381);
  let [tempData, setTempData] = useState([]);
  let [loading, setloading] = useState(true);
  let [hasError, setError] = useState(false);
  const [displayedData, setDisplayedData] = useState([
    "temperature",
    "precipitation",
    "sunshine"
  ]);

  const { citySearch, weatherDisplay, setOnlyStatistics } = useContext(
    WeatherContext
  );

  let cityName = weatherDisplay.city.name;
  useEffect(() => {
    console.log("useEffect");
    console.log("error ? ", hasError);
    getWeatherStation();
  }, [station, weatherDisplay]);

  //${props.citySearch}  keys: yVhCGjs9 , oiIXVxv8
  const getWeatherStation = () => {
    setError(false);
    fetch(
      `https://api.meteostat.net/v1/stations/search?q=${citySearch}&key=oiIXVxv8`
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        setStation(result.data[0].id);
      })
      .then(result => getHistoricalWeatherData())
      .catch(err => {
        setloading(false);
        setError(true);
      });
  };

  const getHistoricalWeatherData = () => {
    setError(false);

    fetch(
      `https://api.meteostat.net/v1/climate/normals?station=${station}&start=2019-01-01&end=2019-12-31&key=oiIXVxv8`
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        let globalArray = [];

        for (let data in result.data) {
          let localArray = [];
          console.log(data);
          for (let key in result.data[data]) {
            localArray.push({ name: key, [data]: +result.data[data][key] });
          }
          globalArray.push({ type: data, data: localArray });
        }

        setTempData(globalArray);
      })
      .then(setloading(false))
      .catch(err => {
        setloading(false);
        setError(true);
      });
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="historicalweather">
      <div className="description">
        <h1>Average weather in 2019</h1>
        <h2>{cityName}</h2>
      </div>
      <div className="charts">
        {tempData.map(function(dataParser, idx) {
          return (
            displayedData.includes(dataParser.type) && (
              <LineChart
                className="linechart"
                width={350}
                height={160}
                data={dataParser.data}
              >
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey={dataParser.type}
                  stroke={colors[idx % colors.length]}
                  strokeWidth="3"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            )
          );
        })}
      </div>
    </div>
  );
}
