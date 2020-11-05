import React, { Fragment } from "react";
import { Modal } from "@material-ui/core";
import ResultLvl from "../Others/ResultLvl";
import Failed from "../../Assets/modalResults/failed.png";

const LevelModal = ({ open, close, result, comment, onClickWin, onClickLost, stars }) => (
  <Modal id={"modalLevel"} open={open} onClose={close}>
    <Fragment>
      {result ? (
        <ResultLvl
          id={"successLevel"}
          onClickLost={onClickLost}
          onClickWin={onClickWin}
          closeModal={close}
          text={comment}
          stars={stars}
        />
      ) : (
          <ResultLvl
            id={"failedLevel"}
            onClickLost={onClickLost}
            closeModal={close}
            imgPath={Failed}
            text={comment}
          />
        )}
    </Fragment>
  </Modal>
);
export default LevelModal;
