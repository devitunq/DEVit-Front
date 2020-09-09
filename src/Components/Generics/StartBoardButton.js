import React, { Component } from "react";
import "./StartBoardButton.css"

class StartBoardButton extends Component {

  constructor(props) {
    super(props);
    this.logo = "images/" + "Logo.png";
  };

  render() {
    return (
      <div className="container-startboard">
        <button className="button-startboard">
          <span className="text-buttonstart">Inicar tablero</span>
        </button>
      </div>
    );
  }
}

export default StartBoardButton;