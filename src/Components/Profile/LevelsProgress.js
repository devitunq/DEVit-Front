import React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import "./LevelsProgress.css";

const LevelProgress = ({ value, progressBarTitle }) => (
  <Grid item xs={12}>
    <div className="levelProgress-label">{progressBarTitle}</div>
    <div className="levelProgress-infoContainer">
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <div className="levelProgress-bar">
            <LinearProgress
              variant="determinate"
              value={value}
              style={{
                height: "13px",
                borderRadius: "10px",
                border: "solid black 0.5px",
                marginLeft: "1%",
                marginTop: "8px",
                width: "70%",
                display: "inline-block",
                float: "left"
              }}
            />
            <div className="levelProgress-MinMax">{value}%</div>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  </Grid >
);

export default LevelProgress;