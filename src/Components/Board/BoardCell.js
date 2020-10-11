import React from "react";
import "./BoardCell.css";

const BoardCell = ({ pos, img, background }) => {

  return (
    <td
      className="boardCell"
      style={{ backgroundImage: `url(${background})` }}
      id={`cell_${pos}`}
    >
      <img
        id={`cell_img_${pos}`}
        style={{
          display: "block",
        }}
        width="100%"
        height="100%"
        src={img ? img : background}
        alt=""
      />
    </td>
  )
};

export default BoardCell;
