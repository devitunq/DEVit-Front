import React from 'react';
import { Grid } from '@material-ui/core';
import "../Others/ProfileItem.css";

const ProfileItem = ({ icon, detail, detailTitle }) => (
  <Grid item xs={6}>
    <div className="profileItem-label">{detailTitle}</div>
    <div style={{ textAlign: !icon ? "center" : "left" }} className="profileItem-infoContainer">
      <Grid container>
        {icon &&
          <Grid item xs={4}>
            {icon}
          </Grid>
        }
        <Grid item xs={icon ? 8 : 12}>
          <div style={{ marginLeft: !icon ? "-18px" : "18px" }} className="profileItem-infoText">
            {detail}
          </div>
        </Grid>
      </Grid>
    </div>
  </Grid>
);

export default ProfileItem;