import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ParticlesBg from "particles-bg";
import { Grid, Container, LinearProgress } from "@material-ui/core";
import "./LevelDifficulty.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import { getDifficulties } from "../../Services/Api";
import Easy from "../../Assets/difficulties/Easy.png";
import Medium from "../../Assets/difficulties/Medium.png";
import Hard from "../../Assets/difficulties/Hard.png";

const LevelDifficulty = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [difficulties, setDifficulties] = useState([]);
  const { nick } = useParams();
  const { character } = useParams();

  const dificultyToImg = (diffStr) => {
    switch (diffStr) {
      case "Easy":
        return Easy;
      case "Medium":
        return Medium;
      default:
        return Hard
    }
  };


  useEffect(() => {
    if (isLoading)
      getDifficulties().then((response) => {
        setDifficulties(response.data);
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
              <div className="contWelcome-diff">
                {`Bienvenido ${nick}`}
                <hr className="divider-diff"></hr>
              </div>
              <Container maxWidth="xs">{
                difficulties.map((diff) => {
                  return (
                    <div className="diff-container" key={`key_${diff}`}>
                      <a href={`/levelSelection/${diff}/${character}`}>
                        <div className="diff-item">
                          <img
                            className="diff-img"
                            src={dificultyToImg(diff)}
                            alt={`${diff}`}
                          />
                        </div>
                      </a>
                      <hr className="diff-separator" />
                    </div>
                  );
                })
              }
              </Container>
            </Grid>

            <Grid item xs={2}>
            </Grid>

          </Grid>
        </Grid>
      </div >
    );
};

export default LevelDifficulty;
