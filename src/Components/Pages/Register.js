import React, { useState } from "react";
import { Grid, Container, InputBase } from "@material-ui/core";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import ParticlesBg from "particles-bg";
import Next from "../../Assets/others/next.png";
import "../Pages/Register.css";

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [correctPassword, setCorrectPassword] = useState(true);

  const comparePassowrds = (pw) => {
    let isCorrect = pw === password
    setCorrectPassword(isCorrect);
  }

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
                onChange={(e) => comparePassowrds(e.target.value)}
              />
              <a id="nextInput">
                <img
                  className="next-endbutt"
                  src={Next}
                  alt="next"
                />
              </a>
            </div>
          </Container>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}

export default Register;

