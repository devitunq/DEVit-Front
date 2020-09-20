import React from "react";

const Navbar = () => (
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
      <li>
        <a href="/difficulty" id="navDifficultyLink">
          Dificultades
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
