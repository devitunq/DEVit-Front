import { Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SuccesLvl from "../Others/SuccesLvl"
import FailedLvl from "../Others/FailedLvl"


const LevelModal = ({ open, close, result }) => {
  if (result) {
    return (
      <Modal
        open={open}
        onClose={close}
      >
        {<SuccesLvl />}
      </Modal>
    )
  } else {
    return (
      <Modal
        open={open}
        onClose={close}
      >
        {<FailedLvl />}
      </Modal>
    )
  }
}

export default LevelModal;