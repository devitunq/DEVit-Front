import React, { Component } from 'react';
import './BoxObjective.css';

class BoxObjetive extends Component {

  constructor(props) {
    super(props);
    this.objective = "El objetivo de este nivel es lograr llegar a la meta con la menor cantidad de instrucciones posible"
  };

  render() {
    return (
      <div className="container-objective">

        <div className="objective">
          <span className="objective-header">
            <p className="text-header">Objetivo</p>
          </span>
          <p className="objective-text"> {this.objective} </p>
        </div>

      </div>
    );
  }


}

export default BoxObjetive