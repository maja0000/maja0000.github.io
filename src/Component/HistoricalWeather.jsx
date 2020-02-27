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
  let [station, setStation] = useState(10381);
  let [tempData, setTempData] = useState([]);
  let sunData = [{}];
  let rainData = [{}];
  let pressureData = [{}];
  const [temperature, setTemperature] = useState(0);
  const [precipitation, setPrecipitation] = useState(0);
  const [sunshine, setSunshine] = useState(0);
  const [pressure, setPressure] = useState(0);
  let [loading, setloading] = useState(true);
  let [hasError, setError] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    console.log("error ? ", hasError);
    getWeatherStation();
  }, [station, props.cityName]);

  //${props.citySearch}  keys: yVhCGjs9 , oiIXVxv8
  const getWeatherStation = () => {
    setError(false);
    fetch(
      `https://api.meteostat.net/v1/stations/search?q=${props.citySearch}&key=oiIXVxv8`
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

    console.log(props.citySearch);
    fetch(
      `https://api.meteostat.net/v1/climate/normals?station=${station}&start=2019-01-01&end=2019-12-31&key=oiIXVxv8`
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        if (result.data.temperature.JAN) {
          setTempData(result);
          setTemperature(result.data.temperature);
          setPrecipitation(result.data.precipitation);
          setSunshine(result.data.sunshine);
          setPressure(result.data.pressure);
          setloading(false);
        }
      })
      .catch(err => {
        setloading(false);
        setError(true);
      });
  };
  if (!loading) {
    tempData = [
      { name: "JAN", temp: +temperature.JAN },
      { name: "FEB", temp: +temperature.FEB },
      { name: "MAR", temp: +temperature.MAR },
      { name: "APR", temp: +temperature.APR },
      { name: "MAY", temp: +temperature.MAY },
      { name: "JUN", temp: +temperature.JUN },
      { name: "JUL", temp: +temperature.JUL },
      { name: "AUG", temp: +temperature.AUG },
      { name: "SEP", temp: +temperature.SEP },
      { name: "OCT", temp: +temperature.OCT },
      { name: "NOV", temp: +temperature.NOV },
      { name: "DEC", temp: +temperature.DEC }
    ];

    sunData = [
      { name: "JAN", sun: +sunshine.JAN },
      { name: "FEB", sun: +sunshine.FEB },
      { name: "MAR", sun: +sunshine.MAR },
      { name: "APR", sun: +sunshine.APR },
      { name: "MAY", sun: +sunshine.MAY },
      { name: "JUN", sun: +sunshine.JUN },
      { name: "JUL", sun: +sunshine.JUL },
      { name: "AUG", sun: +sunshine.AUG },
      { name: "SEP", sun: +sunshine.SEP },
      { name: "OCT", sun: +sunshine.OCT },
      { name: "NOV", sun: +sunshine.NOV },
      { name: "DEC", sun: +sunshine.DEC }
    ];

    rainData = [
      { name: "JAN", rain: +precipitation.JAN },
      { name: "FEB", rain: +precipitation.FEB },
      { name: "MAR", rain: +precipitation.MAR },
      { name: "APR", rain: +precipitation.APR },
      { name: "MAY", rain: +precipitation.MAY },
      { name: "JUN", rain: +precipitation.JUN },
      { name: "JUL", rain: +precipitation.JUL },
      { name: "AUG", rain: +precipitation.AUG },
      { name: "SEP", rain: +precipitation.SEP },
      { name: "OCT", rain: +precipitation.OCT },
      { name: "NOV", rain: +precipitation.NOV },
      { name: "DEC", rain: +precipitation.DEC }
    ];

    pressureData = [
      { name: "JAN", pressure: +pressure.JAN },
      { name: "FEB", pressure: +pressure.FEB },
      { name: "MAR", pressure: +pressure.MAR },
      { name: "APR", pressure: +pressure.APR },
      { name: "MAY", pressure: +pressure.MAY },
      { name: "JUN", pressure: +pressure.JUN },
      { name: "JUL", pressure: +pressure.JUL },
      { name: "AUG", pressure: +pressure.AUG },
      { name: "SEP", pressure: +pressure.SEP },
      { name: "OCT", pressure: +pressure.OCT },
      { name: "NOV", pressure: +pressure.NOV },
      { name: "DEC", pressure: +pressure.DEC }
    ];
  }
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    //use map to render all charts?

    <div className="historicalweather">
      <h1>Average weather in 2019</h1>
      <h2>{props.cityName}</h2>
      <LineChart width={350} height={160} data={tempData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <LineChart width={350} height={160} data={sunData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sun"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <LineChart width={350} height={160} data={rainData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="rain"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <LineChart width={350} height={160} data={pressureData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pressure"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}
