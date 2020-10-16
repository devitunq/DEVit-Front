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


  const ANA = { name: "Ana", img: Character1 }
  const LIAM = { name: "Liam", img: Character2 }
  const ARIEL = { name: "Ariel", img: Character3 }
  const JORGE = { name: "Jorge", img: Character4 }

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

          <Grid container item xs={12} alignItems="center" spacing={4}>
            {permission === "FullAccess"
              ?
              characters.map((c) => 
                  <Grid item xs={3} key={`img_grid_key_${c.name}`}>
                    <div className="chooseCh-header"> {c.name} </div>
                    <img
                      className="character-img"
                      src={c.img}
                      onClick={() => { history.push(`/difficulty/${nick}/${c.name}`) }}
                      alt={c.name}
                    />
                  </Grid>
              )
              :
              <Grid item xs={12}>
                <img
                  className="character-img"
                  src={characters[4].img}
                  onClick={() => { history.push(`/difficulty/${nick}/${characters[4].name}`) }}
                  alt={characters[4].name}
                />
              </Grid>
            }
          </Grid>
        </Grid>
      </div>
    );
};

export default CharacterSelection;
