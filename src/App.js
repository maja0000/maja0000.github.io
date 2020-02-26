import React from "react";
import Header from "./Component/Header";
import Notfound from "./Pages/Notfound";
import StickyFooter from "./Component/StickyFooter.js";
import Legal from "./Pages/Legal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Frontpage from "./Pages/Frontpage.js";
import { BreakpointProvider } from "react-socks";
import Animation from "./Component/Animation";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <BreakpointProvider>
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/home" component={Frontpage} />
          <Route exact path="/legal" component={Legal} />
          <Route path="/notfound" component={Notfound} />
          <Route exact path="/animation" component={Animation} />
        </BreakpointProvider>
      </Switch>
      <StickyFooter />
    </Router>
  );
}

export default App;
