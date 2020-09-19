import React from "react";
import "./BoardButton.css";

const BoardButton = ({ onClick, text }) => {
  return (
    <div className="board-butt" onClick={onClick}>
      {text}
    </div>
  );
};

export default BoardButton;
