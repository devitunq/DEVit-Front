import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, LinearProgress } from "@material-ui/core";
import ParticlesBg from "particles-bg";
import "./styles/Level.css";
import Gameboard from "../Components/Board/Gameboard";
import Navbar from "../Components/Generics/Navbar";
import Joystick from "../Components/Joystick/Joystick";
import Helpers from "../Components/Others/Helpers";
import Logo from "../Components/Generics/Logo";
import LevelModal from "../Components/Generics/LevelModal";
import { getLevelByLevelId, postLevelSucces } from "../Utils/Api";
import { getCharacterByName } from "../Utils/Characters";
import { traductorLevels } from "../Utils/LevelsTraductor";

const boardSize = 7;
const initialBoard = Array(boardSize)
  .fill()
  .map((_) => Array(boardSize).fill());

const Level = () => {
  const [grid] = useState(initialBoard);
  const [levelName, setLevelName] = useState(null);
  const [objects, setObjects] = useState([]);
  const [paths, setPaths] = useState([]);
  const [comment, setComment] = useState("");
  const [description, setDescription] = useState("");
  const [diff, setdiff] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);
  const [playerInicialPos, setPlayerInicialPos] = useState(null);
  const [stars, setStars] = useState(0);
  const [joystickRestrictions, setJoystickRestrictions] = useState(null);
  const { levelID } = useParams();
  const { character } = useParams();
  const characterObj = getCharacterByName(character);

  useEffect(() => {
    if (isLoading)
      getLevelByLevelId(levelID).then((response) => {
        setLevelName(response.data.name);
        setObjects(response.data.elements.filter((e) => e.type !== "PathTile"));
        setPaths(response.data.elements.filter((e) => e.type === "PathTile"));
        setPlayerInicialPos(response.data.playerPosition);
        setDescription(response.data.description);
        setdiff(response.data.difficulty);
        setJoystickRestrictions({
          ifEnabled: response.data.ifEnabled,
          repeatEnabled: response.data.repeatEnabled,
          callProceduresEnabled: response.data.callProceduresEnabled,
          maxMovsBoard1: response.data.maxMovsBoard1,
          maxMovsBoard2: response.data.maxMovsBoard2
        });
        setIsLoading(false);
      });
  });


  const finishLevel = (success, comment, starsWon) => {
    setSuccess(success);
    setComment(comment);
    let objectsTemp = objects;
    objectsTemp.forEach((obj) => {
      if (obj.type === "player") {
        obj.position = playerInicialPos;
      }
    });
    setObjects(objectsTemp);
    setStars(starsWon);
    postLevelSucces(localStorage.getItem("userName"), levelID, starsWon);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const renderEachStep = (i, data) => {
    let { levelState, fullGame, comment, starsWon } = data;
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
    } else setTimeout(() => finishLevel(levelState === "Complete", comment, starsWon), 500);
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

          <Grid item xs={12}>
            <div className="contWelcome-diff">
              {traductorLevels(levelName)}
              <hr className="divider-diff"></hr>
            </div>
          </Grid>

        </Grid>

        <div className="boardLevel">
          <Gameboard
            character={characterObj}
            grid={grid}
            paths={paths}
            objects={objects}
          />
        </div>

        <div className="l-joystick">
          <Helpers text={description} />
          <Joystick
            restrictions={joystickRestrictions}
            withSave
            onClickPlay={(response) => {
              renderEachStep(0, response.data)
            }}
            levelID={levelID}
          />
        </div>


        <LevelModal
          open={modal}
          onClickWin={`/levelSelection/${diff}/${character}`}
          onClickLost={closeModal}
          close={closeModal}
          result={success}
          comment={comment}
          stars={stars}
        />

      </div >
    );
};

export default Level;
