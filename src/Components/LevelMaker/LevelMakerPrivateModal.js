import React, { Fragment } from "react";
import { Modal } from "@material-ui/core";
import Next from "../../Assets/others/next.png";
import "./LMComponents.css";

const LevelMakerPrivateModal = ({
  open,
  handleClose,
  link,
  onClickContinue,
}) => (
    <Modal id={"privateModal"} open={open}>
      <Fragment>
        <div className="lmPrivatemodal-container">
          <div className="close-lmakermodal"
            onClick={handleClose}
          >
            X
          </div>
          <p className="lmakermodal-title"> Copie el link y guardelo para compartirlo </p>
          <div className="copyLink">{link}</div>
          <img
            onClick={onClickContinue}
            className="next-privateModal"
            src={Next}
            alt="next"
          />
        </div>
      </Fragment>
    </Modal>
  );
export default LevelMakerPrivateModal;
