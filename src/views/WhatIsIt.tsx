import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Grid, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import SnackBar from '../components/SnackBar';
import "./HomeStyle.css";

import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Config';
import MainFooter from '../components/MainFooter';
import imgPhone1 from "../assets/img/whatisit_phone.png"
import imgPhoneBlur from "../assets/img/whatisit_phone_blur.png"
import imgBackground from "../assets/img/whatisit_back1.png"

const pageStyle = {
  wrapper: {
    minHeight: "100vh",
    height: "auto",
    paddingTop: 120,
    backgroundImage: `url(${imgBackground})`,
    // backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom'
  },
  content: {
    height: "fit-content",
    
  },
  content1: {
    height: "fit-content",
    backgroundColor: "#8a56ac"
  },
  fullHeight: {
    height: "100%",
  },
  paddingH1: {
    minWidth: 540,
    marginBottom: 50,
    justifyContent: "center",
  },
  search: {
    width: "80%",
  },
  titleText: {
    letterSpacing: "-0.46px",
    fontSize: "46px",
    fontWeight: 600,
    color: "#202124",
    opacity: 1,
    "font-width": "scaleY(0.95)",
    textAlign: "left" as "left",
  },
  titleText1: {
    letterSpacing: "-0.46px",
    fontSize: "46px",
    fontWeight: 600,
    color: "#ffffff",
    opacity: 1,
    "font-width": "scaleY(0.95)",
    textAlign: "left" as "left",
  },
  contentText1: {
    color: "#ffffff"
  },
  filterContent: {
    padding: 10,
  },
  dscrText: {
    letterSpacing: "-1px",
    color: "#707070",
    fontSize: "20px",
    opacity: 1,
    paddingBottom: 19,
    textAlign: "left" as "left",
  },
  addLink: {
    fontSize: '18px',
    fontWeight: 400,
    color: "#8A56AC"
  },
  linkContainer: {
    height: 130,
    alignItems: 'center'
  },
  textBox: {
    // width: 380
  },
  btnClient: {
    backgroundColor: "#8a56ac !important",
    opacity: 1,
    "&:hover": {
      opacity: 0.8
    },
    width: 250,
    height: 58,
    borderRadius: 29,
    marginTop: 40
  },
  btnClient1: {
    backgroundColor: "#ffffff !important",
    opacity: 1,
    "&:hover": {
      opacity: 0.8
    },
    width: 250,
    height: 58,
    borderRadius: 29,
    marginTop: 40,
    color: "#000000"
  },
  thirdSection: {
    minHeight: "80vh",
    height: "auto",
    backgroundImage: `url(${imgPhoneBlur})`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
  },
  roundItem: {
    width: 370,
    height: 80,
    borderRadius: 40
  }
};

const RoundItem = (props: any) => {
  const {color} = props;

  return (
    <div style={{width: 370, height: 80, borderRadius: 40, marginBottom: 30, backgroundColor: props.color}}></div>
  );
}

const WhatIsIt = (props: any) => {
  const { classes } = props;
  const [snackOption, setSnackOption] = useState({
    type: "warning",
    msg: "Internal Error!"
  });

  const [snackStatus, setSnackStatus] = React.useState(false);
  return (
    <div>
      {snackStatus == true ? <SnackBar setSnackStatus={setSnackStatus} type={snackOption.type} msg={snackOption.msg} /> : null}
      <Grid container className={classes.wrapper} justify="center">
        <Grid container justify="center" className={classes.content}>
          <Grid item md={1}></Grid>
          <Grid item md={6}>
            <Grid container className={classes.paddingH1} alignContent="center" >
              <img src={imgPhone1} alt="Can not load file!" width="100%" />
            </Grid>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={3}>
            <Grid container className={classes.textBox} direction="column" justify="flex-end" alignItems="flex-start">
              <p className={classes.titleText}>Recomienda Empresas</p>
              <p>QUBU es una red de calidad, donde puedes recomendar, felicitar, o compartir una opinión sobre las empresas con las que has tenido interacción, de manera pública (con otros usuarios) o privada (con la empresa).</p>
              <Button variant="contained" color="primary" className={classes.btnClient}>Comentar una empresa</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.content1}>
          <Grid item md={1}></Grid>
          <Grid item md={3}>
            <Grid container className={classes.textBox} direction="column" justify="flex-end" alignItems="flex-start">
              <p className={classes.titleText1}>Gana Descuentos</p>
              <p className={classes.contentText1}>Tu opinión es importante, por eso algunas empresas ofrecen cupones de descuento a los usuarios que independientemente de su experiencia; la comparten. Descarga la app y dirígete a la sección cupones.</p>
              <Button variant="contained" color="primary" className={classes.btnClient1}>Descargar la app</Button>
            </Grid>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={6}>
            <Grid container className={classes.paddingH1} alignContent="center" >
              <img src={imgPhone1} alt="Can not load file!" width="100%" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="flex-start" alignItems="center" className={classes.thirdSection}>
          <Grid item md={2}></Grid>
          <Grid item md={6}>
            <Grid container direction="column" justify="center">
              <RoundItem color="#8A56AC" text="CLIENTE"></RoundItem>
              <RoundItem color="#D47FA6" text=""></RoundItem>
              <RoundItem color="#998FA2"></RoundItem>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Grid container className={classes.textBox} direction="column" justify="flex-end" alignItems="flex-start">
              <p className={classes.titleText}>Recomienda Empresas</p>
              <p>QUBU es una red de calidad, donde puedes recomendar, felicitar, o compartir una opinión sobre las empresas con las que has tenido interacción, de manera pública (con otros usuarios) o privada (con la empresa).</p>
              <Button variant="contained" color="primary" className={classes.btnClient}>Comentar una empresa</Button>
            </Grid>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </Grid>
      <MainFooter />
    </div>
  );
}

WhatIsIt.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pageStyle)(WhatIsIt);