import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Gameboard from "../Components/Board/Gameboard";
import About from "./Pages/About";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Gameboard} path="/gameboard" />
        <Route component={About} path="/about" />
        <Route component={Home} path="/home" />
        <Route component={Home} exact path="/" />
      </BrowserRouter>
    );
  }
}

export default Routes;
