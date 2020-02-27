import React from "react";
// import SignInSide from "../Component/SignInSide";
import WeatherDisplay from "../Component/WeatherDisplay.js";
import "../css/Frontpage.css";
import { Breakpoint } from "react-socks";
// import HistoricalWeather from "../Component/HistoricalWeather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Animation from "../Component/Animation";
class Frontpage extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherDisplay: [],
      loading: true,
      citySearch: "Berlin",
      firstTime: !sessionStorage.getItem("firstTime")
    };
  }
  /// call the fetch function
  componentDidMount() {
    console.log(this.state.firstTime);
    if (this.state.firstTime) {
      sessionStorage.setItem("firstTime", true);
      // this.setState({ firstTime: false });
    }
    setTimeout(() => {
      this.setState({ firstTime: false });
      sessionStorage.setItem("firstTime", false);
    }, 2000);

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
            toast.error("Sorry we can't find your city⚠️ please try again!  ")
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
          return Promise.reject(
            toast.error("Sorry we can't find your city ⚠️  please try again! ")
          );
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
    return this.state.firstTime ? (
      <Animation />
    ) : (
      <div className="frontpage">
        <ToastContainer />
        <WeatherDisplay
          weatherProps={this.state.weatherDisplay}
          onSearch={this.searchForNewLocation}
          handleChange={this.handleChange}
          loading={this.state.loading}
        />
        <Breakpoint large up>
          {/* <HistoricalWeather citySearch={this.state.citySearch} /> */}
        </Breakpoint>
      </div>
    );
  }
}

export default Frontpage;
