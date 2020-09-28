import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

const RemovableCard = (props) => {

  const removeThisFromBoard = () => {
    props.onClick(props.aKey);
  }

  return (
    <Grid item xs={2}>
      <div>
        <img
          className="board-inst"
          src={props.src}
          alt={props.alt}
          onClick={removeThisFromBoard}
        />
      </div>
    </Grid>
  );
};

export default RemovableCard;
