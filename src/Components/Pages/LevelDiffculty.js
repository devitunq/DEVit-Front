import React from "react";
import ParticlesBg from "particles-bg";
import { Grid, Container } from "@material-ui/core";
import "./LevelDifficulty.css";
import Navbar from "../Generics/Navbar";
import Logo from "../Generics/Logo";

const LevelDifficulty = () => {
  return (
    <div>
      <ParticlesBg type="circle" bg={true} />

      <Logo />

      <Grid container direction="column" spacing={10} justify="center">
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid container item xs={12}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Container maxWidth="xl">
              <div className="diff-container">
                <a href="/level">
                  <div className="diff-item">
                    <img href="/level" className="lvl-img" src={"/images/nivel-facil.png"} alt="easy" />
                  </div>
                </a>
                <hr className="diff-separator" />
                <a href="/level">
                  <div className="diff-item">
                    <img className="lvl-img" src={"/images/nivel-medio.png"} alt="medium" />
                  </div>
                </a>
                <hr className="diff-separator" />
                <a href="/level">
                  <div className="diff-item">
                    <img className="lvl-img" src={"/images/nivel-dificil.png"} alt="hard" />
                  </div>
                </a>
              </div>
            </Container>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LevelDifficulty;
