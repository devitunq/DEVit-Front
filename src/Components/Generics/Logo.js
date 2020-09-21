import React from "react";
import "./Logo.css";
import { Container } from "@material-ui/core";

const Logo = () => (
  <div className="logo-startpage">
    <Container maxWidth="xl">
      <img className="logo-start" src={"/images/Logo.png"} alt="logo" />
    </Container>
  </div>
);

export default Logo;
