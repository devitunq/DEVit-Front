import React from "react";
import { Grid } from "@material-ui/core";
import "./Joystick.css";

const JoystickArrows = ({
  onClickLeft,
  onClickUp,
  onClickDown,
  onClickRight,
}) => (
  <div>
    <Grid container direction="row">
      <Grid item xs={4}>
        <img
          id="leftArrow"
          className="arrow-left"
          onClick={onClickLeft}
          src={"/images/jos-left.png"}
          alt="left"
        />
      </Grid>

      <Grid item xs={4}>
        <img
          id="upArrow"
          className="arrow-up"
          onClick={onClickUp}
          src={"/images/jos-up.png"}
          alt="up"
        />
        <img
          id="downArrow"
          className="arrow-down"
          onClick={onClickDown}
          src={"/images/jos-down.png"}
          alt="down"
        />
      </Grid>

      <Grid item xs={4}>
        <img
          id="rightArrow"
          className="arrow-right"
          onClick={onClickRight}
          src={"/images/jos-right.png"}
          alt="right"
        />
      </Grid>
    </Grid>
  </div>
);

export default JoystickArrows;
