import React from "react";
import BoardCell from "./BoardCell";
import "./Gameboard.css";
import Water from "../../Assets/gameElements/test-water.png";
import Finish from "../../Assets/gameElements/test-finish.png";
import Door from "../../Assets/gameElements/path-withDoor.png";
import Key from "../../Assets/gameElements/path-withKey.png";
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

const elemeTypeStrToElemType = (elemTypeStr) => {
  switch (elemTypeStr) {
    case "Finish":
      return Finish;
    case "Key":
      return Key;
    case "door":
      return Door;
    default:
      return Path;
  }
};

const boardBGpositions = (boardCell, allBoardElements) => {
  let img = Water;
  let element = allBoardElements.find(
    (e) => `${e.position.posX}_${e.position.posY}` === boardCell
  );
  if (element && element.type !== "Player") img = elemeTypeStrToElemType(element.type);
  return img;
}

const boardFGpositions = (boardCell, elements, characterName) => {
  let img = "";
  let element = elements.find(
    (e) => `${e.position.posX}_${e.position.posY}` === boardCell
  );
  if (element && element.type === "Player") img = characterNameToImg(characterName);
  if (element && element.type === "Finish") img = Finish;
  return img;
};


const allBoard = (paths, objects) => {
  let allBoard = paths.concat(objects);
  console.log(allBoard);
  return allBoard;
}

const Gameboard = ({ grid, paths, objects, characterName }) => {
  return (
    <Container maxWidth="xl">
      <div className="boardContainer">
        <table cellSpacing="0" className="board">
          <tbody>
            {grid.map((row, j) => (
              <tr key={"row_" + j}>
                {row.map((_, i) => (
                  <BoardCell
                    key={`cell_${i}_${j}`}
                    background={boardBGpositions(`${i}_${j}`, allBoard(paths, objects))}
                    img={boardFGpositions(`${i}_${j}`, objects, characterName)}
                    pos={`${i}_${j}`}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
};

export default Gameboard;
