import React from "react";
// import SignInSide from "../Component/SignInSide";
import WeatherDisplay from "../Component/WeatherDisplay.js";
import "../css/Frontpage.css";
import { Breakpoint } from "react-socks";
import HistoricalWeather from "../Component/HistoricalWeather";

class Frontpage extends React.Component {
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

  // change location based on user's input
  handleChange = event => {
    this.setState({ citySearch: event.target.value });
  };

  // this function gets called when user presses enter in searchbar
  searchForNewLocation = event => {
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
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.citySearch}&units=metric&appid=886d3852a40cc28c819dfcb6e2ae6402`
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
    return (
      <div className="frontpage">
        <WeatherDisplay
          weatherProps={this.state.weatherDisplay}
          onSearch={this.searchForNewLocation}
          handleChange={this.handleChange}
          loading={this.state.loading}
        />
        <Breakpoint large up>
          <HistoricalWeather citySearch={this.state.citySearch} />
        </Breakpoint>
      </div>
    );
  }
}

export default Frontpage;
