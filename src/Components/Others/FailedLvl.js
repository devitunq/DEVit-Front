import React from "react";
import { Grid, Container } from "@material-ui/core";
import "./FailedLvl.css"

const FailedLvl = () => {
  return (
    <div>
      <Grid container direction="column" spacing={10} justify="center">
        <Grid container item xs={12}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Container maxWidth="xl">
              <div className="failed-lvl">
                <a href="/level">
                  <img
                    className="failed-pic"
                    src="images/failed.png"
                    alt="failed"
                  />
                </a>
                <div className="succes-text">
                  Has fallado! Intentalo de nuevo.
                </div>
              </div>
            </Container>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FailedLvl;
