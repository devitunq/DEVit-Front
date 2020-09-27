import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import update from "immutability-helper";
import "./Joystick.css";
import JositckArrows from "./JoystickArrows";
import JoystickDisplay from "./JoystickDisplay";
import { postLevelSolution } from "../../Services/LevelService";
import ActionCard from "./ActionCard";

const Joystick = ({ onClickPlay }) => {
  const [board, setBoard] = useState([]);
  const [actionID, setID] = useState(1);

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

  const deleteAction = (actKey) => {
    /* HACER */
  };

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
        {board.map((item, index) => {
          return (
            <ActionCard
              key={`key_${item.actionKey}`}
              src={item.src}
              alt={item.alt}
              moveCard={moveCard}
              index={index}
            />
          );
        })}
      </JoystickDisplay>
    </div>
  );
};

export default Joystick;
