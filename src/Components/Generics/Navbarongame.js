import React, { Component } from "react";


class Navbarongame extends Component {

  constructor(props) {
    super(props);
    this.logo = "images/" + "Logo.png";
  };


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
            <a id="navAboutLink">
              Nivel
            </a>
          </li>
          <li>
            <a id="navAboutLink">
              Dificultad
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbarongame;