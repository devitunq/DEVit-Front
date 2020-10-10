import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Level from "../Components/Pages/Level";
import About from "./Pages/About";
import LevelDifficulty from "./Pages/LevelDifficulty";
import LevelSelection from "./Pages/LevelSelection";
import AuthOrGuest from "./Pages/AuthOrGuest";
import CharacterSelection from "./Pages/CharacterSelection";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Level} path="/level/:levelID/:character" />
        <Route component={About} path="/about" />
        <Route component={Home} path="/home" />
        <Route component={AuthOrGuest} path="/sign" />
        <Route component={LevelDifficulty} path="/difficulty/:nick/:character" />
        <Route component={CharacterSelection} path="/characterSelection/:nick" />
        <Route component={LevelSelection} path="/levelSelection/:difficulty/:character" />
        <Route component={Home} exact path="/" />
      </BrowserRouter>
    );
  }
}

export default Routes;
