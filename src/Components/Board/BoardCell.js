import React from "react";
import "./BoardCell.css";

const BoardCell = ({ pos, imgList, background, onClick, clickeable }) => {

  return (
    <td
      className={["boardCell", clickeable && "clickeable"].join(" ")}
      style={{ backgroundImage: `url(${background})` }}
      id={`cell_${pos}`}
      onClick={onClick}
    >
      <div style={{ position: "relative", minHeight: "105px" }}>
        {imgList.map((img, index) =>
          <img
            id={`cell_img_${pos}_${index}`}
            key={`key_cell_img_${pos}_${index}`}
            className="cellImg"
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
