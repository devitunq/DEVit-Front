import React from "react";
import { Modal, Grid } from "@material-ui/core";
import "../Tutorial/Tutorial.css"
import deleteSwitchTutorial from "../../Assets/tutorial/deleteSwitchTutorial.png";
import arrowsTutorial from "../../Assets/tutorial/arrowsTutorial.png";
import back from "../../Assets/others/back.png"

const TutorialDelSwitchAndArrows = ({ open, backControlls }) => (
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
                src={arrowsTutorial}
                alt="arrpws"
              />
              <hr className="tutorial-style-separator"></hr>
              <div className="tutorial-style-font">
                Este es el esquema clasico de flechas de cualquier juego, en donde deberas
                seleccionar el movimiento que deseas que haga tu personaje al iniciar el
                tablero.
              </div>
              <hr className="tutorial-style-separator"></hr>
              <img
                src={deleteSwitchTutorial}
                alt="delete"
              />
              <hr className="tutorial-style-separator"></hr>
              <div className="tutorial-style-font">
                Con esete switch tenemos dos modos posibles, por default esta en modo "cambio
                de posiciones", con el cual podras cambiar el orden de tus instrucciones en
                el display del jostick; y si lo switcheamos, al seleccionar alguna instruccion
                esta se borrara del tablero
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Modal>
  </div>
);
export default TutorialDelSwitchAndArrows;