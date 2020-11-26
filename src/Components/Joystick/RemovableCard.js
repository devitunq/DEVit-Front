import React from "react";
import { Grid } from "@material-ui/core";
import ActionAndTimes from "./ActionAndTimes"

const RemovableCard = (props) => {
  const removeThisFromBoard = () => {
    props.onClick(props.aKey);
  };

  return (
    <Grid item xs={2}>
      <ActionAndTimes
        src={props.src}
        alt={props.alt}
        onClick={removeThisFromBoard}
      />
    </Grid>
  );
};

export default RemovableCard;
