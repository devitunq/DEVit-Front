import React from "react";
import { Modal, Grid } from "@material-ui/core";
import "../Tutorial/Tutorial.css"
import back from "../../Assets/others/back.png"
import path from "../../Assets/tutorial/pathTutorial.png"
import water from "../../Assets/tutorial/waterTutorial.png"
import player from "../../Assets/tutorial/playerTutorial.png"
import finish from "../../Assets/tutorial/finishTutorial.png"

const TutorialBoard = ({ open, backSelecetion }) => (
  <div>
    <Modal open={open}>
      <div className="tutorial-container">
        <Grid item xs={12}>
          <div className="tutorial-style-cont">
            <Grid container direction="row">

              <Grid item xs={12}>
                <div className="back-modal">
                  <img
                    onClick={backSelecetion}
                    className="back-pic"
                    src={back}
                    alt="back"
                  />
                </div>
              </Grid>

              <hr className="tutorial-style-separator"></hr>

              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <img
                      src={player}
                      alt="player"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <div className="tutorial-style-font-Board">
                      Hay 4 personajes distintos que podras elegir en caso de ser usuario, este personaje
                      es el que se guia con las instrucciones se colocan en el display del joystick.
                    </div>
                  </Grid>
                </Grid>
                <hr className="tutorial-style-separator"></hr>

                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <img
                        src={path}
                        alt="path"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <div className="tutorial-style-font-Board">
                        El pasto indica los lugares por donde nuestro personaje se podra desplazar,
                        para cumplir el objetivo.
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <hr className="tutorial-style-separator"></hr>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <img
                        src={water}
                        alt="water"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <div className="tutorial-style-font-Board">
                        El agua es el camino prohibido, al pisarla, el persona se ahoga y el juego se
                        debe reiniciar.
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <hr className="tutorial-style-separator"></hr>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={4}>
                      <img
                        src={finish}
                        alt="finish"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <div className="tutorial-style-font-Board">
                        Al llegar a esta posicion, el jugador logro el objetivo.
                    </div>
                    </Grid>
                  </Grid>
                </Grid>
                <hr className="tutorial-style-separator"></hr>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    </Modal>
  </div >

);
export default TutorialBoard;