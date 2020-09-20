import React from "react";
import "./BoardButton.css";

const BoardButton = ({ onClick, text }) => (
  <div className="board-butt" onClick={onClick}>
    {text}
  </div>
);

export default BoardButton;
