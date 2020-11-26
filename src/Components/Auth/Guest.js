import React, { useState } from "react";
import { Container, InputBase } from "@material-ui/core";
import Next from "../../Assets/others/next.png";
import { useHistory } from "react-router-dom"
import RegisterUser from "./Register";
import './Guest.css';
import { getGuestPermission } from "../../Utils/Api";
import Toast from "../Generics/Toast";

const nameError = "El campo nombre de invitado no puede ser un campo vacio"

const Guest = () => {

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false);
  const history = useHistory();

  const handleGuestLogin = () => {
    if (name === "") {
      setError(nameError);
      setAlert(true);
    } else {
      getGuestPermission(name)
        .then((response) => {
          localStorage.setItem('accessToken', response.data.token); console.log(response)
          localStorage.setItem('permission', response.data.permission);
          localStorage.setItem('nick', response.data.nick);
          history.push(`/characterSelection/${response.data.nick}`)
        })
        .catch((error) => console.log(error))
    };
  };

  const handleClose = () => {
    setAlert(false);
    setError("");
  }


  return (
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
          onChange={(event) => setName(event.target.value)}
          data-testid="guestInputName"
        />
        <a onClick={() => handleGuestLogin()} id="nextInput" data-testid="guestNext">
          <img
            className="next-endbutt"
            src={Next}
            alt="next"
          />
        </a>

        <div className="or"> ------------------   o  ------------------</div>

        <RegisterUser />
      </div>

      <Toast
        content={error}
        open={alert}
        handleClose={handleClose}
      />
    </Container>
  )
};

export default Guest;