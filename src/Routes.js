import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Level from "./Pages/Level";
import About from "./Pages/About";
import LevelMaker from "./Pages/LevelMaker";
import LevelDifficulty from "./Pages/LevelDifficulty";
import LevelSelection from "./Pages/LevelSelection";
import AuthOrGuest from "./Pages/AuthOrGuest";
import CharacterSelection from "./Pages/CharacterSelection";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <PrivateRoute component={Level} path="/level/:levelID/:character" />
        <Route component={About} path="/about" />
        <Route component={AuthOrGuest} path="/sign" />
        <Route component={Register} path="/register" />
        <PrivateRoute component={LevelMaker} path="/levelMaker" />
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
