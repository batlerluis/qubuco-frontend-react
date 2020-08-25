import React from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

import imgApple from "../assets/img/appstore.png";
import imgGoogle from "../assets/img/googlestore.png";
import imgPhone1 from "../assets/img/phone1.png"
import { useHistory } from 'react-router-dom';


const pageStyle = {
  wrapper: {
    minHeight: "100vh",
    height: "auto",
    background: "transparent linear-gradient(180deg, #FFFFFF 0%, #8A56AC 100%) 0% 0% no-repeat padding-box",
    paddingTop: 120,
  },
  content: {
    height: "fit-content",
  },
  fullHeight: {
    height: "100%",
  },
  paddingH1: {
    paddingLeft: 80,
    paddingRight: 80,
  },
  search: {
    paddingTop: 35,
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
    paddingBottom: 19,
  },
  addLink: {
    paddingTop: 25,
  },
};

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

// const imgPhone = "http://localhost:3000/phone.png";

const Home = (props: any) => {

  const { classes } = props;

  const history = useHistory();

  const handleLink = (event: any) => event.preventDefault();

  return (
    <Grid container className={classes.wrapper} justify="center">
      <Grid container justify="center" className={classes.content}>
        <Grid item sm={10} md={4} className={classes.paddingH1}>
          <Grid container direction="column" alignItems="flex-end" justify="space-between" className={classes.fullHeight}>
            <Grid item>
              <h1 className={classes.titleText}>Busca la empresa, califícala y deja tu comentario</h1>
              <h2 className={classes.dscrText}>Comparte tus experiencias con otros usuarios, y ayuda a nuestra comunidad a encontrar empresas de calidad.</h2>
              <Grid container alignItems="flex-end">
                <SearchIcon fontSize="large" />
                <Grid style={{ flexGrow: 1 }}>
                  <Autocomplete
                    className={classes.search}
                    id="free-solo-demo"
                    options={top100Films.map((option) => option.title)}
                    fullWidth
                    onChange={(event: object, value: any, reason: string) => history.push("/home/login")}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Ingresa el nombre de la em…"
                        margin="none"
                        variant="standard"
                      />
                    )}
                  />
                </Grid>

              </Grid>

              <Grid container className={classes.addLink}>
                <Link className={classes.addLink} href="#" color="primary" onClick={(e: any) => handleLink(e)}>Agregar mi empresa a QUBU</Link>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid container justify="space-between">
                <Grid item>
                  <img src={imgApple} alt="Can not load image!" />
                </Grid>
                <Grid item>
                  <img src={imgGoogle} alt="Can not load image!" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={4} className={classes.paddingH1}>
          <img src={imgPhone1} alt="Can not load image!" />
        </Grid>
      </Grid>
    </Grid>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pageStyle)(Home);