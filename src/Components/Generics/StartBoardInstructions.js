import React, { Component } from "react";


class Navbarongame extends Component {

  constructor(props) {
    super(props);
    this.logo = "images/" + "Logo.png";
  };

  render() {
    return (
      <a
        id="startBoardButton"
        className="button btn btn-primary"
      >
        <i className="fa fa-play"></i>Iniciar el juego
      </a>
    );
  }
}