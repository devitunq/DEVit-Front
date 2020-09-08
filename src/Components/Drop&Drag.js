
import React, { Component } from 'react';
import './Drop&Drag.css';

export default class AppDragDropDemo extends Component {
  state = {
    tasks: [
      { name: "Mover", category: "instrucciones" },
      { name: "Subir", category: "instrucciones" },
      { name: "Bajar", category: "tablero" }
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

    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = categ;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  }

  render() {
    var tasks = {
      instrucciones: [],
      tablero: []
    }

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">

        <div className="instrucciones"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => { this.onDrop(e, "instrucciones") }}>
          <span>Instrucciones</span>
          <div className="instructions-items">{tasks.instrucciones}</div>
        </div>

        <div className="droppable"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "tablero")}>
          <span> Tablero</span>
          {tasks.tablero}
        </div>


      </div>
    );
  }
}