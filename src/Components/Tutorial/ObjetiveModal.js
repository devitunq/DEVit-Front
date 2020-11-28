import React from "react";
import { Modal, Grid } from "@material-ui/core";
import Finish from "../../Assets/Modals/finish.png";
import "../Tutorial/Tutorial.css"

const ModalObjective = ({ open, close, textObjective }) => (
  <div>
    <Modal open={open}>
      <div className="tutorial-container">
        <Grid container>
          <Grid item xs={12}>
            <div className="obj-style-cont" >
              <div className="close-modal-obj"
                onClick={close}
              >
                X
              </div>
              <img alt="finish" src={Finish} style={{ width: "4%" }} />
              {textObjective}
            </div>
          </Grid>
        </Grid>
      </div>
    </Modal>
  </div>
);
export default ModalObjective;