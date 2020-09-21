import React from "react";
import "./BoxObjective.css";

const BoxObjetive = ({ text }) => {
  return (
    <div className="container-objective">
      <span className="objective-header">
        <img
          className="objetive-pic"
          src={"/images/objetivo.png"}
          alt="objetivo"
        />
      </span>
      <div className="objective">
        <p className="objective-text"> {text} </p>
      </div>
    </div>
  );
};

export default BoxObjetive;
