import React, { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import { Grid, Container, LinearProgress } from "@material-ui/core";
import "./LevelSelection.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import { getAllByDifficulty } from "../../Services/LevelService";
import { useParams } from "react-router"


const LevelSelection = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [levels, setLevels] = useState([]);
  const [levelItems, setLevelItems] = useState([]);
  const { difficulty } = useParams();

  useEffect(() => {
    if (isLoading)
      getAllByDifficulty(difficulty).then((response) => {
        setLevels(response.data)
        levels.forEach((l) => {
          setLevelItems([...levelItems,
          <div className="diff-container">
            <hr className="diff-separator" />
            <a href="/level">
              <div className="diff-item">
                <img
                  href="/level"
                  className="lvl-img"
                  src={`/images/${l.levelId}.png`}
                  alt={`${l.name}`}
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
                {levelItems}
              </Container>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid>
      </div>
    )
};

export default LevelSelection;
