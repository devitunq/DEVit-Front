import React, { Component } from "react";

const Navbar = (props) => {
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
      </ul>
    </nav>
  );
};

export { Navbar };
