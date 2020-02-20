import React from "react";
import "../css/WeatherDisplay.css";
import WeatherCard from "./WeatherCard.js";

class WeatherDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherDisplay: [],
      loading: true,
      citySearch: "Berlin"
    };
  }
  /// call the fetch function
  componentDidMount() {
    this.getAPI();
  }
  // get API function
  getAPI() {
    fetch(`api.openweathermap.org/data/2.5/weather?q=${this.state.citySearch}&appid=886d3852a40cc28c819dfcb6e2ae6402
    `) // "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f5365eb604c7d477c4906365a030169e"
      .then(response => response.json())
      .then(result => {
        this.setState({
          weatherDisplay: result,
          loading: false
        });
        console.log(this.state.weatherDisplay);
      });
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="weatherDisplay">
        <WeatherCard />
        {loading ? (
          "...loading</br> Please wait!"
        ) : (
          <WeatherCard weatherProps={this.state.weatherDisplay} />
        )}
      </div>
    );
  }
}

export default WeatherDisplay;
