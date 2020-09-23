import React, { Component } from "react";
import "./Drop&Drag.css";
import { Container, Grid } from "@material-ui/core";

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
        <Grid item xs={2}>
          <div
            key={`action_${t.toDo}`}
            onDragStart={(e) => this.onDragStart(e, t.toDo)}
            draggable
            className="action-item"
          >
            {t.toDo}
          </div>
        </Grid>
      );
    });

    return (
      <div className="container-drag">

        <div className="cont-header">
          <img
            className="instructions-pic"
            src={"/images/instrucciones.png"}
            alt="objetivo"
          />
        </div>

        <div className="container-box"
          onDragOver={this.onDragOver}
          onDrop={(e) => { this.onDrop(e, "instructions"); }}
        >
          <Grid container direction="row" xs={12} >
            {actions.instructions}
          </Grid>
        </div>


        <div className="cont-header">
          <img
            className="board-pic"
            src={"/images/tablero.png"}
            alt="objetivo"
          />
        </div>

        <div
          className="container-box"
          onDragOver={this.onDragOver}
          onDrop={(e) => this.onDrop(e, "tablero")}
        >
          <Grid container direction="row" xs={12} >
            {actions.tablero}
          </Grid>
        </div>

      </div >
    );
  }
}
