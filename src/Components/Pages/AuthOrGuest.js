import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import { Grid, Container, InputBase } from "@material-ui/core";
import "./AuthOrGuest.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import Next from "../../Assets/others/next.png";

const AuthOrGuest = () => {
  const [name, setName] = useState("");

  const handleChange = (value) => {
    setName(value);
  };

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
              <div className="auth-cont">
                <div className="auth-chooseName"> Elija su nombre </div>
                <hr className="divider-auth"></hr>
                <InputBase
                  id="inputName"
                  fullWidth
                  required
                  inputProps={{ "aria-label": "naked" }}
                  value={name}
                  onChange={(event) => handleChange(event.target.value)}
                />
                <a href={`/difficulty/${name}`} id="nextInput">
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
      </Grid>
    </div>
  );
};

export default AuthOrGuest;
