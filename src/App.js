import React from "react";
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
      <StickyFooter />
    </Router>
  );
}

export default App;

