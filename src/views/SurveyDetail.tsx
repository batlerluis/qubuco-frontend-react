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

const SurveyDetail = (props: any) => {

  const [currentTab, setTab] = useState(0);
  const [keepSigned, setSign] = useState(false);

  const { classes } = props;

  const handleChange = (event: any, newValue: number) => setTab(newValue);

  return (
    <Grid container className={classes.wrapper} justify="center" alignItems="center">
      <Grid item xs={12} sm={6} md={4}>
        <Card>

        </Card>
      </Grid>
    </Grid>
  );
}

SurveyDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pageStyle)(SurveyDetail);