import React from "react";

const isAuthenticated = () => { return localStorage.getItem('accessToken') != null };

const Navbar = () => (
  <nav id="nav-wrap">

    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Mostrar</a>
    <a className="mobile-btn" href="#home" title="Hide navigation">Ocultar</a>

    <ul id="nav" className="nav">
      <li className="current">
        <a href="/" id="navHomeLink">
          Home
        </a>
      </li>
      <li>
        <a href="/about" id="navAboutLink">
          ¿Quienes somos?
        </a>
      </li>
      {isAuthenticated() &&
        <li>
          <a href="/difficulty/deviter" id="navDifficultyLink">
            Dificultades
        </a>
        </li>}
      {isAuthenticated() &&
        <li>
          <a href="/profile" id="navProfileLink">
            Perfil
        </a>
        </li>}
    </ul>
  </nav>
);

export default Navbar;
