import React from 'react';
import { withStyles, AppBar, Grid } from '@material-ui/core';
import PropTypes from "prop-types";

const headerStyle = {
  root: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    color: "#717171",
    paddingLeft: 26,
    paddingRight: 29,
  },
  wrapper: {
    flexGrow: 1,
  },
  logo: {
    paddingRight: 150,
    color: "#202124",
  },
  rest: {
    flexGrow: 1,
  }
};

const MainHeader = (props: any) => {

  const { classes } = props;

  return (
    <AppBar className={classes.root}>
      <Grid container className={classes.wrapper}>
        <Grid item className={classes.logo} alignItems="center">QUBU</Grid>
        <Grid item className={classes.rest}>
          <Grid container justify="space-between">
            <Grid item>Comentar empresa</Grid>
            <Grid item>Qué es</Grid>
            <Grid item>Empresas</Grid>
            <Grid item>Contacto</Grid>
            <Grid item>Acceder</Grid>
            <Grid item>Acceder como empresa</Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <p>asdfasdfsdf</p> */}
      {/* <p>werwerwer</p> */}
    </AppBar>
  );
}

MainHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(MainHeader);
