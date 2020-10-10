import React from "react";
import "./BoardCell.css";
import Character1 from "../../Assets/gameElements/character1.png"
import Character2 from "../../Assets/gameElements/character2.png"
import Character3 from "../../Assets/gameElements/character3.png"
import Character4 from "../../Assets/gameElements/character4.png"

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
