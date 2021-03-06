import React, { useState, useEffect } from "react";
import TutorialControlls from "../Tutorial/TutorialControlls"
import TutorialBoard from "../Tutorial/TutorialBoard"
import TutorialSelection from "./TutorialSelection"
import TutorialDisplay from "./TutorialDisplay"
import TutorialStartAndRestart from "./TutorialStartAndRestart"
import TutorialDelSwitchAndArrows from "./TutorialDelSwitchAndArrows"
import TutorialCondRepProc from "./TutorialCondRepProc"


const TutorialController = ({ open, closeTutorial }) => {

  const [tutorialSelection, setTutorialSelection] = useState(false);
  const [tutorialControlls, setTutorialControlls] = useState(false);
  const [tutorialBoard, setTutorialBoard] = useState(false);
  const [tutorialDisplay, setTutorialDisplay] = useState(false);
  const [tutorialStartAndRestart, setTutorialStartAndRestart] = useState(false);
  const [tutorialDelSwitchAndArrows, setTutorialDelSwitchAndArrows] = useState(false);
  const [tutorialCondRepProc, setTutorialCondRepProc] = useState(false);

  useEffect(() => {
    if (
      !tutorialControlls &&
      !tutorialDisplay &&
      !tutorialDisplay &&
      !tutorialStartAndRestart &&
      !tutorialDelSwitchAndArrows &&
      !tutorialBoard &&
      !tutorialCondRepProc
    ) {
      const opened = open;
      setTutorialSelection(opened);
    }
  })

  const TSelectionToTControlls = () => {
    setTutorialSelection(false);
    setTutorialControlls(true);
  }

  const TSelectionToTBoard = () => {
    setTutorialSelection(false);
    setTutorialBoard(true);
  }

  const TControllsToTSelection = () => {
    setTutorialControlls(false);
    setTutorialSelection(true);
  }

  const TControlsToTDisplay = () => {
    setTutorialControlls(false);
    setTutorialDisplay(true);
  }

  const TControlsToTStartRestart = () => {
    setTutorialControlls(false);
    setTutorialStartAndRestart(true);
  }

  const TControlsToTDeleteArrows = () => {
    setTutorialControlls(false);
    setTutorialDelSwitchAndArrows(true);
  };

  const TControlsToTRepCondProd = () => {
    setTutorialControlls(false);
    setTutorialCondRepProc(true);
  };

  const TDisplayToControlls = () => {
    setTutorialDisplay(false);
    setTutorialControlls(true);
  }

  const TStartRestartToControlls = () => {
    setTutorialStartAndRestart(false);
    setTutorialControlls(true);
  }

  const TDeleteArrowsToControlls = () => {
    setTutorialDelSwitchAndArrows(false);
    setTutorialControlls(true);
  }

  const TBoardToSelection = () => {
    setTutorialBoard(false);
    setTutorialSelection(true);
  };

  const TRepCondProdToControlls = () => {
    setTutorialCondRepProc(false);
    setTutorialSelection(true);
  };

  return (
    <div>
      <TutorialSelection
        open={tutorialSelection}
        toControlls={TSelectionToTControlls}
        toBoard={TSelectionToTBoard}
        closeTutorial={closeTutorial}
      />

      <TutorialControlls
        open={tutorialControlls}
        backSelecetion={TControllsToTSelection}
        toDisplay={TControlsToTDisplay}
        toStartRestart={TControlsToTStartRestart}
        toDeleteArrows={TControlsToTDeleteArrows}
        toTRepCondProd={TControlsToTRepCondProd}
      />

      <TutorialDisplay
        open={tutorialDisplay}
        backControlls={TDisplayToControlls}
      />

      <TutorialStartAndRestart
        open={tutorialStartAndRestart}
        backControlls={TStartRestartToControlls}
      />

      <TutorialDelSwitchAndArrows
        open={tutorialDelSwitchAndArrows}
        backControlls={TDeleteArrowsToControlls}
      />

      <TutorialBoard
        open={tutorialBoard}
        backSelecetion={TBoardToSelection}
      />

      <TutorialCondRepProc
        open={tutorialCondRepProc}
        backControlls={TRepCondProdToControlls}
      />

    </div>
  )



};

export default TutorialController;