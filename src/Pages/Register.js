import React, { useState } from "react";
import { Grid, Container, InputBase } from "@material-ui/core";
import Navbar from "../Components/Generics/Navbar";
import Logo from "../Components/Generics/Logo";
import ParticlesBg from "particles-bg";
import Next from "../Assets/others/next.png";
import Toast from "../Components/Generics/Toast";
import { registerUser } from "../Utils/Api";
import { useHistory } from "react-router-dom";
import "../Pages/styles/Register.css";

const Register = () => {
  const [username, setUsername] = useState("")
  const [nick, setNick] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [succesAlert, setSuccesAlert] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const allFieldsCompleted = () => {
    return username !== "" && nick !== "" && password !== "" && passwordConfirm !== "";
  }

  const handleSumbit = () => {
    if (allFieldsCompleted()) {
      if (password === passwordConfirm) {
        registerUser(username, nick, password, passwordConfirm).then(response => {
          setSuccesAlert(true);
          setTimeout(() => { history.push("/sign"); }, 2500);

        }).catch(e => {
          setError("El nombre de usuario ya existe, intente con uno diferente");
          setErrorAlert(true);
        });
      } else {
        setError("Las contraseñas no coinciden.");
        setErrorAlert(true);
      }
    } else {
      setError("Complete todos los campos para poder registrarse");
      setErrorAlert(true);
    }
  };

  const handleCloseErrorAlert = () => {
    setErrorAlert(false);
  };

  const handleCloseSuccesAlert = () => {
    setSuccesAlert(false);
  };

  return (
    <div>
      <ParticlesBg type="circle" bg={true} />

      <Logo />

      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Container maxWidth="xs">
            <div className="login-cont">
              <div className="login-title"> Nuevo usuario </div>
              <hr className="divider-login"></hr>
              <div className="login-data"> Elija un nombre de usuario </div>
              <InputBase
                id="userId"
                fullWidth
                required
                inputProps={{ "aria-label": "naked" }}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="login-data"> Elija un nick </div>
              <InputBase
                id="nickId"
                fullWidth
                required
                inputProps={{ "aria-label": "naked" }}
                onChange={(e) => setNick(e.target.value)}
              />
              <div className="login-data"> Contraseña </div>
              <InputBase
                id="passId"
                type="password"
                fullWidth
                required
                inputProps={{ "aria-label": "naked" }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="login-data"> Repita la contraseña </div>
              <InputBase
                id="passId"
                type="password"
                fullWidth
                required
                inputProps={{ "aria-label": "naked" }}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              <a id="nextInput">
                <img
                  className="next-endbutt"
                  src={Next}
                  alt="next"
                  onClick={handleSumbit}
                />
              </a>
            </div>
          </Container>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      <Toast
        width="100%"
        content={error}
        open={errorAlert}
        handleClose={handleCloseErrorAlert}
      />

      <Toast
        width="100%"
        succes
        content={"Su usuario fue creado exitosamente, redireccionando..."}
        open={succesAlert}
        handleClose={handleCloseSuccesAlert}
      />
    </div>
  );
}

export default Register;

