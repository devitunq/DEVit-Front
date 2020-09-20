import React from "react";
import { Grid, Container } from "@material-ui/core";
import "./SuccesLvl.css"

const SuccesLvl = () => {
  return (
    <div>
      <Grid container direction="column" spacing={10} justify="center">
        <Grid container item xs={12}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Container maxWidth="xl">
              <div className="succes-lvl">
                <a href="/level">
                  <img
                    className="succes-pic"
                    src="images/succes.png"
                    alt="succes"
                  />
                </a>
                <div className="succes-text">
                  Bien hecho! Sigue asi camarada.
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

export default SuccesLvl;
