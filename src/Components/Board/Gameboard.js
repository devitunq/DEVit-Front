import React, { Component } from "react";
import BoardCell from "./BoardCell";
import "./Gameboard.css";
import Water from "../../Assets/test-water.png";
import Player from "../../Assets/test-player.png";
import Navbarongame from "../Generics/Navbarongame"
import ParticlesBg from "particles-bg";
import AppDragDropDemo from "../Drop&Drag"

const BOARD_SIZE = 7;
class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(BOARD_SIZE)
        .fill()
        .map((_) => Array(BOARD_SIZE).fill()),
    };
  }

  render() {
    const grid = this.state.grid;
    const board = grid.map((row, i) => {
      return (
        <tr key={"row_" + i}>
          {row.map((_, j) => {
            return (
              <BoardCell
                key={`cell_${i}_${j}`}
                background={Water}
                img={i === j ? Player : ""}
                pos={`${i}_${j}`}
              />
            );
          })}
        </tr>
      );
    });
    return (
      <div>
        <ParticlesBg type="circle" bg={true} />

        <Navbarongame />

        <AppDragDropDemo />

        <div className="boardContainer">
          <table cellSpacing="0" className="board">
            <tbody>{board}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Gameboard;
