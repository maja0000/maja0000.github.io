import React, { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

export default function HistoricalWeather(props) {
  const [station, setStation] = useState(10381);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setloading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    getWeatherStation();
  }, [station, props.cityName]);

  // api keys: yVhCGjs9 , oiIXVxv8
  const getWeatherStation = () => {
    setError(false);
    fetch(
      `https://api.meteostat.net/v1/stations/search?q=${props.cityName}&key=yVhCGjs9`
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
      `https://api.meteostat.net/v1/climate/normals?station=${station}&start=2019-01-01&end=2019-12-31&key=yVhCGjs9`
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result.data.length === 0) {
          setError(true);
          setloading(false);
        } else {
          // process data...

          const months = Object.keys(result.data.temperature);
          const weatherLabels = [
            "temperature",
            "precipitation",
            "sunshine",
            "pressure"
          ];

          let tempData = [];

          /* weatherData = {
          'temperature' : {
              'dataLabel': 'temperature',
              'yearData' : [
                { name: 'JAN', value: 0.3},
                { name: 'FEB', temp: 0.3}
              ]
          },
          'precipitation' : {
              'dataLabel': 'precipitation',
              'yearData' : [
                { name: 'JAN', value: 0.3},
                { name: 'FEB', temp: 0.3}
              ]
          }
    
    
            } */

          weatherLabels.forEach(label => {
            // only process data if the data contains a label from the weatherLabels defined above
            if (result.data[label]) {
              tempData[label] = {
                dataLabel: label,
                yearData: []
              };

              months.forEach(month => {
                tempData[label]["yearData"].push({
                  name: month,
                  value: +result.data[label][month]
                });
              });
            }
          });

          console.log("tempdata:", tempData);
          setWeatherData(tempData);
          console.log("weatherData:", weatherData);

          setloading(false);
          setError(false);
        }
      })
      .catch(err => {
        setloading(false);
        setError(true);
      });
  };

  return (
    <DisplayWeatherData
      weatherData={weatherData}
      hasError={hasError}
      loading={loading}
      cityName={props.cityName}
    />
  );
}

function DisplayWeatherData({ cityName, weatherData, loading, hasError }) {
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
            width={350}
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
