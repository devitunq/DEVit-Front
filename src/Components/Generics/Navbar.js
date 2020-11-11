import React from "react";
import "./Navbar.css"

const isAuthenticated = () => { return localStorage.getItem('accessToken') };
const isUserName = () => { return localStorage.getItem("userName") != null }

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
          <a href="/difficulty/deviter/Jorge" id="navDifficultyLink">
            Dificultades
        </a>
        </li>}
      {isAuthenticated() && isUserName() &&
        <li>
          <a href="/profile" id="navProfileLink">
            Perfil
        </a>
        </li>}
      {isAuthenticated() &&
        <li>
          <a href="/levelMaker" id="navLevelMakerLink">
            Autoservicio
        </a>
        </li>}
      {isAuthenticated() &&
        <li>
          <a href="#" onClick={() => localStorage.clear()} id="navLogoutLink">
            Cerrar sesion
        </a>
        </li>}
    </ul>
  </nav>
);

export default Navbar;
