import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./Jostick.css"

const JostickArrows = ({ onClickLeft, onClickUp, onClickDown, onClickRight }) => {

  return (
    <div>
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
    </div>
  )
}

export default JostickArrows;