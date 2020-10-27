import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import imgYutube from '../assets/img/whatisit_youtube.png'
import imgLogo from '../assets/img/whatisit_logo.png'

const useStyles = makeStyles({
  root: {
    backgroundColor: "#8a56ac",
    height: "70px",
    justifyContent: 'space-around'
  },
  linkText: {
    color: '#ffffff',
    textAlign: 'left',
    font: 'italic normal normal 15px',
    letterSpacing: '-0.15px',
    opacity: 1,
    display: 'flex',
    alignItems: 'center'
  }
});

export default function MainFooter(props: any) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Link
        component="button"
        variant="body2"
        className={classes.linkText}
        onClick={() => {
          console.info("I'm a button.");
        }}>
        Políticas de privacidad
      </Link>
      <Link
        component="button"
        variant="body2"
        className={classes.linkText}
        onClick={() => {
          console.info("I'm a button.");
        }}>
        Términos del servicio
      </Link>
      <Link
        component="button"
        variant="body2"
        className={classes.linkText}
        onClick={() => {
          console.info("I'm a button.");
        }}>
        Empresas
      </Link>
      <Link
        component="button"
        variant="body2"
        className={classes.linkText}
        onClick={() => {
          console.info("I'm a button.");
        }}>
        Precios
      </Link>
      <Link
        component="button"
        variant="body2"
        className={classes.linkText}
        onClick={() => {
          console.info("I'm a button.");
        }}>
        Tutoriales
        <img src={imgYutube} alt="Can not load file!" />
      </Link>
      <Link
        component="button"
        variant="body2"
        className={classes.linkText}
        onClick={() => {
          console.info("I'm a button.");
        }}>
        <img src={imgLogo} alt="Can not load file!" />
        QUBU
      </Link>
    </Grid>
  )
}