import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Generics/Navbar";
import Logo from "../Components/Generics/Logo";
import Gameboard from "../Components/Board/Gameboard";
import CharacterDefault from "../Assets/gameElements/character3.png";
import Toast from "../Components/Generics/Toast";
import Joystick from "../Components/Joystick/Joystick";
import LevelMakerModal from "../Components/LevelMaker/LevelMakerModal";
import { Grid, Container, InputBase } from "@material-ui/core";
import { postNewLevel, isLevelExistent } from "../Utils/Api";
import { useHistory } from "react-router-dom"
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
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [successToast, setSuccessToast] = useState(false);
  const [showJoystick, setShowJoystick] = useState(false);
  const [playersInGame, setPlayerSelected] = useState(0);
  const [finishesInGame, setFinisheSelected] = useState(0);
  const [playerInitialPosition, setPlayerInitialPosition] = useState(null);
  const [newLevelName, setLevelName] = useState(null);
  const [newMovementsNumber, setMovementesNumber] = useState(null);
  const [level, setLevel] = useState(null);
  const [initialLevel, setInitialLevel] = useState(null);
  const history = useHistory();

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

  const isCellWithPathTile = (position) => {
    return paths.find(p =>
      p.position.posX === position.posX &&
      p.position.posY === position.posY
    ) !== undefined
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
    if (typeElementInPosition === "PathTile") {
      deletePath(positionElement);
    } else {
      deleteObject(positionElement);
    };
    if (isFinishOrPlayerType(typeElementInPosition))
      decreaseCountForPlayerOrFinishType(typeElementInPosition);
  };

  const deletePath = (pathPos) => {
    let newPaths = paths.filter(path =>
      path.position.posX !== pathPos.posX &&
      path.position.posY !== pathPos.posY
    );
    setPaths(newPaths);
  }

  const deleteObject = (objectPosition) => {
    let newObjects = objects.filter(obj =>
      obj.position.posX === objectPosition.posX &&
      obj.position.posY === objectPosition.posY
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
    if (playersInGame === 0 && isCellWithPathTile(currentPosition)) {
      let elementToSave = { type: "Player", position: currentPosition, lookingTo: "RIGHT", keys: [] };
      saveElement(elementToSave);
      setPlayerSelected(playersInGame + 1);
      setOpenSelection(false);
      setPlayerInitialPosition(currentPosition);
    } else {
      setOpenSelection(false);
      setError("Verifique que no haya otro personaje en el tablero y que haya camino en la celda.");
      setToast(true);
    };
  };

  const onSelectionFinishFromModal = () => {
    console.log(currentPosition);
    let asa = isCellWithPathTile(currentPosition)
    console.log(asa)
    if (finishesInGame === 0 && isCellWithPathTile(currentPosition)) {
      let elementToSave = { type: "Finish", position: currentPosition };
      saveElement(elementToSave);
      setFinisheSelected(finishesInGame + 1);
      setOpenSelection(false);
    } else {
      setOpenSelection(false);
      setError("Verifique que no haya otra meta en el tablero y que haya camino en la celda.");
      setToast(true);
    }
  }

  const onSelectionPathFromModal = () => {
    if (!isCellWithPathTile(currentPosition)) {
      let elementToSave = { type: "PathTile", position: currentPosition };
      saveElement(elementToSave);
      setOpenSelection(false);
    };
  };

  const onSelectionDoorFromModal = () => {
    if (isCellWithPathTile(currentPosition)) {
      let elementToSave = { type: "door", position: currentPosition };
      saveElement(elementToSave);
      setOpenSelection(false);
    } else {
      setOpenSelection(false);
      setError("Debe haber camino en la celda para colocar una puerta;");
      setToast(true);
    }
  };

  const onSelectionKeyFromModal = () => {
    if (isCellWithPathTile(currentPosition)) {
      let elementToSave = { type: "Key", position: currentPosition };
      saveElement(elementToSave);
      setOpenSelection(false);
    } else {
      setOpenSelection(false);
      setError("Debe haber camino en la celda para colocar una llave;");
      setToast(true);
    }
  }

  const handleCloseErrorToast = () => {
    setToast(false);
    setError(null);
  };

  const onChangeLevelName = (name) => {
    setShowJoystick(false);
    setLevelName(name);
  };


  const renderEachStep = (i, data) => {
    console.log(data)
    let { levelState, fullGame } = data;
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
    } else finishLevel(levelState === "Complete");
  };

  const finishLevel = (success) => {
    if (success) {
      postNewLevel(initialLevel).then(() => {
        setSuccessMessage("Nivel guardado exitosamente...")
        setSuccessToast(true);
        setTimeout(() => { history.push("/") }, 3000)
      }).catch((e) => {
        setError("Nombre ya existente, intente con otro")
        setToast(true);
        setTimeout(() => { setToast(false) }, 2500)
      });
    };
  };



  const onClickFinishLevel = () => {
    const newID = `General_${newLevelName}`;
    if (paths.length !== 0 || objects.length !== 0) {
      isLevelExistent(newID).then(response => {
        if (newLevelName === null || response.data) {
          setError("Intente con otro nombre, el indicado no esta disponible")
          setToast(true);
        } else {
          if (newMovementsNumber !== 0 && newMovementsNumber !== null) {
            let newLevel = {
              levelId: newID,
              difficulty: "General",
              description: "Nivel creado por un usuario",
              playerPosition: playerInitialPosition,
              name: newLevelName,
              bestNumberMovesToWin: newMovementsNumber,
              likes: 0,
              dislikes: 0,
              elements: paths.concat(objects),
              scoreFromAndLevel: []
            }
            setInitialLevel(newLevel);
            setLevel(newLevel);
            setShowJoystick(true);
          } else {
            setError("Ingrese una cantidad de movimientos valida")
            setToast(true);
          };
        };
      });
    } else {
      setError("Tablero invalido")
      setToast(true);
    }
  };

  const handleMovementsError = () => {
    setError("Verifique que la cantidad de movimientos sea la indicada previamente");
    setToast(true);
    setTimeout(() => { setToast(false) }, 2500);
  };



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
            {`Cree su propio nivel y resuelvalo`}
            <hr className="divider-diff"></hr>
          </div>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={0}>
        <Grid item xs={6}>
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

        <Grid item xs={6}>
          <Container maxWidth="xl">
            <div className="display-inblock">
              <div className="float">
                <div className="level-name"> Nombre del nivel. </div>
                <InputBase
                  id="inputLevelName"
                  required
                  inputProps={{ "aria-label": "naked" }}
                  value={newLevelName}
                  onChange={(event) => onChangeLevelName(event.target.value)}
                />
              </div>
              <div className="float">
                <div className="level-name"> Cantidad minima de movimientos. </div>
                <InputBase
                  id="inputMovementsNumber"
                  required
                  inputProps={{ "aria-label": "naked" }}
                  value={newMovementsNumber}
                  onChange={(event) => setMovementesNumber(event.target.value)}
                />
              </div>
              <div className="float finished-level" onClick={onClickFinishLevel}> Resolver </div>
            </div>
            {showJoystick &&
              <div className="lm-joystick">
                <Joystick
                  onClickError={handleMovementsError}
                  onClickPlay={
                    (response) => {
                      renderEachStep(0, response.data)
                    }
                  }
                  level={level}
                  noHeader
                />
              </div>
            }
          </Container>
        </Grid>


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

      <Toast
        width="85%"
        content={successMessage}
        open={successToast}
        succes
      />
    </div >
  );
};

export default LevelMaker;
