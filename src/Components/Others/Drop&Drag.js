import React, { Component } from "react";
import "./Drop&Drag.css";

export default class DropAndDrag extends Component {
  state = {
    actions: [
      { toDo: "Subir", category: "instructions" },
      { toDo: "Bajar", category: "instructions" },
      { toDo: "Derecha", category: "instructions" },
      { toDo: "Izquierda", category: "instructions" },
      { toDo: "Subir", category: "tablero" },
      { toDo: "Subir", category: "tablero" },
      { toDo: "Derecha", category: "tablero" },
      { toDo: "Derecha", category: "tablero" },
      { toDo: "Derecha", category: "tablero" },
      { toDo: "Subir", category: "tablero" },
      { toDo: "Derecha", category: "tablero" },
      { toDo: "Derecha", category: "tablero" },
      { toDo: "Subir", category: "tablero" },
    ],
  };

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, categ) => {
    let id = ev.dataTransfer.getData("id");

    let actions = this.state.actions.map((action) => {
      if (action.toDo === id) {
        action.category = categ;
      }
      return action;
    });

    let elem = actions.splice(
      actions.findIndex((e) => e.toDo === id),
      1
    )[0];
    actions.splice(actions.length, 0, elem);

    this.setState({
      ...this.state,
      actions,
    });
  };

  render() {
    var actions = {
      instructions: [],
      tablero: [],
    };

    this.state.actions.forEach((t) => {
      actions[t.category].push(
        <div
          key={`action_${t.toDo}`}
          onDragStart={(e) => this.onDragStart(e, t.toDo)}
          draggable
          className="action-item"
        >
          {t.toDo}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <span className="instructions-header">
          <img
            className="board-pic"
            src={"/images/tablero.png"}
            alt="objetivo"
          />
        </span>
        <div className="container-instructions"
          onDragOver={this.onDragOver}
          onDrop={(e) => { this.onDrop(e, "instructions"); }}
        >
          {actions.instructions}
        </div>


        <span className="instructions-header">
          <img
            className="instructions-pic"
            src={"/images/instrucciones.png"}
            alt="objetivo"
          />
        </span>
        <div
          className="container-board "
          onDragOver={this.onDragOver}
          onDrop={(e) => this.onDrop(e, "tablero")}
        >
          {actions.tablero}
        </div>
      </div>
    );
  }
}