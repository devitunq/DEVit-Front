import React, { Fragment } from "react";
import { Modal } from "@material-ui/core";
import Door from "../../Assets/levelMaker/door.png";
import Key from "../../Assets/levelMaker/key.png";
import Finish from "../../Assets/levelMaker/finish.png";
import Path from "../../Assets/levelMaker/path.png";
import Character from "../../Assets/levelMaker/player.png";
import Delete from "../../Assets/levelMaker/delete.png";
import "./LMComponents.css";

const LevelMakerModal = ({
  open,
  handleClose,
  onClickPlayer,
  onClickFinish,
  onClickPath,
  onClickDoor,
  onClickKey,
  onClickDelete
}) => (
    <Modal id={"conditionsModal"} open={open}>
      <Fragment>
        <div className="lmakermodal-container">
          <div className="close-lmakermodal"
            onClick={handleClose}
          >
            X
        </div>
          <p className="lmakermodal-title"> Que elemento desea colocar en la celda seleccionada </p>
          <img onClick={onClickPlayer} className="img" src={Character} alt="player" />
          <img onClick={onClickFinish} className="img" src={Finish} alt="finish" />
          <img onClick={onClickDoor} className="img" src={Door} alt="door" />
          <img onClick={onClickKey} className="img" src={Key} alt="key" />
          <img onClick={onClickPath} className="img" src={Path} alt="path" />
          <img onClick={onClickDelete} className="img" src={Delete} alt="delete" />
        </div>
      </Fragment>
    </Modal>
  );
export default LevelMakerModal;
