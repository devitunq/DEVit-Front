import React, { useState } from "react";
import "./Helpers.css";
import { Grid, Container } from "@material-ui/core";
import TutorialController from "../Tutorial/TutorialController";
import objectivepic from "../../Assets/levelPageItems/objetivo.png";
import tutorialPic from "../../Assets/levelPageItems/tutorial.png";
import ModalObjective from "../Tutorial/ObjetiveModal"

const Helpers = ({ text }) => {

  const [tutorial, setTutorial] = useState(false);
  const [objective, setObjective] = useState(false);

  const closeTutorial = () => {
    setTutorial(false);
  }
  const openTutorial = () => {
    setTutorial(true);
  }
  const closeObjective = () => {
    setObjective(false);
  }
  const openObjective = () => {
    setObjective(true);
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
                onClick={openObjective}
                src={objectivepic}
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

      <TutorialController
        open={tutorial}
        closeTutorial={closeTutorial}
      />

      <ModalObjective
        textObjective={text}
        open={objective}
        close={closeObjective}
      />

    </div >
  );
};

export default Helpers;
