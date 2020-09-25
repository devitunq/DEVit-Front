import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Level from "../Components/Pages/Level";
import About from "./Pages/About";
import LevelDifficulty from "./Pages/LevelDiffculty";
import LevelSelection from "./Pages/LevelSelection";


class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Level} path="/level" />
        <Route component={About} path="/about" />
        <Route component={Home} path="/home" />
        <Route component={LevelDifficulty} path="/difficulty" />
        <Route component={LevelSelection} path="/levelSelection/:difficulty" />
        <Route component={Home} exact path="/" />
      </BrowserRouter>
    );
  }
}

export default Routes;
