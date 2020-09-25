import React from "react";
import { Grid, Container } from "@material-ui/core";
import "./ResultLvl.css";

const ResultLvl = ({ closeModal, imgPath, text }) => (
  <div>
    <Grid container direction="column" spacing={10} justify="center">
      <Grid container item xs={12}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Container maxWidth="xl">
            <div className="success-lvl">
              <img
                onClick={closeModal}
                className="success-pic"
                src={`${imgPath}`}
                alt="success"
              />
              <div className="success-text">
                {text}
              </div>
            </div>
          </Container>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Grid>
  </div>
);

export default ResultLvl;
