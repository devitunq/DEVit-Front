import React from "react";
import "./Jostick.css";
import { Grid } from "@material-ui/core";

const JostickDisplay = ({ displayContent }) => {

  return (
    <div>
      <div className="cont-header" >
        <img
          className="board-pic"
          src={"/images/tablero.png"}
          alt="objetivo"
        />
      </div >

      <div className="container-box">
        <Grid container direction="row" spacing={1}>
          {displayContent}
        </Grid>
      </div>
    </div >
  )
}

export default JostickDisplay;



