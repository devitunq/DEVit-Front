import React, { Fragment } from "react";
import { Modal } from "@material-ui/core";
import Door from "../../Assets/gameElements/door.png";
import Key from "../../Assets/gameElements/key.png";
import Finish from "../../Assets/gameElements/test-finish.png";
import Path from "../../Assets/gameElements/test-path.png";
import Character from "../../Assets/gameElements/character3.png";
import "./LMComponents.css";

const LevelMakerModal = ({ open, handleClose, onClickPlayer, onClickFinish, onClickPath, onClickDoor, onClickKey }) => (
  <Modal id={"conditionsModal"} open={open} close={handleClose}>
    <Fragment>
      <div className="lmakermodal-container">
        <div className="close-lmakermodal"
          onClick={handleClose}
        >
          X
        </div>
        <p className="lmakermodal-title"> Que elemento desea poner en la celda seleccionada </p>
        <img onClick={onClickPlayer} src={Character} alt="player" />
        <img onClick={onClickFinish} src={Finish} alt="finish" />
        <img onClick={onClickDoor} src={Door} alt="door" />
        <img onClick={onClickKey} src={Key} alt="key" />
        <img onClick={onClickPath} src={Path} alt="path" />
      </div>
    </Fragment>
  </Modal>
);
export default LevelMakerModal;
