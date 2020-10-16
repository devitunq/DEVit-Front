import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import "./ResultLvl.css";

const ResultLvl = ({ closeModal, imgPath, text, onClickWin, onClickLost }) => (
  <div>
    <Grid container direction="column" spacing={10} justify="center">
      <Grid container item xs={12}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Container maxWidth="xl">
            <div className="success-lvl">
              <img
                id="resImg"
                onClick={closeModal}
                className="result-pic"
                src={imgPath}
                alt="success"
              />
              <div className="success-text" id="resText">
                {text}
              </div>
              <Grid container item xs={12}>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    color="default"
                    size="medium"
                    onClick={onClickLost}>
                    Reintentar
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <a href={onClickWin}>
                    {onClickWin ?
                      <Button
                        variant="outlined"
                        color="primary"
                        size="medium"
                        onClick={() => onClickWin}
                      >
                        Elegir nivel
                  </Button> : ""
                    }
                  </a>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Grid>
  </div >
);

export default ResultLvl;
