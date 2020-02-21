import React from "react";
import Header from "./Component/Header";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Pages/Legal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Frontpage from "./Pages/Frontpage.js";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Frontpage} />
        <Route exact={true} path="/home" component={Frontpage} />
        <Route exact={true} path="/legal" component={Legal} />
      </Switch>
      <StickyFooter />
    </Router>
  );
}

export default App;
