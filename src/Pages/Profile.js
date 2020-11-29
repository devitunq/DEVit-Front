import React, { useState, useEffect } from 'react';
import ParticlesBg from "particles-bg";
import { Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import '../Pages/styles/Profile.css'
import LevelProgress from '../Components/Profile/LevelsProgress';
import ProfileItem from '../Components/Profile/ProfileItem';
import ProfileHeader from '../Components/Profile/ProfileHeader';
import Navbar from '../Components/Generics/Navbar'
import { getCompletionProgress } from "../Utils/Api";

const Profile = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    getCompletionProgress(localStorage.getItem("userName")).then((response) => {
      setCompletion(response.data);
    });
  });

  return (
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
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={8}>
                    <LevelProgress
                      progressBarTitle="Porcentaje de juego completado: "
                      value={completion}
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
}

export default Profile;
