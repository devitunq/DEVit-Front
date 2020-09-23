import React, { useState, useEffect } from "react";
import "./Drop&Drag.css";
import { Container, Grid } from "@material-ui/core";
import "../Others/Jostick.css"
import BoardButton from "../Generics/BoardButton"

const Jositck = () => {

  const [board, setBoard] = useState([])

  const onClickUp = () => {
    setBoard([...board,
    <Grid item xs={2}>
      <img
        className="board-inst"
        src={"/images/board-up.png"}
        alt="up"
      />
    </Grid>]);
  }

  const onClickDown = () => {
    setBoard([...board,
    <Grid item xs={2}>
      <img
        className="board-inst"
        src={"/images/board-down.png"}
        alt="down"
      />
    </Grid>]);
  }

  const onClickLeft = () => {
    setBoard([...board,
    <Grid item xs={2}>
      <img
        className="board-inst"
        src={"/images/board-left.png"}
        alt="left"
      />
    </Grid>]);
  }

  const onClickRight = () => {
    setBoard([...board,
    <Grid item xs={2}>
      <img
        className="board-inst"
        src={"/images/board-right.png"}
        alt="right"
      />
    </Grid>]);
  }

  return (
    <div className="container-drag">

      <div className="cont-header">
        <img
          className="instructions-pic"
          src={"/images/instrucciones.png"}
          alt="objetivo"
        />
      </div>

      <div className="container-box">
        <Grid container direction="row" xs={12} >
          <Grid item xs={4}>
            <Grid container direction="row" xs={12}>

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
              className="play-b"
              src={"/images/jos-play.png"}
              alt="play"
            />
            <div></div>
            <img
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
        <Grid container direction="row" xs={12} spacing={1}>
          {board}
        </Grid>
      </div>
    </div >
  );
}

export default Jositck;
