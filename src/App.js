<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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
>>>>>>> dev
  );
}

export default App;
