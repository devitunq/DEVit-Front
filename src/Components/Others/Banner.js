import React from "react";
import StartButton from "../Generics/StartButton";
import "../Others/Banner.css";

const Banner = ({ description }) => (
  <div className="row banner">
    <div className="banner-text">
      <img
        id="logoDevit"
        src="images/Logo.png"
        alt="logoDevit"
      />
      <h3 id="descDevit">{description}.</h3>
      <hr />

      <StartButton
        styledClassName="button btn btn-primary"
        href="/sign"
        text="Comenzar"
        iconClassName="fa fa-play"
      />
    </div>
  </div>
);

export default Banner;
