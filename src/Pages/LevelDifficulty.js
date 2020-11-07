import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ParticlesBg from "particles-bg";
import { Grid, Container, LinearProgress } from "@material-ui/core";
import "./styles/LevelDifficulty.css";
import Navbar from "../Components/Generics/Navbar";
import Logo from "../Components/Generics/Logo";
import { getDifficulties } from "../Utils/Api";
import Easy from "../Assets/difficulties/Easy.png";
import Medium from "../Assets/difficulties/Medium.png";
import Hard from "../Assets/difficulties/Hard.png";

const LevelDifficulty = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [difficulties, setDifficulties] = useState([]);
  const [permission, setPermission] = useState("");
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

  const difficultiesList = ["Easy", "Medium", "Hard"];


  useEffect(() => {
    if (isLoading)
      getDifficulties().then((response) => {
        setDifficulties(response.data);
      });
    let userPermission = localStorage.getItem('permission')
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

          <Grid item xs={12}>
            <div className="contWelcome-diff">
              {`Seleccione una dificultad`}
              <hr className="divider-diff"></hr>
            </div>
          </Grid>

          <Grid container direction="row">
            {difficultiesList.map((diff) => {
              return (
                <Grid item xs={4}>
                  <Container maxWidth="xs">
                    <div className="diff-container" key={`key_${diff}`}>
                      <a href={`/levelSelection/${diff}/${character}`}>
                        <div className="diff-item">
                          <img
                            className={diff === "Medium" ? "diff-img2" : "diff-img"}
                            src={dificultyToImg(diff)}
                            alt={`${diff}`}
                          />
                        </div>
                      </a>
                    </div>
                  </Container>
                </Grid>
              );
            })
            }
          </Grid>

          <Grid item xs={2}></Grid>
        </Grid>
      </div >
    );
};

export default LevelDifficulty;
