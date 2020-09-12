import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import "./HomeStyle.css";

import imgApple from "../assets/img/appstore.png";
import imgGoogle from "../assets/img/googlestore.png";
import imgPhone1 from "../assets/img/phone1.png"
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const pageStyle = {
  wrapper: {
    minHeight: "100vh",
    height: "auto",
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
    minWidth: 540,
    marginBottom: 50,
    justifyContent: "center",
  },
  search: {
    paddingTop: 35,
    width: "80%",
  },
  titleText: {
    // font: "normal normal normal 46px/52px Helvetica Neue",
    letterSpacing: "-0.46px",
    fontSize: "46px",
    fontWeight: 400,
    color: "#202124",
    opacity: 1,
    "font-width": "scaleY(0.95)",
    textAlign: "left"
  },
  filterContent: {
    padding: 10,
  },
  dscrText: {
    letterSpacing: "-1px",
    color: "#707070",
    fontSize: "20px",
    opacity: 1,
    paddingBottom: 19,
    textAlign: "left"
  },
  addLink: {
    paddingTop: 25,
    fontWeight: 400,
    color: "#8A56AC",
    fontSize: "18px"
  },
};

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994, year1: 'Belgium' },
  { title: 'The Godfather', year: 1972, year1: 'Australlia' },
  { title: 'The Godfather: Part II', year: 1974, year1: 'USA' },
  { title: 'The Dark Knight', year: 2008, year1: 'China' },
  { title: '12 Angry Men', year: 1957, year1: 'France' },
  { title: "Schindler's List", year: 1993, year1: 'Brazil' },
];

const filter = createFilterOptions();

const Home = (props: any) => {

  useEffect(() => {
    Axios.get('http://localhost:8000/api/company', {
      data: 'AutoComplete'
    })
      .then(function (response: any) {
        console.log(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  });

  const { classes } = props;

  const history = useHistory();

  const handleLink = (event: any) => event.preventDefault();

  return (
    <Grid container className={classes.wrapper} justify="center">
      <Grid container justify="center" className={classes.content}>
        <Grid item sm={7} md={4} className={classes.paddingH1}>
          <Grid container direction="column" alignItems="flex-end" justify="space-between" className={classes.fullHeight}>
            <Grid item>

              <h1 className={classes.titleText}>Busca la empresa, califícala y deja tu comentario</h1>
              <h2 className={classes.dscrText}>Comparte tus experiencias con otros usuarios, y ayuda a nuestra comunidad a encontrar empresas de calidad.</h2>

              <Grid container alignItems="center">
                <SearchIcon fontSize="large" />
                <Grid style={{ flexGrow: 1 }}>
                  <Autocomplete
                    className={classes.search}
                    id="free-solo-demo"
                    options={top100Films.map((option) => option)}
                    // fullWidth
                    onChange={() => history.push("/home/login")}
                    filterOptions={(options: any, params: any) => {
                      const filtered = filter(options, params);

                      // Suggest the creation of a new value
                      if (params.inputValue !== '') {
                        filtered.push({
                          inputValue: params.inputValue,
                          title: `${params.inputValue} `,
                          year: "Sé el primero en comentar sobre esta empresa",
                        });
                      }
                      return filtered;
                    }}
                    getOptionLabel={(option: any) => option.title}
                    renderOption={(option: any) => {
                      return (
                        <Grid container className={classes.filterContent} alignItems="center">
                          <Grid item xs>
                            <span style={{ fontWeight: 700 }}>
                              {option.title}
                            </span>
                            <Typography variant="body2" color="textSecondary">
                              {option.year}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {option.year1}
                            </Typography>
                          </Grid>
                        </Grid>
                      );
                    }}
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

              <Grid container>
                <Link href="#" className={classes.addLink} onClick={(e: any) => handleLink(e)}>Agregar mi empresa a QUBU</Link>
              </Grid>
            </Grid>

            <Grid container item>
              <Grid container justify="space-around">
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

        <Grid item md={4} sm={8}>
          <Grid container className={classes.paddingH1} alignContent="center" >
            <Grid item>
              <img src={imgPhone1} alt="Can not load image!" />
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pageStyle)(Home);