import React from "react";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
const About = () => {
  const bio =
    "Somos un equipo de estudiantes de programacion de la Universidad Nacional" +
    "de Quilmes, los cuales decimos encarar un proyecto para que los allegados al tema" +
    "puedan aprender, y al mismo tiempo divertirse. La idea de este juego es lograr incorporar" +
    "conceptos basicos tanto del desarollo nato como de la logica implementada en él";

  return (
    <div>
      <Logo />

      <Navbar />

      <section id="about">
        <div className="row">
          <div className="nine columns main-col">
            <h2>Sobre nosotros</h2>
            <p id="bioParagraph">{bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
