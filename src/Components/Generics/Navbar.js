import React from "react";

const Navbar = () => (
  <nav id="nav-wrap">

    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Mostrar</a>
    <a className="mobile-btn" href="#home" title="Hide navigation">Ocultar</a>

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
      <li>
        <a href="/difficulty" id="navDifficultyLink">
          Dificultades
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
