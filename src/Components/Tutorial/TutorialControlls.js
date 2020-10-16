import React, { Fragment } from "react";
import { Modal, Grid, Container } from "@material-ui/core";
import "../Tutorial/Tutorial.css"
import controlls from "../../Assets/tutorial/picControllsutorial.png";
import back from "../../Assets/others/back.png"
import TDisplay from "../../Assets/tutorial/displayTuto.png";
import TArrows from "../../Assets/tutorial/FlechasTutorial.png";
import TRestart from "../../Assets/tutorial/reiniciarTutorial.png";
import TStart from "../../Assets/tutorial/iniciarTutorial.png";
import TDeleteMode from "../../Assets/tutorial/modoDeBorradoTutorial.png";

const TutorialControlls = ({
  open,
  backSelecetion,
  toDisplay,
  toStartRestart,
  toDeleteArrows
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

                <Grid item xs={4}>
                  <div className="controller-parts-container">
                    <img
                      className="controller-display-part"
                      onClick={toDisplay}
                      src={TDisplay}
                      alt="display"
                    />
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div className="controller-parts-container">
                    <img
                      onClick={toStartRestart}
                      className="controller-StartRestar-parts"
                      src={TStart}
                      alt="start"
                    />
                    <img
                      onClick={toStartRestart}
                      className="controller-StartRestar-parts"
                      src={TRestart}
                      alt="restart"
                    />
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div className="controller-parts-container">
                    <img
                      onClick={toDeleteArrows}
                      className="controller-deleteArrow-parts"
                      src={TDeleteMode}
                      alt="deleteMode"
                    />
                    <img
                      onClick={toDeleteArrows}
                      className="controller-deleteArrow-parts"
                      src={TArrows}
                      alt="arrows"
                    />
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