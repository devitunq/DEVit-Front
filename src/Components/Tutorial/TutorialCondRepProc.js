import React from "react";
import { Modal, Grid } from "@material-ui/core";
import "../Tutorial/Tutorial.css"
import iftutorial from "../../Assets/tutorial/iftutorial.png";
import doorkeytutorial from "../../Assets/tutorial/doorkeytutorial.png";
import procedurestutorial from "../../Assets/tutorial/procedurestutorial.png";
import back from "../../Assets/others/back.png"

const TutorialCondRepProc = ({ open, backControlls }) => (
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
                src={iftutorial}
                alt="if"
              />
              <hr className="tutorial-style-separator"></hr>
              <div className="tutorial-style-font">
                Al hacer click en el boton if, se abrira un cuadro, en donde deberas elegir que
                condicion aplicar a la celda del tablero.
              </div>
              <hr className="tutorial-style-separator"></hr>
              <img
                src={doorkeytutorial}
                alt="doorkeys"
              />
              <hr className="tutorial-style-separator"></hr>
              <div className="tutorial-style-font">
                Dentro del josytick encontraremos, dos acciones, una es una puerta, que representa
                la accion de abrir, y la otra es una llave que representa la accion de recollectar.
              </div>
              <hr className="tutorial-style-separator"></hr>
              <img
                src={procedurestutorial}
                alt="procedures"
              />
              <hr className="tutorial-style-separator"></hr>
              <div className="tutorial-style-font">
                Dentro del display tendremos las instrucciones, y al lado un indicador de las veces,
                la cual esa accion se repetira, al hacer click se abrira un recuadro con una entrada
                de texto en el cual deberemos poner las veces que necesitemos que dicha accion se repita.
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Modal>
  </div>
);
export default TutorialCondRepProc;