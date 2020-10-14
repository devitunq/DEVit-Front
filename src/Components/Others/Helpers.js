import React, { useState } from "react";
import "./Helpers.css";
import { Grid, Container } from "@material-ui/core";
import Tutorial from "../Tutorial/Tutorial";
import objective from "../../Assets/levelPageItems/objetivo.png";
import tutorialPic from "../../Assets/levelPageItems/tutorial.png";

const Helpers = ({ text }) => {

  const [tutorial, setTutorial] = useState(false);

  const closeTutorial = () => {
    setTutorial(false);
  }

  const openTutorial = () => {
    setTutorial(true);
  }

  return (
    <div className="container-helpers" id="objContainer">
      <Grid container spacing={1} justify="center">
        <Grid item xl={6}>
          <Container>
            <div className="helpers">
              <img
                id="objImg"
                className="helpers-pic"
                src={objective}
                alt="objetivo"
              />
            </div>
          </Container>
        </Grid>
        <Grid item xl={6}>
          <Container>
            <div className="helpers">
              <img
                id="objImg"
                className="helpers-pic"
                src={tutorialPic}
                alt="objetivo"
                onClick={openTutorial}
              />
            </div>
          </Container>
        </Grid>
      </Grid>

      <Tutorial
        open={tutorial}
        close={closeTutorial}
      >
      </Tutorial>
    </div >
  );
};

export default Helpers;
