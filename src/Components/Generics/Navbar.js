import React from "react";

const Navbar = () => {
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
        <li>
          <a href="/difficulty" id="navAboutLink">
            Dificultades
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
