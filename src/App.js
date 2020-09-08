import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Gameboard from "./Components/Gameboard";
import Routes from "./Components/Routes"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
