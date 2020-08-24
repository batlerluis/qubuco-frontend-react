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
    // background: "transparent linear-gradient(180deg, #FFFFFF 0%, #8A56AC 100%) 0% 0% no-repeat padding-box",
    paddingTop: 112,
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
    paddingBottom: 30
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
    background: "#222222 0% 0% no-repeat padding-box",
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
    width:200
  }
};
//box-shadow: "0px 0px 6px 9px #000029",
const SurveyFinal = (props: any) => {

  const { classes } = props;

  return (
    <Grid container className={classes.wrapper} justify="center">
      <Grid item sm={10} md={3} >
        <Grid container direction="column">
          <Grid item className={classes.titleGroup}>
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
                    <img src={imgLog} alt="Can not load image!"/>
                </Grid>
              </Grid>
              <Grid item className={classes.logGroup}><p className={classes.qubuText}>QUBU<CopyrightIcon style={{ fontSize: 10 }}></CopyrightIcon></p></Grid>
              <Grid item>
                <Grid container className={classes.buttonGroup} justify="space-around">
                  <img src={imgApple1} alt="Can not load image!"/>
                  <img src={imgGoogle1} alt="Can not load image!"/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={10} md={3}>
        <Grid container justify="flex-end">
          <img src={imgPhone2} alt="Can not load image!" />
        </Grid>
      </Grid>

      {/* <Grid container justify="center" className={classes.content}>
        <Grid item></Grid>
        <Grid container justify="center" className={classes.leftPart}>
          <Grid item className={classes.titleGroup}>
            <h1 className={classes.titleText}>Gracias! Hemos</h1>
            <h1 className={classes.titleText}>recibido tus</h1>
            <h1 className={classes.titleText}>comentarios</h1>
          </Grid>
          <Grid item className={classes.dscrGroup}>
            <h3 className={classes.dscrText}>Mira tu opinión y la de otros usuarios en</h3>
            <h3 className={classes.dscrText}>nuestra app. Califica, Comenta y Gana</h3>
            <h3 className={classes.dscrText}>cupones de descuento por tus comentarios.</h3>
          </Grid>
          <Grid container justify="center" className={classes.downloadGroup}>
            <h2>Descárgala ahora!</h2>
            <Grid item className={classes.logContainer}>
              <img src={imgLog} alt="Can not load image!" />
            </Grid>
            <Grid container direction="column">
              <p className={classes.qubuText}>QUBU</p>
              <CopyrightIcon></CopyrightIcon>
            </Grid>
            <Grid item>
              <img src={imgApple2} alt="Can not load image!" className={classes.ImgSize} />
              <img src={imgGoogle2} alt="Can not load image!" className={classes.ImgSize} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={4} className={classes.paddingH1}>
          <img src={imgPhone2} alt="Can not load image!" />
        </Grid>
      </Grid> */}
    </Grid>
  );
}

SurveyFinal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pageStyle)(SurveyFinal);