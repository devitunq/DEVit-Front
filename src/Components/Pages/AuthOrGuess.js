import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import { Grid, Container, InputBase } from "@material-ui/core";
import "./AuthOrGuess.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";

const AuthOrGuess = () => {

  return (
    <div>
      <ParticlesBg type="circle" bg={true} />

      <Logo />

      <Grid container direction="column" spacing={10} justify="center">
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Container maxWidth="xs">
              <div className="auth-container">
                <div className="auth-chooseName"> Eliga su nombre </div>
                <hr></hr>
                <Container maxWidth="xs">
                  <InputBase
                    fullWidth="true"
                    required='true'
                    inputProps={{ 'aria-label': 'naked' }}
                  />
                </Container>
                <a href={"/difficulty"}>
                  <p className="text-butt"> {"Avanzar >>"}</p>
                </a>
              </div>
            </Container>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default AuthOrGuess;