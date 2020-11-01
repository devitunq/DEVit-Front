import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import { Grid, LinearProgress } from "@material-ui/core";
import { useParams } from "react-router";
import "./styles/AuthOrGuest.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import { useHistory } from "react-router-dom";
import { ANA, LIAM, ARIEL, JORGE } from "../../Utils/Characters";
import "./styles/CharacterSelection.css";

const CharacterSelection = () => {
  const { nick } = useParams();
  const [permission, setPermission] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const characters = [ANA, LIAM, ARIEL, JORGE]

  useEffect(() => {
    let userPermission = localStorage.getItem('permission');
    setPermission(userPermission);
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

          <Grid container item xs={12} alignItems="center" direction="column">
            <div className="chooseCh-header"> Elija su personaje </div>
            <hr className="divider-chooseCh"></hr>
          </Grid>

          <Grid container item xs={12} alignItems="center" style={{ justifyContent: "center" }} spacing={4}>
            {permission === "FullAccess"
              ?
              characters.map((c) =>
                <Grid item xs={3} key={`img_grid_key_${c.name}`}>
                  <img
                    className="character-img"
                    src={c.img}
                    onClick={() => { history.push(`/difficulty/${nick}/${c.name}`) }}
                    alt={c.name}
                  />
                  <div className="character-header"> {c.name} </div>
                </Grid>
              )
              :
              <Grid item xs={12} sm={4}>
                <img
                  className="character-img"
                  src={JORGE.img}
                  onClick={() => { history.push(`/difficulty/${nick}/${JORGE.name}`) }}
                  alt={JORGE.name}
                />
                <div className="character-header"> {JORGE.name} </div>
              </Grid>
            }
          </Grid>
        </Grid>
      </div>
    );
};

export default CharacterSelection;
