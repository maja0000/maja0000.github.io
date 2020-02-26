import React from "react";
import "../css/WeatherDisplay.css";
import WeatherCard from "./WeatherCard.js";
import { responsiveFontSizes } from "@material-ui/core";
// import DailyWeatherDetails from "./DailyWeatherDetails";

class WeatherDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherDisplay: [],
      loading: true,
      citySearch: "Berlin"
    };
    // console.log(this.state);
  }
  /// call the fetch function
  componentDidMount() {
    ///  call function for geolocation
    this.getCityNameFromIp();
    this.getWeather(); /*gave different name to differenciate the api fetches better*/
  }

  //   displayWeatherFromIp = position => {
  //     console.log(position);
  //     let lng = position.coords.longitude;
  //     let lat = position.coords.latitude;
  //     console.log(`longitude: ${lng} | latitude: ${lat}`);
  //   };

  // change location based on user's input
  handleChange = event => {
    console.log("change input");
    this.setState({ citySearch: event.target.value });
  };

  // this function gets called when user presses enter in searchbar
  searchForNewLocation = event => {
    console.log("click search");
    this.getWeather();
  };

  // get City name from ip address
  getCityNameFromIp() {
    fetch("http://ip-api.com/json/")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(
            alert("Sorry, we could not find your location.")
          );
        }
      })
      .then(result => {
        this.setState({
          citySearch: result.city
        });
      })
      .then(result => this.getWeather());
  }

  // get API function for current weather
  getWeather() {
    /*gave different name*/
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.citySearch}&units=metric&APPID=886d3852a40cc28c819dfcb6e2ae6402`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(alert("Sorry, we could not find your city."));
        }
      })
      .then(result => {
        this.setState({
          weatherDisplay: result,
          loading: false
        });
      });
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="weatherDisplay">
        {/* add information that data isn't here yet */}
        {loading ? (
          "...loading</br> Please wait!"
        ) : (
          <WeatherCard
            weatherProps={this.state.weatherDisplay}
            onSearch={this.searchForNewLocation}
            handleChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default WeatherDisplay;
