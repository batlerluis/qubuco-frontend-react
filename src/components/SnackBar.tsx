import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props: any) {
  const classes = useStyles();

  const handleClose = (event: object, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }

    props.setSnackStatus(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.type}>
          {props.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}