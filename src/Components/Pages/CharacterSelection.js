import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import { Grid, LinearProgress } from "@material-ui/core";
import { useParams } from "react-router";
import "./AuthOrGuest.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import { useHistory } from "react-router-dom";
import Character1 from "../../Assets/gameElements/character1.png"
import Character2 from "../../Assets/gameElements/character2.png"
import Character3 from "../../Assets/gameElements/character3.png"
import Character4 from "../../Assets/gameElements/character4.png"
import "./CharacterSelection.css";

const CharacterSelection = () => {
  const { nick } = useParams();
  const [permission, setPermission] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();


  const characters = ["c1", "c2", "c3", "c4"]

  useEffect(() => {
    let userPermission = localStorage.getItem('permission');
    setPermission(userPermission);
    setIsLoading(false);
  });

  const characterNameToImg = chrstr => {
    switch (chrstr) {
      case "c1":
        return Character1;
      case "c2":
        return Character2;
      case "c3":
        return Character3;
      default:
        return Character4
    }
  }


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

          <Grid container item xs={12} alignItems="center" spacing={4}>
            {permission === "FullAcces"
              ?
              characters.map((c) => {
                return (
                  <Grid item xs={3}>
                    <img
                      className="character-img"
                      src={characterNameToImg(c)}
                      onClick={() => { history.push(`/difficulty/${nick}/${c}`) }}
                    />
                  </Grid>
                )
              })
              :
              <Grid item xs={12}>
                <img
                  className="character-img"
                  src={characterNameToImg(characters[4])}
                  onClick={() => { history.push(`/difficulty/${nick}/${characters[4]}`) }}
                />
              </Grid>
            }
          </Grid>
        </Grid>
      </div>
    );
};

export default CharacterSelection;
