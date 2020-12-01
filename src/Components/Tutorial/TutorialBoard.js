import React from "react";
import { Modal, Grid } from "@material-ui/core";
import { elementsDescriptionList } from "../../Utils/CellsDescriptions";
import back from "../../Assets/others/back.png"
import "../Tutorial/Tutorial.css"

const TutorialBoard = ({ open, backSelecetion }) => (
  <div>
    <Modal open={open}>
      <div className="tutorial-container">
        <div className="tutorial-board-cont">
          <img
            src={back}
            alt="back"
            className="back-modal"
            onClick={backSelecetion}
          />
          <Grid container direction="column">
            {elementsDescriptionList.map(element =>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={2}>
                    {element.img}
                  </Grid>
                  <Grid item xs={8}>
                    <div className="tutorial-style-font-Board">
                      {element.description}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>

        </div>
      </div>
    </Modal>
  </div >

);
export default TutorialBoard;