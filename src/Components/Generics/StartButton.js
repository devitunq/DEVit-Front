import React from "react";
import "./StartButton.css"

const StartButton = ({ text, iconClassName, href, styledClassName }) => (
  <ul className="social">
    <a href={href} id="playButton" className={styledClassName} data-testid="startButton">
      <i className={iconClassName}></i>
      {text}
    </a>
  </ul>
);

export default StartButton;
