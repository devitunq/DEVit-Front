import React from "react";
import "./BoardCell.css";

const BoardCell = ({ pos, imgList, background }) => {

  return (
    <td
      className="boardCell"
      style={{ backgroundImage: `url(${background})` }}
      id={`cell_${pos}`}
    >
      {imgList.map((img, index) => 
      <img
        id={`cell_img_${pos}_${index}`}
        key={`key_cell_img_${pos}_${index}`}
        style={{
          display: "block",
        }}
        width="100%"
        height="100%"
        src={img ? img : background}
        alt=""
      />)}
    </td>
  )
};

export default BoardCell;
