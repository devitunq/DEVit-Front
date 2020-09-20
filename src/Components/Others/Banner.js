import React from "react";
import StartButton from "../Generics/StartButton";

const Banner = ({ description }) => (
  <div className="row banner">
    <div className="banner-text">
      <img
        id="logoDevit"
        className="logo-pic"
        src="images/Logo.png"
        alt="logoDevit"
      />
      <h3 id="descDevit">{description}.</h3>
      <hr />

      <StartButton
        styledClassName="button btn btn-primary"
        href="/level"
        text="Comenzar"
        iconClassName="fa fa-play"
      />
    </div>
  </div>
);

export default Banner;
