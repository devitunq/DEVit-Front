import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import "./ResultLvl.css";
import OneStar from "../../Assets/stars/onestarwon.gif";
import TwoStar from "../../Assets/stars/twostarwon.gif";
import ThreeStar from "../../Assets/stars/threestarwon.gif";

const ResultLvl = ({ closeModal, imgPath, text, onClickWin, onClickLost, stars }) => {

  const determinateStars = (stars) => {
    switch (stars) {
      case 1:
        return OneStar;
      case 2:
        return TwoStar;
      default:
        return ThreeStar;
    };
  };

  return (
    <div>
      <Grid container direction="column" spacing={10} justify="center">
        <Grid container item xs={12}>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={4}>
            <Container maxWidth="xl">
              <div className="success-lvl">
                <img
                  id="resImg"
                  onClick={closeModal}
                  className="result-pic"
                  src={imgPath}
                />
                {!imgPath &&
                  <img className="stars" src={determinateStars(stars)} />
                }
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
  )
};

export default ResultLvl;
