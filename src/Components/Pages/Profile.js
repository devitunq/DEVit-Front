import React from 'react';
import {
  Grid, List, LinearProgress, ListItem, ListItemText, Divider
} from '@material-ui/core';
import '../Pages/Profile.css'
import LevelProgress from '../Others/LevelsProgress';
import ProfileItem from '../Others/ProfileItem';
import ProfileHeader from '../Others/ProfileHeader';
import Navbar from '../Generics/Navbar'
import ParticlesBg from "particles-bg";

const Profile = () => (

  <div className="profile-container">

    <ParticlesBg type="circle" bg={true} />

    <Navbar />

    <div className="profile-cont">
      <Grid container direction="row" spacing={8}>
        <ProfileHeader />

        <Grid container spacing={8}>
          <Grid item xs={8}>

            <Grid item xs={12}>
              <Grid container spacing={8}>
                <ProfileItem
                  detailTitle="Nombre de usuario: "
                  detail={localStorage.getItem("userName")}
                />
                <ProfileItem
                  detailTitle={"Nick: "}
                  detail={localStorage.getItem("nick")}
                />
                <ProfileItem
                  detailTitle={"Contraseña: "}
                  detail="********"
                />
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={8}>
                  <LevelProgress
                    progressBarTitle="Porcentaje de juego completado"
                    value={30}
                    min={0}
                    max={100}
                  />
                </Grid>
              </Grid>


            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </div >
  </div >
);

export default Profile;
