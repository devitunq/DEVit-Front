import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ParticlesBg from "particles-bg";
import { Grid, Container, LinearProgress } from "@material-ui/core";
import "./styles/LevelSelection.css";
import Navbar from "../Components/Generics/Navbar";
import Logo from "../Components/Generics/Logo";
import LikeAndDislike from "../Components/Others/LikeAndDislike";
import { getAllByDifficulty, getUserLevelsCompleted, postLevelScore } from "../Utils/Api";
import lvl1 from "../Assets/levelNames/Easy_Level One.png";
import lvl2 from "../Assets/levelNames/Easy_Level Two.png";
import lvl3 from "../Assets/levelNames/Easy_Level Three.png";
import lvl4 from "../Assets/levelNames/Easy_Level Four.png";
import lvl5 from "../Assets/levelNames/Easy_Level Five.png";
import zeroStar from "../Assets/stars/staticstars0.png";
import oneStar from "../Assets/stars/staticstars1.png";
import twoStars from "../Assets/stars/staticstars2.png";
import threeStars from "../Assets/stars/staticstars3.png";

const isUser = () => localStorage.getItem("userName") !== null;

const LevelSelection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [levels, setLevels] = useState([]);
  const [levelsPlayed, setLevelsPlayed] = useState([]);
  const [levelsScored, setLevelsScored] = useState([]);
  const [startingShowLevels, setStartingShowLevels] = useState(0);
  const [finishingShowLevels, setFinishShowLevels] = useState(4);
  const { difficulty } = useParams();
  const { character } = useParams();

  useEffect(() => {
    if (isLoading) {
      getAllByDifficulty(difficulty).then((response) => {
        setLevels(response.data);
      });
      if (isUser()) {
        getUserLevelsCompleted(localStorage.getItem("userName")).then((response) =>
          setLevelsPlayed(response.data)
        );
      };
      setIsLoading(false);
    };
  });

  const levelsToShow = difficulty !== "General" ? levels : levels.slice(startingShowLevels, finishingShowLevels + 1)

  const setNextPage = () => {
    if (finishingShowLevels + 5 <= levels.length + 4) {
      setStartingShowLevels(startingShowLevels + 5);
      setFinishShowLevels(finishingShowLevels + 5);
    };
  };

  const setPreviusPage = () => {
    if (startingShowLevels - 5 >= 0) {
      setStartingShowLevels(startingShowLevels - 5);
      setFinishShowLevels(finishingShowLevels - 5);
    };
  };

  const levelNameToImg = (levelStr) => {
    switch (levelStr) {
      case "Easy_Level One":
      case "Medium_Level One":
        return lvl1;
      case "Easy_Level Two":
      case "Medium_Level Two":
        return lvl2;
      case "Easy_Level Three":
      case "Medium_Level Three":
        return lvl3;
      case "Easy_Level Four":
      case "Medium_Level Four":
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

  const updateLikes = (level) => {
    level.likes++
  }

  const updateDislikes = (level) => {
    level.dislikes++
  }

  const onClickLike = (levelId) => {
    let lev = levels.find((l) => l.levelId === levelId);
    if (!lev.scoreFromAndLevel.includes(`${localStorage.getItem("userName")}_${levelId}`)
      && !levelsScored.includes(levelId)) {
      setLevelsScored([...levelsScored, levelId])
      postLevelScore(levelId, "Like", localStorage.getItem("userName"));
      let levelsUpdated = levels.map(level => {
        let l = level
        if (level.levelId === levelId) updateLikes(l)
        return l
      });
      setLevels(levelsUpdated);
    };
  };

  const onClickDislike = (levelId) => {
    let lev = levels.find((l) => l.levelId === levelId);
    if (!lev.scoreFromAndLevel.includes(`${localStorage.getItem("userName")}_${levelId}`)
      && !levelsScored.includes(levelId)) {
      setLevelsScored([...levelsScored, levelId])
      postLevelScore(levelId, "Dislike", localStorage.getItem("userName"));
      let levelsUpdated = levels.map(level => {
        let l = level
        if (level.levelId === levelId) updateDislikes(l)
        return l
      });
      setLevels(levelsUpdated);
    };
  };


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
              <div className="contWelcome-lvlSelection">
                {`Seleccione un nivel`}
                <hr className="divider-diff"></hr>
              </div>
              <Grid cotnainer>
                <Container maxWidth="xs">
                  {
                    levelsToShow.map((l) => {
                      if (!l.private) {
                        return (
                          <div className="lvl-container" >
                            <div key={`key_lvl_${l.levelId}`} data-testid={`selectLevel_${l.levelId}`}>
                              <a href={`/level/${l.levelId}/${character}`}>
                                <div className="lvl-item">
                                  <div className="center">
                                    {difficulty !== "General"
                                      ?
                                      <img
                                        href="/level"
                                        className="lvl-img"
                                        src={levelNameToImg(l.levelId)}
                                        alt={`${l.name}`}
                                      />
                                      : <div className="generalLevelName">{l.name}</div>
                                    }
                                    {
                                      isUser() &&
                                      <img
                                        className={difficulty !== "General" ? "lvl-stars" : "lvl-stars"}
                                        src={determinateStars(searchLevelStars(l.levelId))}
                                      />
                                    }
                                  </div>
                                </div>
                              </a>
                              {
                                isUser() &&
                                <LikeAndDislike
                                  likes={l.likes}
                                  dislikes={l.dislikes}
                                  onClickLike={() => onClickLike(l.levelId)}
                                  onClickDislike={() => onClickDislike(l.levelId)}
                                />
                              }
                            </div>

                          </div>
                        );
                      }
                    })
                  }
                  {difficulty === "General" &&
                    <div>
                      <div onClick={() => setPreviusPage()} className="lsback"> Anterior </div>
                      <div onClick={() => setNextPage()} className="lsnext"> Siguiente </div>
                    </div>}
                </Container>
              </Grid>
            </Grid>
            <Grid item xs={2}> </Grid>
          </Grid>
        </Grid >
      </div >
    );
};

export default LevelSelection;
