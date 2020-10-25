import React, { useState } from 'react';
import { makeStyles, AppBar, Grid, Button, Icon } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SnackBar from '../components/SnackBar';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Config';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import imgLogo from "../assets/img/logo.png";

const pageRoutes = [
  { path: "/home/comment", label: "Comentar empresa" },
  { path: "/home/whatisit", label: "Qué es" },
  { path: "/home/business", label: "Empresas" },
  { path: "/home/contact", label: "Contacto" },
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



export default function MainHeader(props: any) {
  const curUrl: string = window.location.href;

  const classes = useStyles();

  let location = useLocation();

  const [snackOption, setSnackOption] = useState({
    type: "warning",
    msg: "Internal Error!"
  });

  const [snackStatus, setSnackStatus] = React.useState(false);

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
    handleClose();
    console.log(path);
    history.push(path);
  }

  const email = sessionStorage.getItem('email');
  const token = sessionStorage.getItem('token');
  const loginText = email && token ? 'Salir' : 'Acceder';

  const OnAcceder = () => {
    handleClose();
    if (loginText === "Acceder") {
      history.push('/home/login');
    } else {
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('token');

      axios.get(API_URL + '/api/logout', {
        headers: {
          'email': email,
          'Authorization': token
        }
      })
        .then(function (response: any) {
          setSnackOption({
            type: "success",
            msg: 'Log out success!'
          });

          setSnackStatus(true);

          history.push('/home');
        })
        .catch(function (error: any) {
        });
    }

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

  let appBar;
  if (curUrl.indexOf('/survey/start') > 0 || curUrl.indexOf('/survey/detail') > 0) {
    appBar = (
      <AppBar position="static" color="inherit" className={classes.appBar} >
        <Toolbar variant="dense">
          <IconButton edge="start" href="/home" aria-label="menu">
            <ArrowBackIosIcon />SALIR
            </IconButton>
        </Toolbar>
      </AppBar>
    );
  } else {
    appBar = (
      <AppBar className={classes.appBar}>
        {/* <Grid container className={classes.wrapper} alignItems="stretch"> */}
        <Toolbar className={classes.container}>

          <Grid item className={classes.logo}>
            <Grid container alignItems="center" className={classes.fullHeight}>
              <Button href="http://onelink.to/yj9evv"><img alt="Avatar" src={imgLogo} />QUBU</Button>
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
            <Button onClick={() => OnAcceder()} className={classes.accessLink}>{loginText}</Button>
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
                  return <MenuItem key={key} onClick={() => OnClick(prop.path)}>{prop.label}</MenuItem>
                }
                return <MenuItem key={key} onClick={() => OnClick(prop.path)}>{prop.label}</MenuItem>
              })
            }
            <MenuItem onClick={() => OnAcceder()}>{loginText}</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <div>
      {appBar}
      {snackStatus == true ? <SnackBar setSnackStatus={setSnackStatus} type={snackOption.type} msg={snackOption.msg} /> : null}
    </div>
  );
}

