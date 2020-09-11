import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import BoardCell from "./BoardCell";
import "./Gameboard.css";
import Water from "../../Assets/test-water.png";
import Player from "../../Assets/test-player.png";
import Finish from "../../Assets/test-finish.png";
import Path from "../../Assets/test-path.png";
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
      elementList: [],
    };
  }

  componentDidMount() {
    getLevelByLevelId("Easy_Level One").then((response) => {
      let temp = [];

      if (response.data !== undefined) {
        response.data.elements.forEach(e => { temp.push(e) }
        );
      }
      this.setState({ elementList: temp })
      console.log(this.state.elementList)
    });
  }

  elemeTypeStrToElemType(elemTypeStr) {
    switch (elemTypeStr) {
      case "Finish":
        return Finish;
      case "Player":
        return Player;
      case "PathTile":
        return Path;
      default:
        return Water;
    }
  }

  boardPositions(boardCell) {
    let img = Water
    let elements = this.state.elementList
    let posFound = false

    while (!posFound) {
      let posString = `${elements[1].position.posX}_${elements[1].position.posY}`;
      if (posString == boardCell) {
        img = this.elemeTypeStrToElemType(elements[0].type);
        posFound = true
      }
      elements = elements.shift()
    }
    return img
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
                img={Water}
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
