import React, { Fragment } from "react";
import { Modal } from "@material-ui/core";
import ResultLvl from "../Others/ResultLvl";

const LevelModal = ({ open, close, result }) => (
  <Modal id={"modalLevel"} open={open} onClose={close}>
    {/* Los fragments son necesarios porque los componentes funcionales
    no pueden mantener forwardRefs y no se le pueden pasar como children al modal..
    (pasan, pero dejan warnings por todos lados) */}
    <Fragment>
      {result ? (
        <ResultLvl
          id={"successLevel"}
          closeModal={close}
          imgPath={"images/success.png"}
          text={"Bien hecho camarada, sigue asi"}
        />
      ) : (
          <ResultLvl
            id={"failedLevel"}
            closeModal={close}
            imgPath={"images/failed.png"}
            text={"Has fallado! Intentalo de nuevo."}
          />
        )}
    </Fragment>
  </Modal>
);
export default LevelModal;
