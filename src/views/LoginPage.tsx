import React, { useState } from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Card, Tab, Tabs, OutlinedInput, Link, Checkbox, FormControlLabel, Button, GridList } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

const pageStyle = {
  wrapper: {
    flexGrow: 1,
    minHeight: "100vh",
    height: "auto",
    paddingTop: "120px",
    // background: "transparent linear-gradient(180deg, #FFFFFF 0%, #8A56AC 100%) 0% 0% no-repeat padding-box",
  },
  cardcontent: {
    padding: "20px",
    '& > div': {
      margin: "5px",
    },
  },
  fullHeight: {
    height: "100%",
  },
  bara: {
    fontSize: "30px",
  },
  lineItem: {
    width: "45%",
    // width: "700",?
  },
  forgot: {
    padding: "10px 0",
    "& > *": {
      color: "#8a56ac",
    }
  },
  checkStyle: {
    color: "#8a56ac !important",
  },
  facebookBtn: {
    display: "flex",
    paddingRight: "25px !important",
    justifyContent: "space-between",
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
  lineGroup: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  tabItem: {
    fontWeight: 500,
    fontSize: "22px",
    padding: "5px 0",
    margin: "0 20px",
    border: "none",
    '& > span: focus': {
      borderBottom: "2px solid #8a56ac",
    }
  },
  buttonbar: {
    width: "100%",
    display: "block",
    '& button': {
      width: "100%",
      margin: "10px 0",
      padding: "10px",
      border: "1px solid grey",
    },
  },
  buttonItem: {
    width: "100%",
    color: "white",
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
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#8a56ac"
                }
              }}
            >
              <Tab label="Ingresar" className={classes.tabItem}></Tab>
              <span className={classes.bara}>|</span>
              <Tab label="Registrarse" className={classes.tabItem}></Tab>
            </Tabs>
            <OutlinedInput fullWidth placeholder="Correo electrónico" />
            <OutlinedInput fullWidth placeholder="Contraseña" />
            <Grid container justify="space-between" >
              <FormControlLabel
                control={<Checkbox className={classes.checkStyle} checked={keepSigned} onChange={(event: any, newValue) => setSign(newValue)} />}
                label="Permanecer conectado"
              />
              <div className={classes.forgot}>
                <Link href="#" color="primary" onClick={(e: any) => e.preventDefault()}>Olvidé contraseña</Link>
              </div>
            </Grid>
            <div className={classes.buttonbar} >
              <Button className={classes.buttonItem}>Ingresar</Button>
              <div className={classes.lineGroup}>
                <div className={classes.lineItem}><hr /></div>
                <span>O</span>
                <div className={classes.lineItem}><hr /></div>
              </div>
              <Button className={classes.facebookBtn}><FacebookIcon color="primary" /><span>Facebook</span><span></span></Button>
            </div>
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