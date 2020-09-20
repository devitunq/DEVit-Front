import React from "react";
import { Grid, Container } from "@material-ui/core";
import "./SuccessLvl.css";

const SuccessLvl = () => (
  <div>
    <Grid container direction="column" spacing={10} justify="center">
      <Grid container item xs={12}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Container maxWidth="xl">
            <div className="success-lvl">
              <a href="/level">
                <img
                  className="success-pic"
                  src="images/success.png"
                  alt="success"
                />
              </a>
              <div className="success-text">
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

export default SuccessLvl;
