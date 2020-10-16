import React, { Fragment, useState, useEffect } from "react";
import { Modal, Grid, Container } from "@material-ui/core";
import "../Tutorial/Tutorial.css"
import back from "../../Assets/others/back.png"
import controlesTut from "../../Assets/tutorial/controlesTutorial.png";
import tableroTut from "../../Assets/tutorial/tableroTutorial.png";

const TutorialSelection = ({ open, toControlls, toBoard, closeTutorial }) => (
  <div>
    <Modal open={open}>
      <div className="tutorial-container">
        <Grid container>
          <Grid item xs={12}>
            <div className="back-modal">
              <img
                onClick={closeTutorial}
                className="back-pic"
                src={back}
                alt="back"
              />
            </div>
            <div
              className="tutorial-cont-controls"
              onClick={toControlls}
            >
              <img
                className="tut-picIntro"
                src={controlesTut}
                alt="controles"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div
              className="tutorial-cont-board"
              onClick={toBoard}
            >
              <img
                className="tut-picIntro"
                src={tableroTut}
                alt="board"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </Modal>
  </div>
);
export default TutorialSelection;