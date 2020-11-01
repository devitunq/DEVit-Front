import React from 'react';
import "./ProfileHeader.css";
import { Grid, Avatar } from '@material-ui/core';

const ProfileHeader = () => (
  <Grid item xs={12}>
    <Grid container>
      <Grid item xs={1}>
        <Avatar
          style={{
            backgroundColor: "#363b617",
            border: "white",
          }}
        >
        </Avatar>
      </Grid>
      <Grid item xs={4}>
        <h2 className="profile-title">Perfil</h2>
      </Grid>
    </Grid>
    <hr style={{ width: "40%", marginRight: "60%" }}></hr>
  </Grid>
);

export default ProfileHeader;