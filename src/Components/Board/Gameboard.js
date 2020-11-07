import React from "react";
import BoardCell from "./BoardCell";
import "./Gameboard.css";
import Water from "../../Assets/gameElements/test-water.png";
import Finish from "../../Assets/gameElements/test-finish.png";
import Door from "../../Assets/gameElements/door.png";
import OpenDoor from "../../Assets/gameElements/dooropen.png";
import Key from "../../Assets/gameElements/key.png";
import Path from "../../Assets/gameElements/test-path.png";
import { Container } from "@material-ui/core";

const elemeTypeStrToElemType = (elem) => {
  switch (elem.type) {
    case "Finish":
      return Finish;
    case "Key":
      return Key;
    case "door":
      return elem.open ? OpenDoor : Door;
    default:
      return Path;
  }
};

const boardBGpositions = (boardCell, elements) => {
  let img = Water;
  let element = elements.find(
    (e) => `${e.position.posX}_${e.position.posY}` === boardCell
  );
  if (element) img = elemeTypeStrToElemType(element);
  return img;
}

const boardFGpositions = (boardCell, elements, characterImg) => {
  let images = [];
  elements.forEach(
    (e) => {
      if (`${e.position.posX}_${e.position.posY}` === boardCell)
        if (e.type === "Player")
          images.push(e.lookingTo === "left" ? characterImg.left : characterImg.right);
        else
          images.push(elemeTypeStrToElemType(e));
    });
  if (images.length === 0)
    images.push("");
  return images;
};

const Gameboard = ({ grid, paths, objects, character }) => {
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
                    background={boardBGpositions(`${i}_${j}`, paths)}
                    imgList={boardFGpositions(`${i}_${j}`, objects, character.img)}
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
