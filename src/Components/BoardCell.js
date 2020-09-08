import React, { Component } from "react";

class BoardCell extends Component {
  render() {
    const color_ = this.props.color;
    return (
      <td
        style={{
          overflow: "hidden",
          width: "auto",
          height: "25px",
          backgroundColor: "gray",
          color: color_,
          boarderColor: "black",
          border: ".5px solid black",
        }}
      />
    );
  }
}

export default BoardCell;
