import React from "react";
import { Grid } from "@material-ui/core";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./Joystick.css";

const JoystickDisplay = (props) => (
  <div>
    <div className="cont-header">
      <img className="board-pic" src={"/images/tablero.png"} alt="objetivo" />
    </div>

    {props.modeSelecion}

    <div className="container-box">
      <DndProvider backend={HTML5Backend}>
        <Grid container direction="row" spacing={1} id="jdContainer">
          {props.children}
        </Grid>
      </DndProvider>
    </div>
  </div>
);

export default JoystickDisplay;
