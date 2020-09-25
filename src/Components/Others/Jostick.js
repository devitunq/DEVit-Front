import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "../Others/Jostick.css"
import { postLevelSolution } from "../../Services/LevelService";


const Jositck = ({ onClickPlay }) => {

  const [board, setBoard] = useState([]);
  const [actionID, setID] = useState(1);

  const onClickUp = () => {
    const aKey = `action_${actionID}`;
    const upAction =
    {
      actionKey: `action_${actionID}`,
      action: "GoUp",
      value:
        <Grid item xs={2}>
          <img
            onClick={() => deleteAction(aKey)}
            className="board-inst"
            src={"/images/board-up.png"}
            alt="up"
          />
        </Grid>
    }
    setBoard([...board, upAction]);
    setID(actionID + 1);
  }

  const onClickDown = () => {
    const aKey = `action_${actionID}`;
    let downAction =
    {
      actionKey: aKey,
      action: "GoDown",
      value:
        <Grid item xs={2}>
          <img
            className="board-inst"
            src={"/images/board-down.png"}
            alt="down"
          />
        </Grid>
    }
    setBoard([...board, downAction]);
    setID(actionID + 1);
  }

  const onClickLeft = () => {
    const aKey = `action_${actionID}`;
    let leftAction =
    {
      actionKey: aKey,
      action: "GoLeft",
      value:
        <Grid item xs={2}>
          <img
            className="board-inst"
            src={"/images/board-left.png"}
            alt="left"
          />
        </Grid>
    }
    setBoard([...board, leftAction])
    setID(actionID + 1);
  }

  const onClickRight = () => {
    const aKey = `action_${actionID}`;
    let rightAction =
    {
      actionKey: aKey,
      action: "GoRight",
      value:
        <Grid item xs={2}>
          <img
            className="board-inst"
            src={"/images/board-right.png"}
            alt="right"
          />
        </Grid>
    }
    setBoard([...board, rightAction]);
    setID(actionID + 1);
  }

  const deleteAction = (actKey) => {/* HACER */ }

  const restartBoard = () => {
    setBoard([])
  }



  return (
    <div className="container-drag">

      <div className="cont-header">
        <img
          className="jostick-pic"
          src={"/images/jostick.png"}
          alt="objetivo"
        />
      </div>

      <div className="container-box">
        <Grid container direction="row">
          <Grid item xs={4}>
            <Grid container direction="row">

              <Grid item xs={4}>
                <img
                  className="arrow-left"
                  onClick={onClickLeft}
                  src={"/images/jos-left.png"}
                  alt="left"
                />
              </Grid>

              <Grid item xs={4}>
                <img
                  className="arrow-up"
                  onClick={onClickUp}
                  src={"/images/jos-up.png"}
                  alt="up"
                />
                <img
                  className="arrow-down"
                  onClick={onClickDown}
                  src={"/images/jos-down.png"}
                  alt="down"
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  className="arrow-right"
                  onClick={onClickRight}
                  src={"/images/jos-right.png"}
                  alt="right"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <img
              onClick={() => {
                postLevelSolution("Easy_Level One", board.map(item => item.action))
                  .then(onClickPlay);
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
            <img
              className="if-b"
              src={"/images/jos-if.png"}
              alt="if"
            />
          </Grid>
        </Grid>
      </div >

      <div className="cont-header">
        <img
          className="board-pic"
          src={"/images/tablero.png"}
          alt="objetivo"
        />
      </div>

      <div className="container-box">
        <Grid container direction="row" spacing={1}>
          {board.map(item => { return item.value })}
        </Grid>
      </div>
    </div >
  );
}

export default Jositck;
