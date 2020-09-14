import React, { useEffect, useState } from 'react';
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
    fontSize: '18px',
    fontWeight: 400,
    color: "#8A56AC"
  },
  linkContainer: {
    height: 130,
    alignItems: 'center'
  }
};

interface Company {
  id: number;
  name: string;
  location: string;
}

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
  
  const [companies, setCompanies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // let companies: any;

  useEffect(() => {
    if (loaded) {
      return;
    }
    Axios.get('http://localhost:8000/api/company', {
      
    })
      .then(function (response: any) {
        console.log(response.data);
        // companies = JSON.parse(response.data);
        setCompanies(response.data);
        setLoaded(true);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  const { classes } = props;

  const history = useHistory();

  const handleLink = (event: any) => event.preventDefault();

  const OnCompanyChange = (event: object, value: any) => {
    if (value.location == 'Sé el primero en comentar sobre esta empresa') {
      console.log('AAAAAAAAAAAAAAAAAAAA');
    }

    history.push("/home/login");
  }

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
                    options={companies.map((option) => option)}
                    onChange={(event: object, value: any) => OnCompanyChange(event, value)}
                    filterOptions={(options: any, params: any) => {
                      const filtered = filter(options, params);

                      // Suggest the creation of a new value
                      if (params.inputValue !== '') {
                        filtered.push({
                          inputValue: params.inputValue,
                          company_name: `${params.inputValue} `,
                          location: "Sé el primero en comentar sobre esta empresa",
                        });
                      }
                      return filtered;
                    }}
                    getOptionLabel={(option: any) => option.company_name}
                    renderOption={(option: any) => {
                      return (
                        <Grid container className={classes.filterContent} alignItems="center">
                          <Grid item xs>
                            <span style={{ fontWeight: 700 }}>
                              {option.company_name}
                            </span>
                            <Typography variant="body2" color="textSecondary">
                              {option.location}
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

              <Grid container className={classes.linkContainer}>
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