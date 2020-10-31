import React, { useState } from "react";
import { Grid, Container, InputBase } from "@material-ui/core";
import Next from "../../Assets/others/next.png";
import "../Generics/Login.css";
import { getUser } from "../../Utils/Api"
import { useHistory } from "react-router-dom"

const Loign = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory();

  const handleLogin = () => {
    getUser(username, password)
      .then((response) => {
        console.log(response)
        localStorage.setItem('accessToken', response.data.token); console.log(response)
        localStorage.setItem('permission', response.data.permission);
        localStorage.setItem('nick', response.data.nick);
        localStorage.setItem('userName', response.data.userName);
        history.push(`/characterSelection/${response.data.nick}`)
      })
      .catch((error) => console.log(error))
  }

  return (
    <Grid container item xs={12}>
      <Grid item xs={10}>
        <Container maxWidth="xs">
          <div className="login-cont">
            <div className="login-title"> Jugar con mi cuenta. </div>
            <hr className="divider-login"></hr>
            <div className="login-data"> Usuario </div>
            <InputBase
              id="userId"
              fullWidth
              required
              inputProps={{ "aria-label": "naked" }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <hr className="divider-login"></hr>
            <div className="login-data"> Contraseña </div>
            <InputBase
              id="passId"
              type="password"
              fullWidth
              required
              inputProps={{ "aria-label": "naked" }}
              onChange={(e) => setPassword(e.target.value)}
            />

            <a id="nextInput" onClick={handleLogin}>
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
        <div className="vl"></div>
      </Grid>
    </Grid>
  );
}

export default Loign;

