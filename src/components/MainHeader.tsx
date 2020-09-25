import React from 'react';
import { makeStyles, AppBar, Grid, Button, Icon } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import imgLogo from "../assets/img/logo.png";

const pageRoutes = [
  { path: "/home", label: "Comentar empresa" },
  { path: "/home/c", label: "Qué es" },
  { path: "/home/a", label: "Empresas" },
  { path: "/home/b", label: "Contacto" },
];

const useStyles = makeStyles({

  root: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    color: "#717171",
    backgroundColor: "#ffffff",
    paddingLeft: 26,
    paddingRight: 29,
  },
  appBar: {
    background: "#FFFFFF 0% 0% no-repeat padding-box !important",
    boxShadow: "0px 3px 6px #00000029",
    opacity: 1,
    width: "100%",
    height: "70px",
    padding: "5px 10px 5px 0",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "15px",
    paddingLeft: "15px",
    "&:after": {
      clear: "both"
    },
    minHeight: "50px"
  },
  fullHeight: {
    height: "100%",
  },
  logo: {
    color: "#202124",
    width: "150px",
  },
  navLink: {
    padding: "22px 20px",
    font: "normal normal normal 15px/17px",
    letterSpacing: -0.15,
    color: "#717171",
  },
  activeLink: {
    padding: "22px 20px",
    font: "normal normal medium 15px/17px ",
    letterSpacing: -0.15,
    color: "#202124",
    borderBottom: "2px solid #8A56AC",
  },
  accessLink: {
    padding: "0px 20px",
    font: "normal normal normal 18px/22px ",
    letterSpacing: -0.18,
    color: "#8A56AC",
  },
  companyLink: {
    background: "#8A56AC 0% 0% no-repeat padding-box",
    borderRadius: 2,
    padding: "12px 10px",
    font: "normal normal normal 18px/22px ",
    letterSpacing: -0.18,
    color: "#FFFFFF",
  },
});



export default function LoginPage(props: any) {

  const classes = useStyles();

  let location = useLocation();

  const activeRoute = (routeName: string) => {
    return location.pathname.indexOf(routeName) > -1 ? true : false;
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const history = useHistory();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const OnClick = (path: string) => {
    history.push(path);
  }

  // var list = () => {
  //   pageRoutes.map(item => {
  //     if (activeRoute(item.path)) {
  //       return <MenuItem onClick={handleClose}>{item.path}</MenuItem>
  //     }

  //     console.log(item.path);
  //     return <MenuItem onClick={handleClose}>{item.path}</MenuItem>
  //   })
  // }

  return (
    <AppBar className={classes.appBar}>
      {/* <Grid container className={classes.wrapper} alignItems="stretch"> */}
      <Toolbar className={classes.container}>

        <Grid item className={classes.logo}>
          <Grid container alignItems="center" className={classes.fullHeight}>
            <Button href="http://onelink.to/yj9evv"><img src={imgLogo} />QUBU</Button>
          </Grid>
        </Grid>
        
        <Hidden smDown>
          {
            pageRoutes.map((prop, key) => {
              if (activeRoute(prop.path)) {
                return <Button onClick={() => OnClick(prop.path)} className={classes.activeLink} key={key}>{prop.label}</Button>
              }
              return <Button onClick={() => OnClick(prop.path)} className={classes.navLink} key={key}>{prop.label}</Button>
            })
          }
          <Button className={classes.accessLink}>Acceder</Button>
          <Grid item>
            <Grid container alignItems="center" className={classes.fullHeight}>
              <Button className={classes.companyLink}>Acceder como empresa</Button>
            </Grid>
          </Grid>
        </Hidden>

        <Hidden mdUp>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
        </Hidden>
        
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {
            pageRoutes.map((prop, key) => {
              if (activeRoute(prop.path)) {
                return <MenuItem key={key} onClick={handleClose}>{prop.label}</MenuItem>
              }
              return <MenuItem key={key} onClick={handleClose}>{prop.label}</MenuItem>
            })
          }
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

