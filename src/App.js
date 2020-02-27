import React from "react";
import Header from "./Component/Header";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Pages/Legal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Frontpage from "./Pages/Frontpage.js";
import { BreakpointProvider } from "react-socks";


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <BreakpointProvider>
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/home" component={Frontpage} />
          <Route exact path="/legal" component={Legal} />
        </BreakpointProvider>
      </Switch>
      <StickyFooter />
    </Router>
  );
}

export default App;
