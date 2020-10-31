import React, { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import { Grid, Container, LinearProgress } from "@material-ui/core";
import "./LevelSelection.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";
import Like from "../Others/Like";
import { getAllByDifficulty, getUserLevelsCompleted } from "../../Utils/Api";
import { useParams } from "react-router";
import lvl1 from "../../Assets/levelNames/Easy_Level One.png";
import lvl2 from "../../Assets/levelNames/Easy_Level Two.png";
import lvl3 from "../../Assets/levelNames/Easy_Level Three.png";
import lvl4 from "../../Assets/levelNames/Easy_Level Four.png";
import lvl5 from "../../Assets/levelNames/Easy_Level Five.png";
import zeroStar from "../../Assets/stars/staticstars0.png";
import oneStar from "../../Assets/stars/staticstars1.png";
import twoStars from "../../Assets/stars/staticstars2.png";
import threeStars from "../../Assets/stars/staticstars3.png";

const LevelSelection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [levels, setLevels] = useState([]);
  const [levelsPlayed, setLevelsPlayed] = useState(null);
  const { difficulty } = useParams();
  const { character } = useParams();

  useEffect(() => {
    if (isLoading) {
      getAllByDifficulty(difficulty).then((response) => {
        setLevels(response.data);
      });
      getUserLevelsCompleted(localStorage.getItem("userName")).then((response) => {
        console.log(response)
        setLevelsPlayed(response.data)
        setIsLoading(false);
      });
    }
  });

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

  const determinateStars = (stars) => {
    switch (stars) {
      case 0:
        return zeroStar
      case 1:
        return oneStar
      case 2:
        return twoStars
      default:
        return threeStars
    }
  };

  const searchLevelStars = (idLevel) => {
    let stars = 0;
    let level = levelsPlayed.find(levelData => levelData.levelID === idLevel)
    if (level) stars = level.stars
    return stars;
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

          <Grid container item xs={12}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Grid cotnainer>
                <Container maxWidth="xs">
                  {
                    levels.map((l) => {

                      return (
                        <div className="lvl-container" >
                          <div key={`key_lvl_${l.levelId}`}>
                            <a href={`/level/${l.levelId}/${character}`}>
                              <div className="lvl-item">
                                <img
                                  href="/level"
                                  className="lvl-img"
                                  src={levelNameToImg(l.levelId)}
                                  alt={`${l.name}`}
                                />
                                <img
                                  className="lvl-stars"
                                  src={determinateStars(searchLevelStars(l.levelId))}
                                />
                              </div>
                            </a>
                          </div>

                        </div>
                      );
                    })
                  }
                </Container>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid >
      </div >
    );
};

export default LevelSelection;
