import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import { Grid, Container, LinearProgress } from "@material-ui/core";
import "./LevelDifficulty.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import { getDifficulties } from "../../Services/LevelService"

const LevelDifficulty = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [difficulties, setDifficulties] = useState([]);
  const [diffultyItems, setDiffultyItems] = useState([]);

  useEffect(() => {
    if (isLoading)
      getDifficulties().then((response) => {
        setDifficulties(response.data)
        difficulties.forEach((diff) => {
          setDiffultyItems([...diffultyItems,
          <div className="diff-container">
            <hr className="diff-separator" />
            <a href={`/levelSelection/${diff}`}>
              <div className="diff-item">
                <img
                  className="lvl-img"
                  src={`/images/${diff}.png`}
                  alt={`${diff}`}
                />
              </div>
            </a>
            <hr className="diff-separator" />
          </div>
          ]);
        });
        setIsLoading(false);
      });
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
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Container maxWidth="xs">
                {diffultyItems}
              </Container>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid>
      </div>
    )
};

export default LevelDifficulty;
