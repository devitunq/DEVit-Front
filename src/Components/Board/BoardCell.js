import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./BoardCell.css";
import Water from "../../Assets/test-water.png";

class BoardCell extends Component {
  render() {
    const background = this.props.background ? this.props.background : Water;
    return (
      <td
        className="boardCell"
        style={{ backgroundImage: `url(${background})` }}
        id={`cell_${this.props.pos}`}
      >
        <img
          id={`cell_img_${this.props.pos}`}
          style={{
            display: "block",
          }}
          width="100%"
          height="100%"
          src={this.props.img}
          alt=""
        />
      </td>
    );
  }
}

BoardCell.propTypes = {
  pos: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  background: PropTypes.string,
};

export default BoardCell;
