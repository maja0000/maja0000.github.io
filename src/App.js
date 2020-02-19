import React from "react";
<<<<<<< HEAD
import WeatherDisplay from "./Component/WeatherDisplay";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Component/Legal";

function App() {
  return (
    <div className="App">
      <WeatherDisplay />
      <Legal />
=======
import SearchBar from "./Component/Searchbar/Searchbar";
import WeatherDisplay from "./Component/WeatherDisplay";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Pages/Legal";
import SignInSide from "./Component/SignInSide.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Frontpage from "./Pages/Frontpage.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Frontpage />
        </Route>
        <Route path="/legal">
          <Legal />
        </Route>
      </Switch>
>>>>>>> d58c1d250497e524cfd087dcb2b8ff74126f7d21
      <StickyFooter />
    </Router>
  );
}

export default App;

