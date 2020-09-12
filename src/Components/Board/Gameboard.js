import React, { Component } from "react";
import { Grid, LinearProgress } from "@material-ui/core";
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
import {
  getLevelByLevelId,
  postLevelSolution,
} from "../../Services/LevelService";

const BOARD_SIZE = 7;
class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(BOARD_SIZE)
        .fill()
        .map((_) => Array(BOARD_SIZE).fill()),
      objects: [],
      paths: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    getLevelByLevelId("Easy_Level One").then((response) => {
      let objects,
        paths = [];
      objects = response.data.elements.filter((e) => e.type !== "PathTile");
      paths = response.data.elements.filter((e) => e.type === "PathTile");
      this.setState({ objects, paths, isLoading: false });
      // console.log(this.state.elementList);
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

  boardPositions(boardCell, elements, isObject = false) {
    let img = isObject ? "" : Water;
    let element = elements.find(
      (e) => `${e.position.posX}_${e.position.posY}` === boardCell
    );
    if (element) img = this.elemeTypeStrToElemType(element.type);
    return img;
  }

  renderEachStep = (i, data) => {
    let { levelState, fullGame } = data;
    let objects,
      paths = [];
    objects = fullGame[i].filter((e) => e.type !== "PathTile");
    paths = fullGame[i].filter((e) => e.type === "PathTile");
    this.setState({ objects, paths });
    if (i < fullGame.length - 1) {
      setTimeout(() => {
        i++;
        this.renderEachStep(i, data);
      }, 500);
    } else
      setTimeout(
        () =>
          alert(
            levelState === "Complete"
              ? "Bien hecho!"
              : "No lo conseguiste, vuelve a intentarlo!"
          ),
        500
      );
  };

  render() {
    const { grid, isLoading, objects, paths } = this.state;
    return isLoading ? (
      <LinearProgress variant="indeterminate" />
    ) : (
      <div>
        <ParticlesBg type="circle" bg={true} />
        <Grid container direction="column" spacing={10} justify="center">
          <Grid item xs={12}>
            <Navbar />
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={6}>
              <BoxObjetive />

              <AppDragDropDemo />

              <div
                className="start-Board-butt"
                onClick={() => {
                  postLevelSolution("Easy_Level One", [
                    "GoUp",
                    "GoUp",
                    "GoRight",
                    "GoRight",
                    "GoRight",
                    "GoUp",
                    "GoRight",
                    "GoRight",
                    "GoUp",
                  ]).then(({ data }) => this.renderEachStep(0, data));
                }}
              >
                Iniciar tablero
              </div>

              <div className="delete-Board-butt">Borrar tablero</div>
            </Grid>

            <Grid item xs={6}>
              <div className="boardContainer">
                <table cellSpacing="0" className="board">
                  <tbody>
                    {grid.map((row, j) => (
                      <tr key={"row_" + j}>
                        {row.map((_, i) => (
                          <BoardCell
                            key={`cell_${i}_${j}`}
                            background={this.boardPositions(`${i}_${j}`, paths)}
                            img={this.boardPositions(
                              `${i}_${j}`,
                              objects,
                              true
                            )}
                            pos={`${i}_${j}`}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
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
