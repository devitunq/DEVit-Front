import React, { Component } from "react";
import Navbar from "../Components/Generics/Navbar";

class About extends Component {

  constructor(props) {
    super(props);
    this.bio = "Somos un equipo de estudiantes de programacion de la Universidad Nacional de Quilmes, los cuales decimos encarar un proyecto para que los allegados al tema puedan aprender, y al mismo tiempo divertirse. La idea de este juego es lograr incorporar conceptos basicos tanto del desarollo nato como de la logica implementada en él";
  };

  render() {
    return (
      <div>
        <Navbar />

        <section id="about">
          <div className="row">
            <div className="nine columns main-col">
              <h2>Sobre nosotros</h2>
              <p id="bioParagraph">{this.bio}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
