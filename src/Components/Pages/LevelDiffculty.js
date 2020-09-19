import React from "react";
import ParticlesBg from "particles-bg";
import { Grid, Container } from "@material-ui/core";
import "./LevelDifficulty.css"
import { Navbar } from "../Generics/Navbar";
import { Logo } from "../Generics/Logo"

const LevelDifficulty = () => {
  return (
    <div>
      <ParticlesBg type="circle" bg={true} />

      <ParticlesBg type="circle" bg={true} />

      <Logo />

      <Grid container direction="column" spacing={10} justify="center">
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs="12">
          <div className="diff-container">
            sfafsa
            </div>
        </Grid>


      </Grid>
    </div>

  )
}

export { LevelDifficulty };
