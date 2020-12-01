import React from "react";
import { Modal, Grid } from "@material-ui/core";
import "../Tutorial/Tutorial.css"
import controlls from "../../Assets/tutorial/picControllsutorial.png";
import back from "../../Assets/others/back.png"

const TutorialControlls = ({
  open,
  backSelecetion,
  toDisplay,
  toStartRestart,
  toDeleteArrows,
  toCondProceRepet
}) => (
    <div>
      <Modal open={open}>
        <div className="tutorial-container">
          <Grid item xs={12}>
            <div className="tutorial-style-cont">
              <div className="back-modal">
                <img
                  onClick={backSelecetion}
                  className="back-pic"
                  src={back}
                  alt="back"
                />
              </div>
              <img
                className="tut-picIntro"
                src={controlls}
                alt="controles"
              />
              <Grid container direction="row">

                <Grid item xs={3}>
                  <div onClick={toDisplay} className="controller-parts-container">
                    <p className="controlls-text">Display</p>
                    <p className="controlls-text">Tablero</p>
                  </div>
                </Grid>

                <Grid onClick={toStartRestart} item xs={3}>
                  <div className="controller-parts-container">
                    <p className="controlls-text">Iniciar</p>
                    <p className="controlls-text">Reiniciar</p>
                  </div>
                </Grid>

                <Grid item xs={3}>
                  <div onClick={toDeleteArrows} className="controller-parts-container">
                    <p className="controlls-text">Modo borrador</p>
                    <p className="controlls-text">Flechas de movimiento</p>
                  </div>
                </Grid>

                <Grid item xs={3}>
                  <div onClick={toCondProceRepet} className="controller-parts-container">
                    <p className="controlls-text">Condiciones</p>
                    <p className="controlls-text">Repeticiones</p>
                    <p className="controlls-text">Procedimientos</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
      </Modal>
    </div >

  );
export default TutorialControlls;