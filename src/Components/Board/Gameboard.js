import React from "react";
import BoardCell from "./BoardCell";
import "./Gameboard.css";
import Water from "../../Assets/gameElements/test-water.png";
import Player from "../../Assets/gameElements/test-player.png";
import Finish from "../../Assets/gameElements/test-finish.png";
import Path from "../../Assets/gameElements/test-path.png";
import { Container } from "@material-ui/core";


const elemeTypeStrToElemType = (elemTypeStr) => {
  switch (elemTypeStr) {
    case "Finish":
      return Finish;
    case "Player":
      return Player;
    case "PathTile":
      return Path;
    default:
      return Water;
  }
};

const boardPositions = (boardCell, elements, isObject = false) => {
  let img = isObject ? "" : Water;
  let element = elements.find(
    (e) => `${e.position.posX}_${e.position.posY}` === boardCell
  );
  if (element) img = elemeTypeStrToElemType(element.type);
  return img;
};

const Gameboard = ({ grid, paths, objects }) => (
  <Container maxWidth="xl">
    <div className="boardContainer">
      <table cellSpacing="0" className="board">
        <tbody>
          {grid.map((row, j) => (
            <tr key={"row_" + j}>
              {row.map((_, i) => (
                <BoardCell
                  key={`cell_${i}_${j}`}
                  background={boardPositions(`${i}_${j}`, paths)}
                  img={boardPositions(`${i}_${j}`, objects, true)}
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
