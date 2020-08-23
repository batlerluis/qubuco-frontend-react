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
  fullHeight: {
    height: "100%",
  },
  paddingH1: {
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 30,
  },
  titleText: {
    font: "normal normal normal 46px/52px Helvetica Neue",
    letterSpacing: "-0.46px",
    color: "#202124",
    opacity: 1,
  },
  dscrText: {
    font: "normal normal normal 20px/25px Quicksand",
    letterSpacing: "-1px",
    color: "#707070",
    opacity: 1,
  },
};

const LoginPage = (props: any) => {

  const [currentTab, setTab] = useState(0);
  const [keepSigned, setSign] = useState(false);

  const { classes } = props;

  const handleChange = (event: any, newValue: number) => setTab(newValue);

  return (
    <Grid container className={classes.wrapper} justify="center" alignItems="center">
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <Grid container justify="center">
            <Tabs
              value={currentTab}
              onChange={handleChange}
              textColor="primary"
            >
              <Tab label="Ingresar"></Tab>
              <Tab label="Registrarse"></Tab>
            </Tabs>
            <OutlinedInput fullWidth placeholder="Correo electrónico" />
            <OutlinedInput fullWidth placeholder="Contraseña" />
            <Grid container justify="space-between">
              <FormControlLabel
                control={<Checkbox checked={keepSigned} onChange={(event: any, newValue) => setSign(newValue)} />}
                label="Permanecer conectado"
              />
              <Link href="#" color="primary" onClick={(e: any) => e.preventDefault()}>Olvidé contraseña</Link>
            </Grid>
            <Button>Ingresar</Button>
            <Button>Facebook</Button>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pageStyle)(LoginPage);