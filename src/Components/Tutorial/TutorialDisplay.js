import React from "react";
import { Modal, Grid } from "@material-ui/core";
import "../Tutorial/Tutorial.css"
import displayTut from "../../Assets/tutorial/displayTutorial.png";
import back from "../../Assets/others/back.png"

const TutorialDisplay = ({ open, backControlls }) => (
  <div>
    <Modal open={open}>
      <div className="tutorial-container">
        <Grid container>
          <Grid item xs={12}>
            <div className="back-modal">
              <img
                onClick={backControlls}
                className="back-pic"
                src={back}
                alt="back"
              />
            </div>
            <div className="tutorial-style-cont">
              <img
                className="tut-picIntro"
                src={displayTut}
                alt="display"
              />
              <hr className="tutorial-style-separator"></hr>
              <div className="tutorial-style-font">
                En el display de nuestro juego, se podran ir visualizando las instrucciones que
                vamos seleccionando desde el joystick, el mismo tendra un limite dependiendo
                del nivel en el que estamos.
              </div>
              <hr className="tutorial-style-separator"></hr>
            </div>
          </Grid>
        </Grid>
      </div>
    </Modal>
  </div>
);
export default TutorialDisplay;