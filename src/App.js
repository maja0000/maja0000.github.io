import Header from "./Component/Header/Header";
import StickyFooter from "./Component/Footer/StickyFooter";
import Legal from "./Pages/Legal/Legal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Frontpage from "./Pages/Frontpage/Frontpage";
import Notfound from "./Pages/NotFound/Notfound";
import React from "react";

function App() {
  // function on click of statistic button in header

  return (
    <Router>
      <Header />
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
