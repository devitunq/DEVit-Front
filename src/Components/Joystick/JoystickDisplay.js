import React from "react";
import "./Joystick.css";
import { Grid } from "@material-ui/core";

const JoystickDisplay = ({ displayContent }) => (
  <div>
    <div className="cont-header">
      <img className="board-pic" src={"/images/tablero.png"} alt="objetivo" />
    </div>

    <div className="container-box">
      <Grid container direction="row" spacing={1}>
        {displayContent}
      </Grid>
    </div>
  </div>
);

export default JoystickDisplay;
