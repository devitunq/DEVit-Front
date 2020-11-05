import React from "react";
import "./BoardCell.css";

const BoardCell = ({ pos, imgList, background }) => {

  return (
    <td
      className="boardCell"
      style={{ backgroundImage: `url(${background})` }}
      id={`cell_${pos}`}
    >
      <div style={{position:"relative", minHeight:"105px" }}>
        {imgList.map((img, index) => 
        <img
          id={`cell_img_${pos}_${index}`}
          key={`key_cell_img_${pos}_${index}`}
          style={{
            display: "block",
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
          width="100%"
          height="100%"
          src={img ? img : background}
          alt=""
        />)}
      </div>
    </td>
  )
};

export default BoardCell;
