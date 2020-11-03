import React, { useState } from "react";
import { Grid, Container, InputBase } from "@material-ui/core";
import Toast from "../Generics/Toast";
import Next from "../../Assets/others/next.png";
import "./Login.css";
import { getUser } from "../../Utils/Api"
import { useHistory } from "react-router-dom"

const userError = "El campo de usuario no puede estar vacio"
const passwordError = "El campo de contraseña no puede estar vacio"
const invalidUserOrPassword = "Usuario un contraseña incorrecta."

const Loign = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState([]);
  const [alert, setAlert] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    if (password.length === 0 || username.length === 0) {
      console.log(password, username)
      console.log(errors)
      setEmptyInputError();
      setAlert(true);
    } else {
      getUser(username, password)
        .then((response) => {
          localStorage.setItem('accessToken', response.data.token); console.log(response)
          localStorage.setItem('permission', response.data.permission);
          localStorage.setItem('nick', response.data.nick);
          localStorage.setItem('userName', response.data.userName);
          history.push(`/characterSelection/${response.data.nick}`)
        })
        .catch(() => {
          if (!errors.includes(invalidUserOrPassword)) setError([...errors, invalidUserOrPassword]);
          setAlert(true);
        });
    };
  };

  const handleClose = () => {
    setAlert(false);
    let errorsTemp = errors;
    errorsTemp.shift();
    setError(errorsTemp);
  }

  const setEmptyInputError = () => {
    if (username.length === 0 && !errors.includes(userError)) setError([...errors, userError]);
    if (password.length === 0 && !errors.includes(passwordError)) setError([...errors, passwordError]);

  };

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

      <Toast
        content={errors[0] && errors[0]}
        open={alert}
        handleClose={handleClose}
      />
    </Grid>
  );
}

export default Loign;

