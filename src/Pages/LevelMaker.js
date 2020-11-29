import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Generics/Navbar";
import Logo from "../Components/Generics/Logo";
import Gameboard from "../Components/Board/Gameboard";
import CharacterDefault from "../Assets/gameElements/character3.png";
import Toast from "../Components/Generics/Toast";
import Joystick from "../Components/Joystick/Joystick";
import LevelMakerModal from "../Components/LevelMaker/LevelMakerModal";
import { Grid, Container, InputBase, Checkbox } from "@material-ui/core";
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
  const [newMaxBoard1, setNewMaxBoard1] = useState(null);
  const [newMaxBoard2, setNewMaxBoard2] = useState(null);
  const [newIfEnable, setNewIfEnable] = useState(false);
  const [newProcedureEnable, setNewProcedureEnable] = useState(false);
  const [newRepeatEnable, setNewRepeatEnable] = useState(false);
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

  const currentCellWithPathTile = () =>
    paths.find(p =>
      p.position.posX === currentPosition.posX &&
      p.position.posY === currentPosition.posY
    ) !== undefined

  const currentCellWithFinishOrPlayer = () =>
    objects.find(p =>
      p.position.posX === currentPosition.posX &&
      p.position.posY === currentPosition.posY &&
      (p.type === "Player" || p.type === "Finish")
    ) !== undefined

  const onSelectionDeleteFromModal = () => {
    if (currentCellWithPathTile()) {
      deleteElementInCurrentCell();
      setOpenSelection(false);
    }
    else {
      setOpenSelection(false);
      setError("No hay elemento para borrar en la celda seleccionada");
      setToast(true);
    };
  };

  const deleteElementInCurrentCell = () => {
    setPaths(paths.filter(path => path.position.posX !== currentPosition.posX || path.position.posY !== currentPosition.posY));
    deleteObjectInCurrentCell();
  };

  const deleteObjectInCurrentCell = () => {
    let newObjects = objects.filter(obj =>
      obj.position.posX !== currentPosition.posX ||
      obj.position.posY !== currentPosition.posY
    );
    let player = newObjects.find(obj => obj.type === "Player");
    let finish = newObjects.find(obj => obj.type === "Finish");
    if (!player && playersInGame !== 0) setPlayerSelected(playersInGame - 1);
    if (!finish && finishesInGame !== 0) setFinisheSelected(finishesInGame - 1);
    console.log("players: " + playersInGame + "FINISH " + finishesInGame);
    setObjects(newObjects);
  }

  const onSelectionPlayerFromModal = () => {
    if (playersInGame === 0 && currentCellWithPathTile() && !currentCellWithFinishOrPlayer()) {
      let elementToSave = { type: "Player", position: currentPosition, lookingTo: "RIGHT", keys: [] };
      saveElement(elementToSave);
      setPlayerSelected(playersInGame + 1);
      setOpenSelection(false);
      setPlayerInitialPosition(currentPosition);
    } else {
      setOpenSelection(false);
      setError("Verifique que no haya otro personaje en el tablero, que la celda no posea la meta y que haya camino.");
      setToast(true);
    };
  };

  const onSelectionFinishFromModal = () => {
    if (finishesInGame === 0 && currentCellWithPathTile() && !currentCellWithFinishOrPlayer()) {
      let elementToSave = { type: "Finish", position: currentPosition };
      saveElement(elementToSave);
      setFinisheSelected(finishesInGame + 1);
      setOpenSelection(false);
    } else {
      setOpenSelection(false);
      setError("Verifique que no haya otra meta en el tablero, que la celda no posea al jugador y que haya camino.");
      setToast(true);
    }
  }

  const onSelectionPathFromModal = () => {
    if (!currentCellWithPathTile()) {
      let elementToSave = { type: "PathTile", position: currentPosition };
      saveElement(elementToSave);
      setOpenSelection(false);
    };
  };

  const onSelectionDoorFromModal = () => {
    if (currentCellWithPathTile()) {
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
    if (currentCellWithPathTile()) {
      let elementToSave = { type: "Key", position: currentPosition };
      saveElement(elementToSave);
      setOpenSelection(false);
    } else {
      setOpenSelection(false);
      setError("Debe haber camino en la celda para colocar una llave;");
      setToast(true);
    }
  };

  const onSelectionConcealFromModal = () => {
    if (currentCellWithPathTile()) {
      let elementToSave = { type: "Conceal", position: currentPosition };
      saveElement(elementToSave);
      setOpenSelection(false);
    } else {
      setOpenSelection(false);
      setError("Debe haber camino en la celda para colocar tierra;");
      setToast(true);
    }
  };

  const handleCloseErrorToast = () => {
    setToast(false);
    setError(null);
  };

  const onChangeLevelName = (name) => {
    setShowJoystick(false);
    setLevelName(name);
  };


  const renderEachStep = (i, data) => {
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
    if (paths.length !== 0 && playersInGame === 1 && finishesInGame === 1) {
      isLevelExistent(newID).then(response => {
        if (newLevelName === null || response.data) {
          setError("Intente con otro nombre, el indicado no esta disponible")
          setToast(true);
        } else {
          if (newMovementsNumber && newMovementsNumber > 0) {
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
            setError("Ingrese una cantidad de movimientos válida")
            setToast(true);
          };
        };
      });
    } else {
      setError("Tablero incompleto, verifique que el nivel posee una meta y un personaje.")
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
      <ParticlesBg className="bubbles" type="circle" bg={true} />

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

      <div className="inputs-lm-container">
        <div className="inputs-lm-header"> Nombre del nivel. </div>
        <InputBase
          id="inputLevelName"
          required
          style={{
            width: "400px"
          }}
          inputProps={{ "aria-label": "naked" }}
          value={newLevelName}
          onChange={(event) => onChangeLevelName(event.target.value)}
        />
        <div className="inputs-lm-header"> Cantidad minima de movimientos. </div>
        <InputBase
          id="inputMovementsNumber"
          required
          style={{
            width: "400px"
          }}
          inputProps={{ "aria-label": "naked" }}
          value={newMovementsNumber}
          onChange={(event) => setMovementesNumber(event.target.value)}
        />
        <div className="inputs-lm-header"> Cantidad maxima movimientos tablero 1. </div>
        <InputBase
          id="maxBoard1"
          required
          style={{
            width: "400px"
          }}
          inputProps={{ "aria-label": "naked" }}
          value={newMaxBoard1}
          onChange={(event) => setNewMaxBoard1(event.target.value)}
        />
        <div className="inputs-lm-header"> Cantidad maxima movimientos tablero 2. </div>
        <InputBase
          id="maxBoard2"
          required
          style={{
            width: "400px"
          }}
          inputProps={{ "aria-label": "naked" }}
          value={newMaxBoard2}
          onChange={(event) => setNewMaxBoard2(event.target.value)}
        />
        <div>
          <p className="checkboxLabel"> Habilitar el if en tablero </p>
          <input
            className="checkbox"
            type="checkbox"
            id="ifEnable"
            name="ifEnable"
            value={newIfEnable}
            onClick={() => setNewIfEnable(!newIfEnable)}
          />
        </div>
        <div>
          <p className="checkboxLabel"> Habilitar el procedure en tablero </p>
          <input
            className="checkbox"
            type="checkbox"
            id="procedureEnable"
            name="procedureEnable"
            value={newProcedureEnable}
            onClick={() => setNewProcedureEnable(!newProcedureEnable)}
          />
        </div>
        <div>
          <p className="checkboxLabel"> Habilitar el repeat en tablero </p>
          <input
            className="checkbox"
            type="checkbox"
            id="repeatEnable"
            name="repeatEnable"
            value={newRepeatEnable}
            onClick={() => setNewRepeatEnable(!newRepeatEnable)}
          />
        </div>
      </div>

      <Gameboard
        savePosition={savePosition}
        clickeable
        character={defaultPlayer}
        grid={grid}
        paths={paths}
        objects={objects}
      />


      <div className="finished-level" onClick={onClickFinishLevel}> Resolver </div>

      {showJoystick &&
        <div className="lm-joystick">
          <Joystick
            restrictions={{
              ifEnabled: newIfEnable,
              repeatEnabled: newRepeatEnable,
              callProceduresEnabled: newProcedureEnable,
              maxMovsBoard1: newMaxBoard1 || 99999,
              maxMovsBoard2: newMaxBoard2 || 99999
            }}
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

      <LevelMakerModal
        open={openSelection}
        handleClose={() => setOpenSelection(false)}
        onClickPlayer={onSelectionPlayerFromModal}
        onClickFinish={onSelectionFinishFromModal}
        onClickPath={onSelectionPathFromModal}
        onClickDoor={onSelectionDoorFromModal}
        onClickKey={onSelectionKeyFromModal}
        onClickConceal={onSelectionConcealFromModal}
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
