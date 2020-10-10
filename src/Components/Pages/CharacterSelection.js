import React from "react";
import ParticlesBg from "particles-bg";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router";
import "./AuthOrGuest.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import Character1 from "../../Assets/gameElements/character1.png"
import Character2 from "../../Assets/gameElements/character2.png"
import Character3 from "../../Assets/gameElements/character3.png"
import Character4 from "../../Assets/gameElements/character4.png"
import "./CharacterSelection.css";

const CharacterSelection = () => {
  const { nick } = useParams();

  const characters = ["c1", "c2", "c3", "c4"]

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

  return (
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
          {characters.map((c) => {
            return (
              <Grid item xs={3}>
                <a href={`/difficulty/${nick}/${c}`}>
                  <img
                    src={characterNameToImg(c)}
                  />
                </a>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default CharacterSelection;
