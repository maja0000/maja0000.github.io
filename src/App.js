import React from "react";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Pages/Legal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
