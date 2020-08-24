import React, { useState } from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import {ButtonGroup, Grid, Card, Tab, Tabs, OutlinedInput, Link, Checkbox, FormControlLabel, Button, GridList } from '@material-ui/core';
import { NONAME } from 'dns';
const pageStyle = {
  
  wrapper: {
    flexGrow: 1,
    minHeight: "100vh",
    height: "auto",
    background: "transparent linear-gradient(180deg, #FFFFFF 0%, #8A56AC 100%) 0% 0% no-repeat padding-box",
  },
  cardcontent: {
    padding: "20px",
    '& div': {
      margin: "5px",
    }
  },
  fullHeight: {
    height: "100%",
  },
  forgot: {
    padding: "10px 0",
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
  tabItem: {
    fontWeight: 500,
    fontSize: "22px",
    border: "none",
    '& > span: focus': {
      borderBottom: "2px solid #8a56ac",
    }
  },
  buttonbar: {
    width: "100%",
    display: "block",
    '& *': {
      width: "100%",
      // borderRadius: "none"
    },
    // flexDirection: 'column',
  },
  buttonItem: {
    width: "100%",
    backgroundColor: "#8A56AC",
    "&:hover": {
      opacity: 0.9,
      backgroundColor: "#8A56AC",
    }
  }
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
          <Grid container justify="center" className={classes.cardcontent}>
            <Tabs
              value={currentTab}
              onChange={handleChange}
              textColor="primary"
            >
              <Tab label="Ingresar" className={classes.tabItem}></Tab>
              <Tab label="Registrarse" className={classes.tabItem}></Tab>
            </Tabs>
            <OutlinedInput fullWidth placeholder="Correo electrónico" />
            <OutlinedInput fullWidth placeholder="Contraseña" />
            <Grid container justify="space-between" >
              <FormControlLabel
                control={<Checkbox checked={keepSigned} onChange={(event: any, newValue) => setSign(newValue)} />}
                label="Permanecer conectado"
              />
              <div className={classes.forgot}>
                <Link href="#" color="primary" onClick={(e: any) => e.preventDefault()}>Olvidé contraseña</Link>
              </div>
            </Grid>
            {/* <GridList className={classes.buttonbar}>
              <Button className={classes.buttonItem}>Ingresar</Button>
              <Button className={classes.buttonItem}>Facebook</Button>
            </GridList> */}
            {/* <ButtonGroup
              orientation="vertical"
              color="primary"
              aria-label="vertical outlined primary button group"
              className={classes.buttonbar}
            > */}
            <div className={classes.buttonbar} >
              <Button className={classes.buttonItem}>Ingresar</Button>
              <Button >Facebook</Button>
            </div>
            {/* </ButtonGroup> */}
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