import Header from "./Component/Header";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Pages/Legal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Frontpage from "./Pages/Frontpage.js";
import Notfound from "./Pages/Notfound";
import React from "react";
import Animation from "./Component/Animation";

function App() {
  // function on click of statistic button in header

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Frontpage} />
        <Route exact path="/home" component={Frontpage} />
        <Route exact path="/legal" component={Legal} />
        <Route exact path="/animation" component={Animation} />
        <Route path="*" component={Notfound} />
      </Switch>
      <StickyFooter />
    </Router>
  );
}

export default App;
