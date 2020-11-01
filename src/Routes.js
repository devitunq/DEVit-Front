import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Home from "./Components/Pages/Home";
import Profile from "./Components/Pages/Profile";
import Level from "./Components/Pages/Level";
import About from "./Components/Pages/About";
import LevelDifficulty from "./Components/Pages/LevelDifficulty";
import LevelSelection from "./Components/Pages/LevelSelection";
import AuthOrGuest from "./Components/Pages/AuthOrGuest";
import CharacterSelection from "./Components/Pages/CharacterSelection";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <PrivateRoute component={Level} path="/level/:levelID/:character" />
        <Route component={About} path="/about" />
        <Route component={AuthOrGuest} path="/sign" />
        <PrivateRoute component={Profile} path="/profile" />
        <PrivateRoute component={LevelDifficulty} path="/difficulty/:nick/:character" />
        <PrivateRoute component={CharacterSelection} path="/characterSelection/:nick" />
        <PrivateRoute component={LevelSelection} path="/levelSelection/:difficulty/:character" />
        <Route component={Home} exact path="/" />
      </BrowserRouter>
    );
  }
}

export default Routes;
