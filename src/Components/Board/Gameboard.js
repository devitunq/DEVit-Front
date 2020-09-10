import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import BoardCell from "./BoardCell";
import "./Gameboard.css";
import Water from "../../Assets/test-water.png";
import Player from "../../Assets/test-player.png";
import Finish from "../../Assets/test-finish.png";
import Navbar from "../Generics/Navbar";
import ParticlesBg from "particles-bg";
import AppDragDropDemo from "../Drop&Drag";
import BoxObjetive from "../Boxobjective";
import { getLevelByLevelId } from "../../Services/LevelService";

const BOARD_SIZE = 7;
class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(BOARD_SIZE)
        .fill()
        .map((_) => Array(BOARD_SIZE).fill()),
      playerXPos: 1,
      playerYPos: 4,
      finishXPos: 6,
      finishYPos: 0,
    };
  }

  componentDidMount() {
    getLevelByLevelId("Easy_Level One").then((response) =>
      console.log(response)
    );
  }

  boardPositions(boardCell) {
    let playerPosXY = `${this.state.playerXPos}_${this.state.playerYPos}`;
    let finishPosXY = `${this.state.finishXPos}_${this.state.finishYPos}`;

    switch (boardCell) {
      case playerPosXY:
        return Player;
        break;
      case finishPosXY:
        return Finish;
        break;
      default:
        return Water;
        break;
    }
  }

  render() {
    const grid = this.state.grid;
    const board = grid.map((row, j) => {
      return (
        <tr key={"row_" + j}>
          {row.map((_, i) => {
            return (
              <BoardCell
                key={`cell_${i}_${j}`}
                background={Water}
                img={this.boardPositions(`${i}_${j}`)}
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
          alignItems="left"
        >
          <Grid item xs={12}>
            <Navbar />
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={6}>
              <BoxObjetive />

              <AppDragDropDemo />

              <div className="start-Board-butt">Iniciar tablero</div>

              <div className="delete-Board-butt">Borrar tablero</div>
            </Grid>

            <Grid item xs={6}>
              <div className="boardContainer">
                <table cellSpacing="0" className="board">
                  <tbody>{board}</tbody>
                </table>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Gameboard;
