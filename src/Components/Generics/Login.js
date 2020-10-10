import React, { useState } from "react";
import { Grid, Container, InputBase } from "@material-ui/core";
import Next from "../../Assets/others/next.png";
import "../Generics/Login.css";

const Loign = () => (
  <Grid container item xs={12}>
    <Grid item xs={10}>
      <Container maxWidth="xs">
        <div className="login-cont">
          <div className="login-title"> Jugar con mi cuenta. </div>
          <hr className="divider-login"></hr>
          <div className="login-data"> Usuario </div>
          <InputBase
            id="inputName"
            fullWidth
            required
            inputProps={{ "aria-label": "naked" }}
          />
          <hr className="divider-login"></hr>
          <div className="login-data"> Contraseña </div>
          <InputBase
            id="inputName"
            fullWidth
            required
            inputProps={{ "aria-label": "naked" }}
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
    <Grid item xs={1}>
      <div class="vl"></div>
    </Grid>
  </Grid>
);

export default Loign;

