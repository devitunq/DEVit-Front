import React from "react";

const StartButton = ({ text, iconClassName, href, style }) => {
  return (
    <ul className="social">
      <a href={href} id="playButton" className={style}>
        <i className={iconClassName}></i>
        {text}
      </a>
    </ul>
  );
};

export default StartButton;
