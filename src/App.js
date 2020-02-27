import React from "react";
import Header from "./Component/Header";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Pages/Legal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Frontpage from "./Pages/Frontpage.js";

import Animation from "./Component/Animation";
import Notfound from "./Pages/Notfound";

import HistoricalWeather from "./Component/HistoricalWeather";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Frontpage} />
        <Route exact path="/home" component={Frontpage} />
        <Route exact path="/statistics" component={HistoricalWeather} />
        <Route exact path="/legal" component={Legal} />
        <Route exact path="/animation" component={Animation} />
        <Route path="*" component={Notfound} />
      </Switch>
      <StickyFooter />
    </Router>
  );
}

export default App;
