import React, { useState, useEffect } from "react";
import { Grid, Switch } from "@material-ui/core";
import update from "immutability-helper";
import "./Joystick.css";
import JositckArrows from "./JoystickArrows";
import JoystickDisplay from "./JoystickDisplay";
import { postLevelSolution, postLevelSolutionUnsaved } from "../../Utils/Api";
import MovableCard from "./MovableCard";
import RemovableCard from "./RemovableCard";
import ConditionsModal from "./ConditionsModal";
import goUp from "../../Assets/displayAcitons/board-up.png";
import left from "../../Assets/displayAcitons/board-left.png";
import goDown from "../../Assets/displayAcitons/board-down.png";
import right from "../../Assets/displayAcitons/board-right.png";
import openDisplay from "../../Assets/displayAcitons/open-door.png";
import collectDisplay from "../../Assets/displayAcitons/collect-key.png";
import isDoor from "../../Assets/displayAcitons/isDoor.png";
import isKey from "../../Assets/displayAcitons/isKey.png";
import joystickHeader from "../../Assets/levelPageItems/joystick.png";
import josPlay from "../../Assets/joystick/joystickIns/jos-play.png";
import josRestart from "../../Assets/joystick/joystickIns/jos-restart.png";
import josif from "../../Assets/joystick/joystickIns/jos-if.png";
import josDelete from "../../Assets/others/delete.png";
import open from "../../Assets/joystick/joystickIns/door.png";
import collect from "../../Assets/joystick/joystickIns/key.png";
import boardone from "../../Assets/joystick/joystickIns/board-one.png";
import boardtwo from "../../Assets/joystick/joystickIns/board-two.png";
import TimesModal from "./TimesModal";


const Joystick = (props) => {
  const [board, setBoard] = useState([]);
  const [functionList, setFunctionList] = useState([]);
  const [boardSecondary, setBoardSecondary] = useState([]);
  const [functionListSecondary, setFunctionListSecondary] = useState([]);
  const [boardInView, setBoardInView] = useState("BoardOne");
  const [actionID, setID] = useState(1);
  const [displayDeleteMode, setDisplayMode] = useState(false);
  const [conditionsModal, setConditionsModal] = useState(false);
  const [timesModal, setTimesModal] = useState(false);
  const [currentTimes, setCurrentTimes] = useState("");
  const [currentKeyAction, setCurrentKeyAction] = useState(null);
  const [currentFunctionNumber, setCurrentFunctionNumber] = useState(0);

  useEffect(() => { }, [])

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = board[dragIndex];
    setBoard(
      update(board, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      })
    );
  };

  const addActionToCurrentBoard = (movement) => {
    if (boardInView === "BoardOne") {
      setBoard([...board, movement]);
    } else {
      setBoardSecondary([...boardSecondary, movement]);
    }
  }

  const onClickUp = () => {
    const aKey = `action_${actionID}`;
    const upAction = {
      actionKey: aKey,
      action: {
        type: "GoUp",
        times: 1
      },
      src: goUp,
      alt: "up",
    };
    addActionToCurrentBoard(upAction);
    setID(actionID + 1);
  };

  const onClickDown = () => {
    const aKey = `action_${actionID}`;
    let downAction = {
      actionKey: aKey,
      action: {
        type: "GoDown",
        times: 1
      },
      src: goDown,
      alt: "down",
    };
    addActionToCurrentBoard(downAction);
    setID(actionID + 1);
  };

  const onClickLeft = () => {
    const aKey = `action_${actionID}`;
    let leftAction = {
      actionKey: aKey,
      action: {
        type: "GoLeft",
        times: 1
      },
      src: left,
      alt: "left",
    };
    addActionToCurrentBoard(leftAction);
    setID(actionID + 1);
  };

  const onClickRight = () => {
    const aKey = `action_${actionID}`;
    let rightAction = {
      actionKey: aKey,
      action: {
        type: "GoRight",
        times: 1
      },
      src: right,
      alt: "right",
    };
    addActionToCurrentBoard(rightAction);
    setID(actionID + 1);
  };

  const onClickCollectKey = () => {
    const aKey = `action_${actionID}`;
    let collectKey = {
      actionKey: aKey,
      action: {
        type: "CollectKey",
        times: 1
      },
      src: collectDisplay,
      alt: "collect",
    };
    addActionToCurrentBoard(collectKey);
    setID(actionID + 1);
  };

  const onClickOpenDoor = () => {
    const aKey = `action_${actionID}`;
    let openDoor = {
      actionKey: aKey,
      action: {
        type: "OpenDoor",
        times: 1
      },
      src: openDisplay,
      alt: "open",
    };
    addActionToCurrentBoard(openDoor);
    setID(actionID + 1);
  };

  const onClickIsDoor = () => {
    const aKey = `action_${actionID}`;
    let openDoor = {
      actionKey: aKey,
      action: {
        type: "DoorCondition",
        times: 1
      },
      src: isDoor,
      alt: "isDoor",
    };
    addActionToCurrentBoard(openDoor);
    setID(actionID + 1);
  };

  const onClickIsKey = () => {
    const aKey = `action_${actionID}`;
    let openDoor = {
      actionKey: aKey,
      action: {
        type: "KeyCondition",
        times: 1
      },
      src: isKey,
      alt: "isKey",
    };
    addActionToCurrentBoard(openDoor);
    setID(actionID + 1);
  };

  const handleCkick = (actionToDelete) => {
    const newBoard = board.filter(
      (action) => action.actionKey !== actionToDelete
    );
    setBoard(newBoard);
  };

  const handleChange = () => {
    displayDeleteMode ? setDisplayMode(false) : setDisplayMode(true);
  };

  const restartBoard = () => {
    setBoard([]);
  };

  const onClickTimes = key => {
    setCurrentKeyAction(key);
    setTimesModal(true);
  };

  const updateBoardTimes = () => {
    boardInView === "BoardOne"
      ? setBoard(board.map(item =>
        item.actionKey === currentKeyAction ? { ...item, action: { ...item.action, times: currentTimes } } : item))
      : setBoard(boardSecondary.map(item =>
        item.actionKey === currentKeyAction ? { ...item, action: { ...item.action, times: currentTimes } } : item));
    setTimesModal(false);
  };

  const isBoardWithProcedures = functionList.length > 0;

  const createFunctionFromMainBoard = () => {
    let newFunction = [];
    if (!isBoardWithProcedures) {
      newFunction.push(
        {
          name: `function_${currentFunctionNumber}`,
          actionList: board.map((item) => item.action)
        }
      );
    };
    return newFunction;
  };

  const functionFromLastProcedureToFinish = () => {
    let reverseBoard = board.reverse();
    let lastProcedure = board.find(f => f.action.type === "BoardOne" || f.action.type === "BoardTwo")
    let indexLastProcedure = board.indexOf(lastProcedure);
    let arrayToLastProcedure = reverseBoard.slice(0, indexLastProcedure);
    return { name: `function_${currentFunctionNumber}`, actionList: arrayToLastProcedure.map((item) => item.action) }
  };


  return (
    <div className="container-drag">
      <div className="center">
        <div className="cont-header">
          {!props.noHeader &&
            <img
              className="joystick-pic"
              src={joystickHeader}
              alt="objetivo"
            />
          }
        </div>
      </div>

      <div className="container-box">
        <div className="board-switch-container">
          <div onClick={() => setBoardInView("BoardOne")} className="board-switch"> Tablero 1 </div>
          <div onClick={() => setBoardInView("BoardTwo")} className="board-switch"> Tablero 2 </div>
        </div>
        <div className="center">

          {boardInView === "BoardOne"
            ?
            <JoystickDisplay>
              {displayDeleteMode
                ? board.map((item) => {
                  return (
                    <RemovableCard
                      key={`removable_key_${item.actionKey}`}
                      aKey={item.actionKey}
                      src={item.src}
                      alt={item.alt}
                      board={board}
                      onClick={handleCkick}
                    />
                  );
                })
                : board.map((item, index) => {
                  return (
                    <MovableCard
                      key={`movable_key_${item.actionKey}`}
                      src={item.src}
                      alt={item.alt}
                      onClickTimes={() => onClickTimes(item.actionKey)}
                      times={item.action.times}
                      moveCard={moveCard}
                      index={index}
                    />
                  );
                })}
            </JoystickDisplay>
            :
            <JoystickDisplay>
              {displayDeleteMode
                ? boardSecondary.map((item) => {
                  return (
                    <RemovableCard
                      key={`removable_key_${item.actionKey}`}
                      aKey={item.actionKey}
                      src={item.src}
                      alt={item.alt}
                      board={board}
                      onClick={handleCkick}
                    />
                  );
                })
                : boardSecondary.map((item, index) => {
                  return (
                    <MovableCard
                      key={`movable_key_${item.actionKey}`}
                      src={item.src}
                      alt={item.alt}
                      times={item.action.times}
                      onClickTimes={() => onClickTimes(item.actionKey)}
                      moveCard={moveCard}
                      index={index}
                    />
                  );
                })}
            </JoystickDisplay>
          }
          <Grid container direction="row">
            <Grid item xs={4}>
              <JositckArrows
                onClickLeft={onClickLeft}
                onClickUp={onClickUp}
                onClickDown={onClickDown}
                onClickRight={onClickRight}
              />
            </Grid>

            <Grid item xs={4}>
              <img
                onClick={() => {
                  props.withSave
                    ? postLevelSolution(
                      props.levelID,
                      createFunctionFromMainBoard()
                    ).then(props.onClickPlay)
                    : postLevelSolutionUnsaved(
                      props.level,
                      createFunctionFromMainBoard()
                    ).then(props.onClickPlay).catch(props.onClickError);
                }
                }
                className="play-b"
                src={josPlay}
                alt="play"
                data-testid="playButton"
              />
              <div></div>
              <img
                onClick={() => restartBoard()}
                className="restart-b"
                src={josRestart}
                alt="restart"
              />
            </Grid>

            <Grid item xs={4}>
              <img onClick={() => setConditionsModal(true)} className="if-b" src={josif} alt="if" />
              <div className="inline-block">
                <img onClick={onClickOpenDoor} className="open" src={open} alt="openDoor" />
                <img onClick={onClickCollectKey} className="collect" src={collect} alt="collectKey" />
              </div>
              <div className="inline-block">
                <img onClick={onClickOpenDoor} className="board1" src={boardone} alt="board1" />
                <img onClick={onClickCollectKey} className="board2" src={boardtwo} alt="board2" />
              </div>
            </Grid>
          </Grid>
        </div>

        <Grid container justify="flex-start" direction="row" spacing={0}>
          <Grid item xs={1}>
            <div className="switch-joys">
              <Switch
                checked={displayDeleteMode}
                onChange={handleChange}
                name="checkedB"
                color="secondary"
              />
            </div>
          </Grid>
          <Grid item xs={1}>
            <img className="delete-pic" src={josDelete} alt="delete" />
          </Grid>
          <Grid item xs={10}></Grid>
        </Grid>
      </div>

      <ConditionsModal
        open={conditionsModal}
        handleClose={() => setConditionsModal(false)}
        onClickIsKey={onClickIsKey}
        onClickIsDoor={onClickIsDoor}
      />
      <TimesModal
        open={timesModal}
        handleClose={() => setTimesModal(false)}
        onChangeTimes={e => setCurrentTimes(e.target.value)}
        times={currentTimes}
        onClickButton={updateBoardTimes}
      />
    </div >
  );
};

export default Joystick;
