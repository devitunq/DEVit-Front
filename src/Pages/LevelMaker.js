import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Navbar from "../Components/Generics/Navbar";
import Logo from "../Components/Generics/Logo";
import Gameboard from "../Components/Board/Gameboard";
import CharacterDefault from "../Assets/gameElements/character3.png";
import { Grid, Container, LinearProgress } from "@material-ui/core";
import "./styles/LevelMaker.css";

const boardSize = 7;
const emptyBoard = Array(boardSize)
  .fill()
  .map((_) => Array(boardSize).fill());

const LevelMaker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [grid] = useState(emptyBoard);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [currentType, setCurrentType] = useState(null);
  const [elements, setElement] = useState([]);

  const [wasPlayedSelected, setPlayedSeelcted] = useState(false);
  const [wasFinishSelected, setFinishSelected] = useState(false);


  const savePosition = (i, j) => {
    setCurrentPosition(i, j);
  };



  return (
    <div>
      <ParticlesBg type="circle" bg={true} />

      <Logo />

      <Grid container direction="column" spacing={10} justify="center">
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs={12}>
          <div className="contWelcome-diff">
            {`Cree su propio nivel`}
            <hr className="divider-diff"></hr>
          </div>
        </Grid>
      </Grid>

      <Grid container direction="row">
        <Container maxWidth="xl">
          <Gameboard
            savePosition={savePosition}
            clickeable
            character={CharacterDefault}
            grid={grid}
            paths={[]}
            objects={[]}
          />
        </Container>
      </Grid>
    </div>
  );
};

export default LevelMaker;
