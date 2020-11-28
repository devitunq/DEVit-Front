import React from "react";
import "./InfoBar.css"

const InfoBar = ({ bestMovementes, actualMovements, maxMovementsBoard1, maxMovementsBoard2 }) => {

  const determinateStyle = bestMovementes >= actualMovements ? "white" : "red";

  return (
    <div className="infoBarContainer">
      <div>
        <div className="itemInfoBar">
          Movimientos Recomendados: <b>{bestMovementes}</b>
        </div>
        <div className="itemInfoBar">
          Movimientos Actuales: <b style={{ color: determinateStyle }}>{actualMovements}</b>
        </div>
      </div>
      <div className="itemInfoBar">
        Mov. Max. Tablero nº 1: <b>{maxMovementsBoard1}</b>
      </div>
      <div className="itemInfoBar">
        Mov. Max. Tablero nº 2: <b>{maxMovementsBoard2}</b>
      </div>
    </div>
  );
};

export default InfoBar;
