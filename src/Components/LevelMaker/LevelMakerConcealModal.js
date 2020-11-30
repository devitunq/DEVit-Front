import React, { Fragment } from "react";
import { Modal } from "@material-ui/core";
import key from "../../Assets/levelMaker/key.png";
import notKey from "../../Assets/levelMaker/notKey.png";
import "./LMComponents.css";

const LevelMakerConcealModal = ({
  open,
  handleClose,
  onClickKey,
  onClickNotKey,
}) => (
    <Modal id={"concealModal"} open={open}>
      <Fragment>
        <div className="lmConcealmodal-container">
          <div className="close-lmakermodal"
            onClick={handleClose}
          >
            X
        </div>
          <p className="lmakermodal-title"> ¿ Desea poner una llave debajo ? </p>
          <img onClick={onClickKey} className="img-conceal" src={key} alt="key" />
          <img onClick={onClickNotKey} className="img-conceal" src={notKey} alt="noteKey" />
        </div>
      </Fragment>
    </Modal>
  );
export default LevelMakerConcealModal;
