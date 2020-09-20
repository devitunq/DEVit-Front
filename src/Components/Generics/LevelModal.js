import React, { Fragment } from "react";
import { Modal } from "@material-ui/core";
import SuccessLvl from "../Others/SuccessLvl";
import FailedLvl from "../Others/FailedLvl";

const LevelModal = ({ open, close, result }) => (
  <Modal id={"modalLevel"} open={open} onClose={close}>
    {/* Los fragments son necesarios porque los componentes funcionales
    no pueden mantener forwardRefs y no se le pueden pasar como children al modal..
    (pasan, pero dejan warnings por todos lados) */}
    <Fragment>
      {result ? (
        <SuccessLvl id={"successLevel"} />
      ) : (
        <FailedLvl id={"failedLevel"} />
      )}
    </Fragment>
  </Modal>
);
export default LevelModal;
