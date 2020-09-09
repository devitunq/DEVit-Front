import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import BoardCell from "./BoardCell";
import "./Gameboard.css";
import Water from "../../Assets/test-water.png";
import Player from "../../Assets/test-player.png";
import Navbarongame from "../Generics/Navbarongame";
import ParticlesBg from "particles-bg";
import AppDragDropDemo from "../Drop&Drag";
import BoxObjetive from "../Boxobjective";

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
        <Grid
          container
          direction="column"
          spacing={10}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Navbarongame />
          </Grid>
          <Grid item xs={8} md={6} xl={4}>
            <BoxObjetive />
          </Grid>

          <Grid item xs={8} md={6} xl={4}>
            <div className="boardContainer">
              <table cellSpacing="0" className="board">
                <tbody>{board}</tbody>
              </table>
            </div>
          </Grid>

          <Grid item xs={8} md={6} xl={4}>
            <AppDragDropDemo />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Gameboard;
