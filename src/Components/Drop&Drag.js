
import React, { Component } from 'react';
import './Drop&Drag.css';

export default class AppDragDropDemo extends Component {
  state = {
    actions: [
      { toDo: "Subir", category: "instructions" },
      { toDo: "Bajar", category: "instructions" },
    ]
  }

  onDragStart = (ev, id) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, categ) => {
    let id = ev.dataTransfer.getData("id");

    let actions = this.state.actions.filter((actions) => {
      if (actions.toDo == id) {
        actions.category = categ;
      }
      return actions;
    });

    this.setState({
      ...this.state,
      actions
    });
  }

  render() {
    var actions = {
      instructions: [],
      tablero: []
    }

    this.state.actions.forEach((t) => {
      actions[t.category].push(
        <div
          onDragStart={(e) => this.onDragStart(e, t.toDo)}
          draggable
          className="draggable"
        >
          {t.toDo}
        </div>
      );
    });

    return (
      <div className="container-drag">

        <div className="instrucciones"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => { this.onDrop(e, "instructions") }}>
          <span className="instructions-header">
            <p className="text-header">Instrucciones</p>
          </span>
          {actions.instructions}
        </div>

        <div className="droppable"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "tablero")}>
          <span className="board-header">
            <p className="text-header">Tablero </p>
          </span>
          {actions.tablero}
        </div>


      </div>
    );
  }
}