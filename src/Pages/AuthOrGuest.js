import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import { Grid, Container, InputBase, LinearProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom"
import "./styles/AuthOrGuest.css";
import Navbar from "../Components/Generics/Navbar";
import Logo from "../Components/Generics/Logo";
import Login from "../Components/Auth/Login";
import Guest from "../Components/Auth/Guest";
import { getGuestPermission } from "../Utils/Api";

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
              <Guest
                name={name}
                onChangeName={(event) => setName(event.target.value)}
                handleSumbit={() => handleGuestLogin()}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
};

export default AuthOrGuest;
