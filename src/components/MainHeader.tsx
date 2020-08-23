import React from 'react';
import { withStyles, AppBar, Grid, Button } from '@material-ui/core';
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';

const pageRoutes = [
  { path: "/home", label: "Comentar empresa" },
  { path: "/home/c", label: "Qué es" },
  { path: "/home/a", label: "Empresas" },
  { path: "/home/b", label: "Contacto" },
];

const headerStyle = {
  root: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    color: "#717171",
    paddingLeft: 26,
    paddingRight: 29,
  },
  wrapper: {
    minHeight: 70,
    // height: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  logo: {
    paddingRight: 150,
    color: "#202124",
  },
  rest: {
    flexGrow: 1,
  },
  navLink: {
    padding: "0px 20px",
    font: "normal normal normal 15px/17px Helvetica Neue",
    letterSpacing: -0.15,
    color: "#717171",
  },
  activeLink: {
    padding: "0px 20px",
    font: "normal normal medium 15px/17px Helvetica Neue",
    letterSpacing: -0.15,
    color: "#202124",
    borderBottom: "2px solid #8A56AC",
  },
  accessLink: {
    padding: "0px 20px",
    font: "normal normal normal 18px/22px Helvetica Neue",
    letterSpacing: -0.18,
    color: "#8A56AC",
  },
  companyLink: {
    background: "#8A56AC 0% 0% no-repeat padding-box",
    borderRadius: 2,
    padding: "12px 10px",
    font: "normal normal normal 18px/22px Helvetica Neue",
    letterSpacing: -0.18,
    color: "#FFFFFF",
  },
};



const MainHeader = (props: any) => {

  const { classes } = props;

  let location = useLocation();

  console.log(location);

  const activeRoute = (routeName: string) => {
    console.log(location.pathname);
    console.log(routeName);
    return location.pathname.indexOf(routeName) > -1 ? true : false;
  }

  return (
    <AppBar className={classes.root}>
      <Grid container className={classes.wrapper} alignItems="stretch">
        <Grid item className={classes.logo}>
          <Grid container alignItems="center" className={classes.fullHeight}>
            QUBU
          </Grid>
        </Grid>
        <Grid item className={classes.rest}>
          <Grid container justify="space-between" alignItems="stretch" className={classes.fullHeight}>
            {
              pageRoutes.map((prop, key) => {
                if (activeRoute(prop.path)) {
                  return <Button className={classes.activeLink} key={key}>{prop.label}</Button>
                }
                return <Button className={classes.navLink} key={key}>{prop.label}</Button>
              })
            }
            <Button className={classes.accessLink}>Acceder</Button>
            <Grid item>
              <Grid container alignItems="center" className={classes.fullHeight}>
                <Button className={classes.companyLink}>Acceder como empresa</Button>
              </Grid>
            </Grid>
            {/* <Button className={classes.navLink}>Comentar empresa</Button>
            <Button className={classes.navLink}>Qué es</Button>
            <Button className={classes.navLink}>Empresas</Button>
            <Button className={classes.navLink}>Contacto</Button>
            <Button className={classes.navLink}>Acceder</Button>
            <Button className={classes.navLink}>Acceder como empresa</Button> */}
            {/* <Grid item>Comentar empresa</Grid>
            <Grid item>Qué es</Grid>
            <Grid item>Empresas</Grid>
            <Grid item>Contacto</Grid>
            <Grid item>Acceder</Grid>
            <Grid item>Acceder como empresa</Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}

MainHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(MainHeader);
