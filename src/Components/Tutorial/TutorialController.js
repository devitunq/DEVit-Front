import React, { Fragment, useState, useEffect } from "react";
import TutorialControlls from "../Tutorial/TutorialControlls"
import TutorialBoard from "../Tutorial/TutorialBoard"
import TutorialSelection from "./TutorialSelection"
import TutorialDisplay from "./TutorialDisplay"
import TutorialStartAndRestart from "./TutorialStartAndRestart"
import TutorialDelSwitchAndArrows from "./TutorialDelSwitchAndArrows"
const TutorialController = ({ open }) => {

  const [tutorialSelection, setTutorialSelection] = useState(false);
  const [tutorialControlls, setTutorialControlls] = useState(false);
  const [tutorialBoard, setTutorialBoard] = useState(false);
  const [tutorialDisplay, setTutorialDisplay] = useState(false);
  const [tutorialStartAndRestart, setTutorialStartAndRestart] = useState(false);
  const [tutorialDelSwitchAndArrows, setTutorialDelSwitchAndArrows] = useState(false);

  useEffect(() => {
    if (
      !tutorialControlls &&
      !tutorialDisplay &&
      !tutorialDisplay &&
      !tutorialStartAndRestart &&
      !tutorialDelSwitchAndArrows &&
      !tutorialBoard
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
  }

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
  }

  return (
    <div>
      <TutorialSelection
        open={tutorialSelection}
        toControlls={TSelectionToTControlls}
        toBoard={TSelectionToTBoard}
      />

      <TutorialControlls
        open={tutorialControlls}
        backSelecetion={TControllsToTSelection}
        toDisplay={TControlsToTDisplay}
        toStartRestart={TControlsToTStartRestart}
        toDeleteArrows={TControlsToTDeleteArrows}
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

    </div>
  )



};

export default TutorialController;