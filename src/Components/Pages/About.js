import React from "react";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import { Container } from "@material-ui/core";
import "./About.css"

const About = () => {
  const bio =
    "Somos un equipo de estudiantes de programacion de la Universidad Nacional" +
    " de Quilmes, los cuales decimos encarar un proyecto para que los allegados al tema" +
    " puedan aprender, y al mismo tiempo divertirse. La idea de este juego es lograr incorporar" +
    " conceptos basicos tanto del desarollo nato como de la logica implementada.";

  return (
    <div>

      <Logo />

      <Navbar />

      <div className="section-one">
        <div className="about-cont">
          <h2 className="about-title">Sobre nosotros</h2>
          <hr className="about-sep"></hr>
          <p className="about-description" id="bioParagraph">{bio}</p>
          <a href="https://github.com/devitunq">
            <Container maxWidth="sm">
              <img className="github-pic" src={"/images/devit-github.png"} alt="logo" />
            </Container>
          </a>
        </div>

        <div className="separator">
          <svg className="separator__svg"
            width="100%"
            height="400"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="rgb(2,95,76)"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M 100 100 V 10 L 0 100" />
            <path d="M 30 73 L 100 18 V 10 Z" fill="rgb(0,56,45)" strokeWidth="0" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;