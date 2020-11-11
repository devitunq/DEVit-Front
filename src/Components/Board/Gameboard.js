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
          images.push(e.lookingTo === "LEFT" ? characterImg.left : characterImg.right);
        else
          images.push(elemeTypeStrToElemType(e));
    });
  if (images.length === 0)
    images.push("");
  return images;
};

const Gameboard = (props) => {

  const onClickCell = (i, j) => {
    props.savePosition(i, j);
  }

  return (
    <Container maxWidth="xl">
      <div className="boardContainer">
        <table cellSpacing="0" className="board">
          <tbody>
            {props.grid.map((row, j) => (
              <tr key={"row_" + j}>
                {row.map((_, i) => (
                  <BoardCell
                    clickeable={props.clickeable}
                    onClick={() => onClickCell(i, j)}
                    key={`cell_${i}_${j}`}
                    background={boardBGpositions(`${i}_${j}`, props.paths)}
                    imgList={boardFGpositions(`${i}_${j}`, props.objects, props.character.img)}
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
