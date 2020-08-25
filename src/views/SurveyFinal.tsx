import React, { useState } from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Card, Tab, Tabs, OutlinedInput, Link, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

import imgGoogle1 from "../assets/img/googlestore1.png";
import imgApple1 from "../assets/img/appstore1.png";
import imgPhone2 from "../assets/img/phone2.png"
import imgLog from "../assets/img/log.png"

const pageStyle = {
  wrapper: {
    flexGrow: 1,
    minHeight: "100vh",
    height: "auto",
    paddingTop: 112,
    '& > *': {
      padding: "20px 0",
    },
  },
  content: {
    height: "fit-content",
    paddingTop: 135,
    paddingLeft: 230
  },
  leftPart: {
    width: 390,
    height: 535,
  },
  fullHeight: {
    height: "100%",
  },
  titleGroup: {
    paddingBottom: 30,
  },
  dscrGroup: {
    height: 120,
    paddingBottom: 20
  },
  titleText: {
    font: "normal normal normal 46px/52px Helvetica Neue",
    letterSpacing: "-0.46px",
    color: "#202124",
    opacity: 1,
    margin: 0

  },
  dscrText: {
    font: "normal normal normal 20px/25px Quicksand",
    letterSpacing: "-1px",
    color: "#707070",
    opacity: 1,
    margin: 0
  },
  qubuText: {
    font: "bold normal normal 35px/45px Quicksand",
    letterSpacing: "-1px",
    color: "#000000",
    opacity: 1,
    margin: 0,
  },
  downloadGroup: {
    width: 195,
    height: 170,
  },
  logGroup: {
    paddingBottom: 15
  },
  logContainer: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 6px 9px #00000029",
    color: "#717171",
    width: 84,
    height: 84,
    opacity: 1,
  },
  downloadText: {
    font: "normal normal normal 25px/28px Helvetica Neue",
    letterSpacing: "-0.25px",
    color: "#202124",
    textShadow: "0px 6px 9px #00000029"
  },
  buttonGroup: {
    width: 200
  }
};

const SurveyFinal = (props: any) => {

  const { classes } = props;

  return (
    <Grid container justify-xs-space-between className={classes.wrapper}>
      <Grid md={2} sm={1}></Grid>
      <Grid item sm={9} md={4} >
        <Grid container  direction="column">
          <Grid item alignContent="center" className={classes.titleGroup}>
            <h1 className={classes.titleText}>Gracias! Hemos recibido tus comentarios</h1>
          </Grid>
          <Grid item className={classes.dscrGroup}>
            <h3 className={classes.dscrText}>Mira tu opinión y la de otros usuarios en nuestra app. Califica, Comenta y Gana cupones de descuento por tus comentarios.</h3>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item><h2 className={classes.downloadText}>Descárgala ahora!</h2></Grid>
              <Grid item className={classes.logGroup}>
                <Grid container className={classes.logContainer} alignItems="center" justify="center">
                  <img src={imgLog} alt="Can not load image!" />
                </Grid>
              </Grid>
              <Grid item className={classes.logGroup}><p className={classes.qubuText}>QUBU<CopyrightIcon style={{ fontSize: 10 }}></CopyrightIcon></p></Grid>
              <Grid item>
                <Grid container className={classes.buttonGroup} justify="space-around">
                  <img src={imgApple1} alt="Can not load image!" />
                  <img src={imgGoogle1} alt="Can not load image!" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid sm={1} md={1}></Grid>
      <Grid item sm={12} md={3}>
        <Grid container justify="center">
          <img src={imgPhone2} alt="Can not load image!" />
        </Grid>
      </Grid>
      <Grid md={2} sm={2}></Grid>
    </Grid>
  );
}

SurveyFinal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pageStyle)(SurveyFinal);