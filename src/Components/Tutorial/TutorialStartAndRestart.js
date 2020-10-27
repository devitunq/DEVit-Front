import React from "react";
import { Modal, Grid } from "@material-ui/core";
import "../Tutorial/Tutorial.css"
import playTutorial from "../../Assets/tutorial/playTutorial.png";
import restartTutotrial from "../../Assets/tutorial/restartTutotrial.png";
import back from "../../Assets/others/back.png"

const TutorialStartAndRestart = ({ open, backControlls }) => (
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
                src={playTutorial}
                alt="play"
              />
              <hr className="tutorial-style-separator"></hr>
              <div className="tutorial-style-font">
                Al seleccionar el boton play, le estarias indicando al juego que puede
                ejecutar las instrucciones que aparecen en el display del joystick, una vez
                seleccionado este boton, tu personaje comenzara a moverse.
              </div>
              <hr className="tutorial-style-separator"></hr>
              <img
                src={restartTutotrial}
                alt="restart"
              />
              <hr className="tutorial-style-separator"></hr>
              <div className="tutorial-style-font">
                Al seleccionar el boton restart, todas las instrucciones que tenian en el display
                se borraran, y no podras recuperarlas.
              </div>
              <hr className="tutorial-style-separator"></hr>
            </div>
          </Grid>
        </Grid>
      </div>
    </Modal>
  </div>
);
export default TutorialStartAndRestart;