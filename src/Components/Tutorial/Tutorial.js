import React, { Fragment } from "react";
import { Modal, Grid, Container } from "@material-ui/core";

const Tutorial = ({ open, close }) => (
  <Modal id={"modalLevel"} open={open} onClose={close}>
    <Fragment>
      <Grid container direction="row" spacing={10} justify="center">
        <Grid item xs={4}>




        </Grid>
        <Grid item xs={4}>




        </Grid>
        <Grid item xs={4}>




        </Grid>
      </Grid>
    </Fragment>
  </Modal>
);
export default Tutorial;