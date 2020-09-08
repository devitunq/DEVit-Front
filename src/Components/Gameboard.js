import React, { Component } from "react";
import BoardCell from "./BoardCell";

class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(7)
        .fill()
        .map((x) => Array(7).fill("+")),
    };
  }

  render() {
    const style = {
      textAlign: "center",
      margin: "auto",
      height: "100%",
      width: "100%",
      border: "1px solid black",
      tableLayout: "fixed",
    };
    const grid = this.state.grid;
    const board = grid.map((row, i) => {
      return (
        <tr key={"row_" + i}>
          {row.map((col, j) => {
            const color_ =
              grid[i][j] === "+"
                ? "#e4e4a1"
                : grid[i][j] === "w"
                ? "white"
                : "black";
            return <BoardCell color={color_} key={i + "_" + j} />;
          })}
        </tr>
      );
    });
    return (
      <div style={{ margin: "auto", width: "75%", height: "75%" }}>
        <table cellSpacing="0" style={style}>
          <tbody>{board}</tbody>
        </table>
      </div>
    );
  }
}

export default Gameboard;
