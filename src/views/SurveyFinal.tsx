import React, { useState } from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Card, Tab, Tabs, OutlinedInput, Link, Checkbox, FormControlLabel, Button } from '@material-ui/core';

const pageStyle = {
  wrapper: {
    flexGrow: 1,
    minHeight: "100vh",
    height: "auto",
    background: "transparent linear-gradient(180deg, #FFFFFF 0%, #8A56AC 100%) 0% 0% no-repeat padding-box",
    paddingTop: 120,
  },

};

const SurveyFinal = (props: any) => {

  const { classes } = props;

  return (
    <Grid container className={classes.wrapper} justify="center" alignItems="center">

    </Grid>
  );
}

SurveyFinal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pageStyle)(SurveyFinal);