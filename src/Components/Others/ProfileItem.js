import React from 'react';
import { Grid } from '@material-ui/core';
import "../Others/ProfileItem.css";

const ProfileItem = ({ icon, detail, detailTitle }) => (
  <Grid item xs={6}>
    <div className="profileItem-label">{detailTitle}</div>
    <div className="profileItem-infoContainer">
      <Grid container>
        <Grid item xs={4}>
          {icon}
        </Grid>
        <Grid item xs={8}>
          <div className="profileItem-infoText">
            {detail}
          </div>
        </Grid>
      </Grid>
    </div>
  </Grid>
);

export default ProfileItem;