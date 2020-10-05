import React from "react";
import "./BoxObjective.css";
import objective from "../../Assets/levelPageItems/objetivo.png";

const BoxObjetive = ({ text }) => (
  <div className="container-objective" id="objContainer">
    <span className="objective-header">
      <img
        id="objImg"
        className="objetive-pic"
        src={objective}
        alt="objetivo"
      />
    </span>
    <div className="objective">
      <p className="objective-text" id="objText">
        {" "}
        {text}{" "}
      </p>
    </div>
  </div>
);

export default BoxObjetive;
