import React, { Component } from "react";
import "./Drop&Drag.css";

export default class AppDragDropDemo extends Component {
  state = {
    actions: [
      { toDo: "Subir", category: "instructions" },
      { toDo: "Bajar", category: "instructions" },
      { toDo: "Rodrikpo", category: "instructions" },
    ],
  };

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, categ) => {
    let id = ev.dataTransfer.getData("id");

    let actions = this.state.actions.filter((actions) => {
      if (actions.toDo === id) {
        actions.category = categ;
      }
      return actions;
    });

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
          <p className="text-header">Instrucciones</p>
        </span>
        <div
          className="container-instructions"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => {
            this.onDrop(e, "instructions");
          }}
        >
          {actions.instructions}
        </div>

        <span className="instructions-header">
          <p className="text-header">Tablero</p>
        </span>
        <div
          className="container-board "
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "tablero")}
        >
          {actions.tablero}
        </div>
      </div>
    );
  }
}
