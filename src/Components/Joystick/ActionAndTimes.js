import React from "react";
import "./Joystick.css";

const ActionAndTimes = ({ src, alt, times, onClick, onClickTimes }) => (
  <div>
    <div onClick={onClickTimes} className="times-circle"><p className="times-text">{times}</p></div>
    <img
      className="board-inst"
      src={src}
      alt={alt}
      onClick={onClick}
    />
  </div >
);

export default ActionAndTimes;