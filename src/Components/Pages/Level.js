import React, { useEffect, useState } from "react";
import { Grid, LinearProgress, Container } from "@material-ui/core";
import ParticlesBg from "particles-bg";
import "./Level.css";
import Gameboard from "../Board/Gameboard";
import Navbar from "../Generics/Navbar";
import Joystick from "../Joystick/Joystick";
import BoxObjetive from "../Others/Boxobjective";
import Logo from "../Generics/Logo";
import LevelModal from "../Generics/LevelModal";
import { getLevelByLevelId } from "../../Services/LevelService";

const boardSize = 7;
const initialBoard = Array(boardSize)
  .fill()
  .map((_) => Array(boardSize).fill());

const Level = () => {
  const [grid] = useState(initialBoard);
  const [objects, setObjects] = useState([]);
  const [paths, setPaths] = useState([]);
  const [comment, setComment] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (isLoading)
      getLevelByLevelId("Easy_Level One").then((response) => {
        setObjects(response.data.elements.filter((e) => e.type !== "PathTile"));
        setPaths(response.data.elements.filter((e) => e.type === "PathTile"));
        setDescription(response.data.description);
        setIsLoading(false);
      });
  });

  const finishLevel = (success, comment) => {
    setSuccess(success);
    setComment(comment);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const renderEachStep = (i, data) => {
    let { levelState, fullGame, comment } = data;
    let tempObjects,
      tempPaths = [];
    tempObjects = fullGame[i].filter((e) => e.type !== "PathTile");
    tempPaths = fullGame[i].filter((e) => e.type === "PathTile");
    setObjects(tempObjects);
    setPaths(tempPaths);
    if (i < fullGame.length - 1) {
      setTimeout(() => {
        i++;
        renderEachStep(i, data);
      }, 500);
    } else setTimeout(() => finishLevel(levelState === "Complete", comment));
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
                <BoxObjetive text={description} />
                <Joystick
                  onClickPlay={(reponse) => renderEachStep(0, reponse.data)}
                />
              </div>
            </Container>
          </Grid>

          <Grid item xs={6}>
            <Container fixed>
              <Gameboard
                grid={grid}
                paths={paths}
                objects={objects}
              ></Gameboard>
            </Container>
          </Grid>
        </Grid>
      </Grid>

      <LevelModal
        open={modal}
        close={closeModal}
        result={success}
        comment={comment}
      ></LevelModal>
    </div>
  );
};

export default Level;
