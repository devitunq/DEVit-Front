import React from "react";
import { Modal, Grid } from "@material-ui/core";
import "../Tutorial/Tutorial.css"
import controlesTut from "../../Assets/tutorial/controlesTutorial.png";
import tableroTut from "../../Assets/tutorial/tableroTutorial.png";

const TutorialSelection = ({ open, toControlls, toBoard, closeTutorial }) => (
  <div>
    <Modal open={open}>
      <div className="tutorial-container">
        <div className="tutorial-style-cont">
          <Grid container>
            <Grid item xs={12}>
              <div className="close-modal"
                onClick={closeTutorial}
              >
                X
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
      </div>
    </Modal>
  </div>
);
export default TutorialSelection;