import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Level from "../Components/Pages/Level";
import About from "./Pages/About";
import LevelDifficulty from "./Pages/LevelDifficulty";
import LevelSelection from "./Pages/LevelSelection";
import AuthOrGuest from "./Pages/AuthOrGuest";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Level} path="/level/:levelID" />
        <Route component={About} path="/about" />
        <Route component={Home} path="/home" />
        <Route component={AuthOrGuest} path="/sign" />
        <Route component={LevelDifficulty} path="/difficulty/:nick" />
        <Route component={LevelSelection} path="/levelSelection/:difficulty" />
        <Route component={Home} exact path="/" />
      </BrowserRouter>
    );
  }
}

export default Routes;
