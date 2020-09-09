import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class Navbar extends Component {
  render() {
    return (

      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li className="current">
            <a href="/home" id="navHomeLink">
              Home
          </a>
          </li>
          <li>
            <a href="/about" id="navAboutLink">
              ¿Quienes somos?
          </a>
          </li>
        </ul>
      </nav>

    );
  }
}

export default Navbar;
