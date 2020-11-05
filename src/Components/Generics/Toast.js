import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

const Toast = ({ content, open, handleClose, succes, width }) => (
  <Snackbar style={{ width: width ? width : "60%" }} open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={5000} onClose={handleClose}>
    <Alert style={{ width: "100%", fontSize: "15px" }} severity={succes ? "success" : "error"}>
      {content}
    </Alert>
  </Snackbar>
);

export default Toast;
