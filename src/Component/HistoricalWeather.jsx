import React, { useState, useEffect, useContext } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export default function HistoricalWeather(props) {
  const [station, setStation] = useState(0);
  const [data, setData] = useState([]);
  const [temperature, setTemperature] = useState(0);
  const [precipitation, setPrecipitation] = useState(0);
  const [sunshine, setSunshine] = useState(0);
  const [pressure, setPressure] = useState(0);

  useEffect(() => {
    getWeatherStation();
  }, []);

  const getWeatherStation = () => {
    fetch(
      `https://api.meteostat.net/v1/stations/search?q=${props.citySearch}&key=oiIXVxv8`
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        setStation(result.data[0].id);
        console.log("historical", result);
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
        setData(result);
        console.log("WeatherData", result);
        setTemperature(result.data.temperature);
        setPrecipitation(result.data.precipitation);
        setSunshine(result.data.sunshine);
        setPressure(result.data.pressure);
      });
  };

  return (
    //use map to render all charts

    <div>
      <LineChart
        width={600}
        height={300}
        data={[
          { name: temperature, temp: temperature.JAN },
          { name: "FEB", temp: temperature.JAN }
        ]}
      >
        <Line type="monotone" dataKey="FEB" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="FEB" />
        <YAxis />
      </LineChart>
    </div>
  );
}

// const data = [
//   { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
//   { name: "Page B", uv:300 }
// const data =[
//     {name:"JAN", 'temp:13c'},
//     {name:"FEB", }
// ]
// ];
