import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Generics/Navbar";
import About from "../Components/About";

class Header extends Component {

  constructor(props) {
    super(props);
    this.logopic = "images/" + "Logo.png";
    this.description = "¡Bienvenido a DEVit!, un juego donde podrás aprender a programar divirtiendote y poniendo a prueba tus conocimientos."
  };

  render() {
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <Navbar />

        <div className="row banner">
          <div className="banner-text">
            <img
              id="logoDevit"
              className="logo-pic"
              src={this.logopic}
              alt="logoDevit"
            />
            <h3 id="descDevit">{this.description}.</h3>
            <hr />
            <ul className="social">
              <a href="/gameboard" id="playButton" className="button btn btn-primary">
                <i className="fa fa-play"></i>Iniciar el juego
              </a>
            </ul>
          </div>
        </div>
      </header>


    );
  }
}

export default Header;
