import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import { Grid, Container, InputBase, LinearProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom"
import "./AuthOrGuest.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import Next from "../../Assets/others/next.png";
import Login from "../Generics/Login"
import { getGuestPermission } from "../../Utils/Api"

const AuthOrGuest = () => {
  const [name, setName] = useState("");
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  const handleGuestLogin = () => {
    getGuestPermission(name)
      .then((response) => {
        localStorage.setItem('accessToken', response.data.token); console.log(response)
        localStorage.setItem('permission', response.data.permission);
        localStorage.setItem('nick', response.data.nick);
        history.push(`/characterSelection/${response.data.nick}`)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    if (localStorage.getItem('accessToken') != null) {
      history.push(`/characterSelection/${localStorage.getItem('nick')}`)
    }
    setIsLoading(false);
  });

  return isLoading ? (
    <LinearProgress variant="indeterminate" />
  ) : (
      <div>
        <ParticlesBg type="circle" bg={true} />

        <Logo />

        <Grid container direction="column" spacing={10} justify="center">
          <Grid item xs={12}>
            <Navbar />
          </Grid>

          <Grid container item xs={12}>

            <Grid item xs={6}>
              <Login />
            </Grid>

            <Grid item xs={6}>
              <Container maxWidth="xs">
                <div className="auth-cont">
                  <div className="guess-title"> Jugar como invitado </div>
                  <hr className="divider-auth"></hr>
                  <div className="guess-data"> Elija su nombre. </div>
                  <InputBase
                    id="inputName"
                    fullWidth
                    required
                    inputProps={{ "aria-label": "naked" }}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <a onClick={handleGuestLogin} id="nextInput">
                    <img
                      className="next-endbutt"
                      src={Next}
                      alt="next"
                    />
                  </a>
                </div>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
};

export default AuthOrGuest;
