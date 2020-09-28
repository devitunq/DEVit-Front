import React, { useState } from "react";
import { Grid, Switch, FormControlLabel } from "@material-ui/core";
import update from "immutability-helper";
import "./Joystick.css";
import JositckArrows from "./JoystickArrows";
import JoystickDisplay from "./JoystickDisplay";
import { postLevelSolution } from "../../Services/LevelService";
import MovableCard from "./MovableCard";
import RemovableCard from "./RemovableCard";

const Joystick = ({ onClickPlay }) => {
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
      src: "/images/board-up.png",
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
      src: "/images/board-down.png",
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
      src: "/images/board-left.png",
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
      src: "/images/board-right.png",
      alt: "right",
    };
    setBoard([...board, rightAction]);
    setID(actionID + 1);
  };

  const handleCkick = (actionToDelete) => {
    const newBoard = board.filter(action => action.actionKey !== actionToDelete);
    setBoard(newBoard);
  };

  const handleChange = () => {
    displayDeleteMode ? setDisplayMode(false) : setDisplayMode(true)
  }

  const restartBoard = () => {
    setBoard([]);
  };

  return (
    <div className="container-drag">
      <div className="cont-header">
        <img
          className="joystick-pic"
          src={"/images/jostick.png"}
          alt="objetivo"
        />
      </div>

      <div className="container-box">
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
                  "Easy_Level One",
                  board.map((item) => item.action)
                ).then(onClickPlay);
              }}
              className="play-b"
              src={"/images/jos-play.png"}
              alt="play"
            />
            <div></div>
            <img
              onClick={() => restartBoard()}
              className="restart-b"
              src={"/images/jos-restart.png"}
              alt="restart"
            />
          </Grid>

          <Grid item xs={4}>
            <img className="if-b" src={"/images/jos-if.png"} alt="if" />
          </Grid>
        </Grid>
      </div>

      <JoystickDisplay>
        {
          displayDeleteMode
            ?
            board.map((item) => {
              return (
                <RemovableCard
                  aKey={item.actionKey}
                  src={item.src}
                  alt={item.alt}
                  board={board}
                  onClick={handleCkick}
                />
              );
            })
            :
            board.map((item, index) => {
              return (
                <MovableCard
                  key={`key_${item.actionKey}`}
                  src={item.src}
                  alt={item.alt}
                  moveCard={moveCard}
                  index={index}
                />
              );
            })}
      </JoystickDisplay>

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
          <img className="delete-pic" src={"/images/delete.png"} alt="delete" />
        </Grid>
        <Grid item xs={10}></Grid>
      </Grid>

    </div>
  );
};

export default Joystick;
