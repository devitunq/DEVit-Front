import React from "react";
import { Grid } from "@material-ui/core";
import "./Joystick.css";
import joysleft from "../../Assets/joystick/joystickArrows/jos-left.png";
import joysUp from "../../Assets/joystick/joystickArrows/jos-up.png";
import joysDown from "../../Assets/joystick/joystickArrows/jos-down.png";
import joysRight from "../../Assets/joystick/joystickArrows/jos-right.png";

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
            src={joysleft}
            alt="left"
          />
        </Grid>

        <Grid item xs={4}>
          <img
            id="upArrow"
            className="arrow-up"
            onClick={onClickUp}
            src={joysUp}
            alt="up"
          />
          <img
            id="downArrow"
            className="arrow-down"
            onClick={onClickDown}
            src={joysDown}
            alt="down"
          />
        </Grid>

        <Grid item xs={4}>
          <img
            id="rightArrow"
            className="arrow-right"
            onClick={onClickRight}
            src={joysRight}
            alt="right"
          />
        </Grid>
      </Grid>
    </div>
  );

export default JoystickArrows;
