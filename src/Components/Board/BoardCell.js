import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./BoardCell.css";

class BoardCell extends Component {
  render() {
    return (
      <td
        className="boardCell"
        style={{ backgroundImage: `url(${this.props.background})` }}
        id={`cell_${this.props.pos}`}
      >
        <img
          id={`cell_img_${this.props.pos}`}
          style={{
            display: "block",
          }}
          width="100%"
          height="100%"
          src={this.props.img ? this.props.img : this.props.background}
          alt=""
        />
      </td>
    );
  }
}

BoardCell.propTypes = {
  pos: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default BoardCell;
