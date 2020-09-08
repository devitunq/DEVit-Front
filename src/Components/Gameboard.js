import React, { Component } from "react";
import "./Gameboard.css";

const GRID_SIZE = 75;

class BoardIntersection extends Component {
  render = () => {
    var style = {
      top: this.props.row * GRID_SIZE,
      left: this.props.col * GRID_SIZE,
    };

    var classes = "intersection black";

    return <div className={classes} style={style}></div>;
  };
}

class Gameboard extends Component {
  render() {
    var intersections = [];
    for (var i = 0; i < 7; i++)
      for (var j = 0; j < 7; j++)
        intersections.push(
          <BoardIntersection key={`cell_${i}_${j}`} row={i} col={j} />
        );
    var style = {
      width: 7 * GRID_SIZE,
      height: 7 * GRID_SIZE,
    };
    return (
      <div style={style} id="gameboard">
        {intersections}.
      </div>
    );
  }
}

export default Gameboard;
