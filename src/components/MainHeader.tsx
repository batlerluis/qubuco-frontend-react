import React from 'react';
import { withStyles, AppBar, Grid, Button, Icon } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import TabList from '@material-ui/lab/TabList';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';

import imgLogo from "../assets/img/logo.png";

const pageRoutes = [
  { path: "/home/c", label: "Comentar empresa" },
  { path: "/home", label: "Qué es" },
  { path: "/home/a", label: "Empresas" },
  { path: "/home/b", label: "Contacto" },
];

const headerStyle = {
  root: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    color: "#717171",
    backgroundColor: "#ffffff",
    paddingLeft: 26,
    paddingRight: 29,
  },
  appBar: {
    height: "70px",
    background: "#FFFFFF 0% 0% no-repeat padding-box !important",
    boxShadow: "0px 3px 6px #00000029",
    opacity: 1,
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

  const logoIcon = () => <Icon> <img src={imgLogo} /> </Icon>

  return (
    <AppBar className={classes.root}>
      <Grid container className={classes.wrapper} alignItems="stretch">
        <Grid item className={classes.logo}>
          <Grid container alignItems="center" className={classes.fullHeight}>
            <Button><img src={imgLogo} />QUBU</Button>

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
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  // <AppBar position="static" color="inherit" className={classes.appBar}>
  //   <Toolbar>
  //     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
  //       <img src={imgLogo} />
  //     </IconButton>
  //     <Typography variant="h6" className={classes.title}>
  //       QUBU
  //     </Typography>
  //     <Grid container>
  //       <Link href="#"></Link>
  //     </Grid>
  //     <Button color="inherit">Login</Button>
  //   </Toolbar>
  // </AppBar>
  );
}

MainHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(MainHeader);
