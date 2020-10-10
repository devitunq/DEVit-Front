import React from "react";
import BoardCell from "./BoardCell";
import "./Gameboard.css";
import Water from "../../Assets/gameElements/test-water.png";
import Player from "../../Assets/gameElements/test-player.png";
import Finish from "../../Assets/gameElements/test-finish.png";
import Path from "../../Assets/gameElements/test-path.png";
import { Container } from "@material-ui/core";
import Character1 from "../../Assets/gameElements/character1.png"
import Character2 from "../../Assets/gameElements/character2.png"
import Character3 from "../../Assets/gameElements/character3.png"
import Character4 from "../../Assets/gameElements/character4.png"

const characterNameToImg = chrstr => {
  switch (chrstr) {
    case "c1":
      return Character1;
    case "c2":
      return Character2;
    case "c3":
      return Character3;
    default:
      return Character4
  }
}

const elemeTypeStrToElemType = (elemTypeStr, characterName) => {
  switch (elemTypeStr) {
    case "Finish":
      return Finish;
    case "Player":
      return characterNameToImg(characterName);
    case "PathTile":
      return Path;
    default:
      return Water;
  }
};

const boardPositions = (boardCell, elements, characterName, isObject = false) => {
  let img = isObject ? "" : Water;
  let element = elements.find(
    (e) => `${e.position.posX}_${e.position.posY}` === boardCell
  );
  if (element) img = elemeTypeStrToElemType(element.type);
  return img;
};

const Gameboard = ({ grid, paths, objects, characterName }) => (
  <Container maxWidth="xl">
    <div className="boardContainer">
      <table cellSpacing="0" className="board">
        <tbody>
          {grid.map((row, j) => (
            <tr key={"row_" + j}>
              {row.map((_, i) => (
                <BoardCell
                  key={`cell_${i}_${j}`}
                  background={boardPositions(`${i}_${j}`, paths, characterName)}
                  img={boardPositions(`${i}_${j}`, objects, characterName, true)}
                  pos={`${i}_${j}`}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Container>
);

export default Gameboard;
