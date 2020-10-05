import React, { Fragment } from "react";
import { Modal } from "@material-ui/core";
import ResultLvl from "../Others/ResultLvl";
import Success from "../../Assets/modalResults/success.png";
import Failed from "../../Assets/modalResults/failed.png";

const LevelModal = ({ open, close, result, comment }) => (
  <Modal id={"modalLevel"} open={open} onClose={close}>
    <Fragment>
      {result ? (
        <ResultLvl
          id={"successLevel"}
          closeModal={close}
          imgPath={Success}
          text={comment}
        />
      ) : (
          <ResultLvl
            id={"failedLevel"}
            closeModal={close}
            imgPath={Failed}
            text={comment}
          />
        )}
    </Fragment>
  </Modal>
);
export default LevelModal;
