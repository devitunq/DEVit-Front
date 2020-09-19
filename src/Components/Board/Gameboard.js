import React from "react";
import BoardCell from "./BoardCell";
import "./Gameboard.css";
import { boardPositions } from "../Pages/Level";

const Gameboard = ({ grid, paths, objects }) => {
  return (
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
  );
};

export default Gameboard;
