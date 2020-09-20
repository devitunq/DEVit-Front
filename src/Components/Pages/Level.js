import React, { useEffect, useState } from "react";
import { Grid, LinearProgress, Container } from "@material-ui/core";
import "../Board/Gameboard.css";
import Gameboard from "../Board/Gameboard";
import BoardButton from "../Generics/BoardButton";
import Navbar from "../Generics/Navbar";
import ParticlesBg from "particles-bg";
import DropAndDrag from "../Others/Drop&Drag";
import BoxObjetive from "../Others/Boxobjective";
import Logo from "../Generics/Logo";
import {
  getLevelByLevelId,
  postLevelSolution,
} from "../../Services/LevelService";


const boardSize = 7;
const initialBoard = Array(boardSize).fill().map((_) => Array(boardSize).fill())

const Level = () => {

  const [grid, setGrid] = useState(initialBoard)
  const [objects, setObjetcs] = useState([])
  const [paths, setPaths] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading)
      getLevelByLevelId("Easy_Level One").then((response) => {
        setObjetcs(response.data.elements.filter((e) => e.type !== "PathTile"));
        setPaths(response.data.elements.filter((e) => e.type === "PathTile"));
        setIsLoading(false);
      });
  })


  const renderEachStep = (i, data) => {
    let { levelState, fullGame } = data;
    let tempObjects,
      tempPaths = [];
    tempObjects = fullGame[i].filter((e) => e.type !== "PathTile");
    tempPaths = fullGame[i].filter((e) => e.type === "PathTile");
    setObjetcs(tempObjects);
    setPaths(tempPaths);
    if (i < fullGame.length - 1) {
      setTimeout(() => {
        i++;
        renderEachStep(i, data);
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
                      ]).then(({ data }) => renderEachStep(0, data));
                    }}
                  ></BoardButton>

                  <BoardButton text={"Reiniciar juego"}></BoardButton>
                </div>
              </Container>
            </Grid>

            <Grid item xs={6}>
              <Gameboard
                grid={grid}
                paths={paths}
                objects={objects}
              ></Gameboard>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
}

export default Level;
