import React, { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import { Grid, Container, LinearProgress } from "@material-ui/core";
import "./LevelSelection.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import { getAllByDifficulty } from "../../Services/LevelService";
import { useParams } from "react-router";
import lvl1 from "../../Assets/levelNames/Easy_Level One.png";
import lvl2 from "../../Assets/levelNames/Easy_Level Two.png";
import lvl3 from "../../Assets/levelNames/Easy_Level Three.png";
import lvl4 from "../../Assets/levelNames/Easy_Level Four.png";
import lvl5 from "../../Assets/levelNames/Easy_Level Five.png";

const LevelSelection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [levels, setLevels] = useState([]);
  const { difficulty } = useParams();

  const levelNameToImg = (levelStr) => {
    switch (levelStr) {
      case "Easy_Level One":
        return lvl1;
      case "Easy_Level Two":
        return lvl2;
      case "Easy_Level Three":
        return lvl3;
      case "Easy_Level Four":
        return lvl4;
      default:
        return lvl5;
    }
  };

  useEffect(() => {
    if (isLoading)
      getAllByDifficulty(difficulty).then((response) => {
        setLevels(response.data);
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
                <div className="lvl-container">{
                  levels.map((l) => {
                    console.log(l.levelId)
                    return (
                      <div key={`key_lvl_${l.levelId}`}>
                        <a href={`/level/${l.levelId}`}>
                          <div className="lvl-item">
                            <img
                              href="/level"
                              className="lvl-img"
                              src={levelNameToImg(l.levelId)}
                              alt={`${l.name}`}
                            />
                          </div>
                        </a>
                        <hr className="lvl-separator" />
                      </div>
                    );
                  })
                }
                </div>
              </Container>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid >
      </div >
    );
};

export default LevelSelection;
