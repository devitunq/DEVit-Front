import React from 'react';
import { Grid } from '@material-ui/core';
import '../Pages/styles/Profile.css'
import LevelProgress from '../Components/Profile/LevelsProgress';
import ProfileItem from '../Components/Profile/ProfileItem';
import ProfileHeader from '../Components/Profile/ProfileHeader';
import Navbar from '../Components/Generics/Navbar'
import ParticlesBg from "particles-bg";
import LockIcon from '@material-ui/icons/Lock';

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
                  icon={<LockIcon
                    style={{
                      width: "20%",
                      marginTop: "1%",
                      marginLeft: "10%",
                    }}
                  />}
                  detailTitle={"Contraseña: "}
                  detail="********"
                />
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={8}>
                  <LevelProgress
                    progressBarTitle="Porcentaje de juego completado: "
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
