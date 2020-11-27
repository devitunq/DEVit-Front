import React, { Component } from "react";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div style={{ overflowX: "hidden", height: "100vh" }}>
        <Routes />
      </div>
    );
  }
}

export default App;
