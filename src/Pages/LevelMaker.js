import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Generics/Navbar";
import Logo from "../Components/Generics/Logo";
import LevelMakerModal from "../Components/LevelMaker/LevelMakerModal";
import Gameboard from "../Components/Board/Gameboard";
import CharacterDefault from "../Assets/gameElements/character3.png";
import Toast from "../Components/Generics/Toast";
import { Grid, Container, LinearProgress } from "@material-ui/core";
import "./styles/LevelMaker.css";

const boardSize = 7;
const emptyBoard = Array(boardSize)
  .fill()
  .map((_) => Array(boardSize).fill());

const defaultPlayer =
  { name: "Ariel", img: { right: CharacterDefault, left: CharacterDefault } };


const LevelMaker = () => {
  const [grid] = useState(emptyBoard);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [objects, setObjects] = useState([]);
  const [paths, setPaths] = useState([]);
  const [openSelection, setOpenSelection] = useState(false);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState("");

  const [playersInGame, setPlayerSelected] = useState(0);
  const [finishesInGame, setFinisheSelected] = useState(0);


  const savePosition = (i, j) => {
    setCurrentPosition({ posX: i, posY: j })
    setOpenSelection(true);
  };

  const saveElement = (element) => {
    if (element.type === "PathTile") {
      setPaths([...paths, element])
    } else {
      setObjects([...objects, element])
    };
  };

  const onSelectionDeleteFromModal = () => {
    let positionElement = currentPosition;
    if (typeOfElementInPosition(positionElement) !== null) {
      deleteElement(positionElement);
      setOpenSelection(false);
    }
    else {
      setOpenSelection(false);
      setError("No hay elemento para borrar en la celda seleccionada");
      setToast(true);
    };
  };

  const deleteElement = (positionElement) => {
    let typeElementInPosition = typeOfElementInPosition(positionElement);
    console.log("el tipo a borrar", typeElementInPosition)
    if (typeElementInPosition === "PathTile") {
      deletePath(positionElement);
    } else {
      deleteObject(positionElement, typeElementInPosition);
    };
    if (isFinishOrPlayerType(typeElementInPosition))
      decreaseCountForPlayerOrFinishType(typeElementInPosition);
  };

  const deletePath = (pathPosition) => {
    let newPaths = paths.filter(path =>
      path.position.posX !== pathPosition.posX &&
      path.position.posY !== pathPosition.posY
    );
    setPaths(newPaths);
  }

  const deleteObject = (objectPosition, typeElementInPosition) => {
    let newObjects = objects.filter(obj =>
      obj.position.posX !== objectPosition.posX &&
      obj.position.posY !== objectPosition.posY &&
      obj.type === typeElementInPosition
    );
    setObjects(newObjects);
    console.log(newObjects);
  }

  const typeOfElementInPosition = (pos) => {
    let type = null;
    let objectFound = objects.find(obj => obj.position.posX === pos.posX &&
      obj.position.posY === pos.posY);
    let pathFound = paths.find(path => path.position.posX === pos.posX &&
      path.position.posY === pos.posY);
    if (objectFound) type = objectFound.type;
    if (pathFound) type = pathFound.type;
    return type;
  };

  const isFinishOrPlayerType = (type) => {
    return type === "Player" || type === "Finish" ? true : false
  }

  const decreaseCountForPlayerOrFinishType = (type) => {
    if (type === "Player") {
      setPlayerSelected(playersInGame - 1);
    } else {
      setFinisheSelected(finishesInGame - 1);
    };
  };

  const onSelectionPlayerFromModal = () => {
    if (playersInGame === 0) {
      let elementToSave = { type: "Player", position: currentPosition, lookingTo: "right", keys: [] };
      saveElement(elementToSave);
      setPlayerSelected(playersInGame + 1);
      setOpenSelection(false);
    } else {
      setOpenSelection(false);
      setError("No puede haber mas de un personaje en el tablero.");
      setToast(true);
    };
  };

  const onSelectionFinishFromModal = () => {
    if (finishesInGame === 0) {
      let elementToSave = { type: "Finish", position: currentPosition };
      saveElement(elementToSave);
      console.log(elementToSave)
      setFinisheSelected(finishesInGame + 1);
      setOpenSelection(false);
    } else {
      setOpenSelection(false);
      setError("No puede haber mas de una meta en el tablero.");
      setToast(true);
    }
  }

  const onSelectionPathFromModal = () => {
    let elementToSave = { type: "PathTile", position: currentPosition };
    saveElement(elementToSave);
    setOpenSelection(false);
  }

  const onSelectionDoorFromModal = () => {
    let elementToSave = { type: "door", position: currentPosition };
    saveElement(elementToSave);
    setOpenSelection(false);
  }

  const onSelectionKeyFromModal = () => {
    let elementToSave = { type: "Key", position: currentPosition };
    saveElement(elementToSave);
    setOpenSelection(false);
  }

  const handleCloseErrorToast = () => {
    setToast(false);
    setError(null);
  }


  return (
    <div>
      <ParticlesBg type="circle" bg={true} />

      <Logo />

      <Grid container direction="column" spacing={10} justify="center">
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs={12}>
          <div className="contWelcome-diff">
            {`Cree su propio nivel`}
            <hr className="divider-diff"></hr>
          </div>
        </Grid>
      </Grid>

      <Grid container direction="row">
        <Container maxWidth="xl">
          <Gameboard
            savePosition={savePosition}
            clickeable
            character={defaultPlayer}
            grid={grid}
            paths={paths}
            objects={objects}
          />
        </Container>
      </Grid>

      <LevelMakerModal
        open={openSelection}
        handleClose={() => setOpenSelection(false)}
        onClickPlayer={onSelectionPlayerFromModal}
        onClickFinish={onSelectionFinishFromModal}
        onClickPath={onSelectionPathFromModal}
        onClickDoor={onSelectionDoorFromModal}
        onClickKey={onSelectionKeyFromModal}
        onClickDelete={onSelectionDeleteFromModal}
      />

      <Toast
        width="85%"
        content={error}
        open={toast}
        handleClose={handleCloseErrorToast}
      />
    </div>
  );
};

export default LevelMaker;
