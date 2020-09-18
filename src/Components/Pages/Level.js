import React, { Component } from "react";
import { Grid, LinearProgress, Container } from "@material-ui/core";
import "../Board/Gameboard.css";
import { Gameboard } from "../Board/Gameboard"
import { BoardButton } from "../Generics/BoardButton"
import Water from "../../Assets/test-water.png";
import Player from "../../Assets/test-player.png";
import Finish from "../../Assets/test-finish.png";
import Path from "../../Assets/test-path.png";
import { Navbar } from "../Generics/Navbar";
import ParticlesBg from "particles-bg";
import DropAndDrag from "../Others/Drop&Drag";
import { BoxObjetive } from "../Others/Boxobjective";
import { Logo } from "../Generics/Logo"
import {
  getLevelByLevelId,
  postLevelSolution,
} from "../../Services/LevelService";

const elemeTypeStrToElemType = (elemTypeStr) => {
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


const boardPositions = (boardCell, elements, isObject = false) => {
  let img = isObject ? "" : Water;
  let element = elements.find(
    (e) => `${e.position.posX}_${e.position.posY}` === boardCell
  );
  if (element) img = elemeTypeStrToElemType(element.type);
  return img;
}

const BOARD_SIZE = 7;
class Level extends Component {
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
    });
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

          <Logo />

          <Grid container direction="column" spacing={10} justify="center">
            <Grid item xs={12}>
              <Navbar />
            </Grid>

            <Grid container item xs={12}>
              <Grid item xs={6}>

                <Container maxWidth="xl">
                  <div className="ins-board-obj">
                    <BoxObjetive />

                    <DropAndDrag />

                    <BoardButton
                      text={"Iniciar tablero"}
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
                      }}>
                    </BoardButton>

                    <BoardButton
                      text={"Reiniciar juego"} >
                    </BoardButton>
                  </div>

                </Container>

              </Grid>

              <Grid item xs={6}>
                <Gameboard
                  grid={grid}
                  paths={paths}
                  objects={objects}
                >
                </Gameboard>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
  }
}

export default Level;
export { boardPositions };
