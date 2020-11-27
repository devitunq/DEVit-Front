import React, { Fragment } from "react";
import { Modal } from "@material-ui/core";
import "./Joystick.css";

const TimesModal = ({ open, handleClose, onChangeTimes, times, onClickButton }) => (
  <Modal id="timesModal" open={open} close={handleClose}>
    <Fragment>
      <div className="timesModal-container">
        <div className="close-conditions"
          onClick={handleClose}
        >
          X
        </div>
        <div className="times-header"> Repeticiones </div>
        <input
          type="number"
          id="timesid"
          className="input-times"
          value={times}
          onChange={onChangeTimes}
        />
        <div onClick={onClickButton} className="times-button"> Ok </div>
      </div>
    </Fragment>
  </Modal>
);
export default TimesModal;
