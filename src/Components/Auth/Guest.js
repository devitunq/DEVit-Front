import React from "react";
import { Container, InputBase } from "@material-ui/core";
import Next from "../../Assets/others/next.png";
import RegisterUser from "./Register";
import './Guest.css';

const Guest = ({ onChangeName, name, handleSumbit }) => (
  <Container maxWidth="xs">
    <div className="guest-cont">
      <div className="guest-title"> Jugar como invitado </div>
      <hr className="guest-divider"></hr>
      <div className="guest-data"> Elija su nombre. </div>
      <InputBase
        id="inputName"
        fullWidth
        required
        inputProps={{ "aria-label": "naked" }}
        value={name}
        onChange={onChangeName}
      />
      <a onClick={handleSumbit} id="nextInput">
        <img
          className="next-endbutt"
          src={Next}
          alt="next"
        />
      </a>
      <RegisterUser />
    </div>
  </Container>
);

export default Guest;