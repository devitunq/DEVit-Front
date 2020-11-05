import React, { useState } from "react";
import { Grid, Switch } from "@material-ui/core";
import update from "immutability-helper";
import "./Joystick.css";
import JositckArrows from "./JoystickArrows";
import JoystickDisplay from "./JoystickDisplay";
import { postLevelSolution } from "../../Utils/Api";
import MovableCard from "./MovableCard";
import RemovableCard from "./RemovableCard";
import goUp from "../../Assets/displayAcitons/board-up.png";
import left from "../../Assets/displayAcitons/board-left.png";
import goDown from "../../Assets/displayAcitons/board-down.png";
import right from "../../Assets/displayAcitons/board-right.png";
import joystickHeader from "../../Assets/levelPageItems/joystick.png";
import josPlay from "../../Assets/joystick/joystickIns/jos-play.png";
import josRestart from "../../Assets/joystick/joystickIns/jos-restart.png";
import josif from "../../Assets/joystick/joystickIns/jos-if.png";
import josDelete from "../../Assets/others/delete.png";

const Joystick = (props) => {
  const [board, setBoard] = useState([]);
  const [actionID, setID] = useState(1);
  const [displayDeleteMode, setDisplayMode] = useState(false);

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

  const onClickUp = () => {
    const aKey = `action_${actionID}`;
    const upAction = {
      actionKey: aKey,
      action: "GoUp",
      src: goUp,
      alt: "up",
    };
    setBoard([...board, upAction]);
    setID(actionID + 1);
  };

  const onClickDown = () => {
    const aKey = `action_${actionID}`;
    let downAction = {
      actionKey: aKey,
      action: "GoDown",
      src: goDown,
      alt: "down",
    };
    setBoard([...board, downAction]);
    setID(actionID + 1);
  };

  const onClickLeft = () => {
    const aKey = `action_${actionID}`;
    let leftAction = {
      actionKey: aKey,
      action: "GoLeft",
      src: left,
      alt: "left",
    };
    setBoard([...board, leftAction]);
    setID(actionID + 1);
  };

  const onClickRight = () => {
    const aKey = `action_${actionID}`;
    let rightAction = {
      actionKey: aKey,
      action: "GoRight",
      src: right,
      alt: "right",
    };
    setBoard([...board, rightAction]);
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

  return (
    <div className="container-drag">
      <div className="cont-header">
        <img
          className="joystick-pic"
          src={joystickHeader}
          alt="objetivo"
        />
      </div>

      <div className="container-box">
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
                  moveCard={moveCard}
                  index={index}
                />
              );
            })}
        </JoystickDisplay>


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
                postLevelSolution(
                  props.levelID,
                  [ { name: "f1", actionList: board.map((item) => item.action) } ]
                ).then(props.onClickPlay);
              }}
              className="play-b"
              src={josPlay}
              alt="play"
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
            <img className="if-b" src={josif} alt="if" />
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
  );
};

export default Joystick;
