import React, { Fragment } from "react";
import { Modal } from "@material-ui/core";
import isKey from "../../Assets/joystick/joystickIns/isKey.png";
import isDoor from "../../Assets/joystick/joystickIns/isDoor.png";
import "./Joystick.css";

const ConditionsModal = ({ open, handleClose, onClickIsDoor, onClickIsKey }) => (
  <Modal id={"conditionsModal"} open={open} close={handleClose}>
    <Fragment>
      <div className="conditionsModal-container">
        <div className="close-conditions"
          onClick={handleClose}
        >
          X
        </div>
        <p className="conditions-title"> Selecciona las conidiciones que necesitas : </p>
        <img onClick={onClickIsDoor} className="isDoor" src={isDoor} alt="isDoor" />
        <img onClick={onClickIsKey} className="isKey" src={isKey} alt="isKey" />
      </div>
    </Fragment>
  </Modal>
);
export default ConditionsModal;
