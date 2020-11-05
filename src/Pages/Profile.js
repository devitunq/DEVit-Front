import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Grid, LinearProgress } from '@material-ui/core';
=======
import ParticlesBg from "particles-bg";
import { Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
>>>>>>> e3d410e9522c1f8bcf364355848663208e6b14b8
import '../Pages/styles/Profile.css'
import LevelProgress from '../Components/Profile/LevelsProgress';
import ProfileItem from '../Components/Profile/ProfileItem';
import ProfileHeader from '../Components/Profile/ProfileHeader';
import { getUserCompletionProgress } from '../Utils/Api';
import Navbar from '../Components/Generics/Navbar'
<<<<<<< HEAD
import ParticlesBg from "particles-bg";
import LockIcon from '@material-ui/icons/Lock';

const Profile = () => {

  const [completionProgress, setCompletionProgress] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getUserCompletionProgress(localStorage.getItem("userName")).then((response) => {
        console.log(response)
        setCompletionProgress(response);
        setLoading(false);
      }).catch(e => console.log(e))
    };
  });

  return isLoading ? (
    <LinearProgress variant="indeterminate" />
  ) : (
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
                        value={completionProgress}
                        min={0}
                        max={100}
                      />
                    </Grid>
                  </Grid>


=======
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
>>>>>>> e3d410e9522c1f8bcf364355848663208e6b14b8
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={8}>
                    <LevelProgress
                      progressBarTitle="Porcentaje de juego completado: "
                      value={completion}
                      min={0}
                      max={100}
                    />
                  </Grid>
                </Grid>
              </Grid>
<<<<<<< HEAD

            </Grid>
          </Grid>
        </div >
      </div >
    )
};
=======
            </Grid>
          </Grid>
        </Grid>
      </div >
    </div >
  );
}
>>>>>>> e3d410e9522c1f8bcf364355848663208e6b14b8

export default Profile;
