import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import SnackBar from '../components/SnackBar';
import "./HomeStyle.css";

import imgApple from "../assets/img/appstore.png";
import imgGoogle from "../assets/img/googlestore.png";
import imgPhone1 from "../assets/img/phone1.png"
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../Config';

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
    textAlign: "left" as "left",
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
    textAlign: "left" as "left",
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

const filter = createFilterOptions();

const Home = (props: any) => {

  const [companies, setCompanies] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  const [snackOption, setSnackOption] = useState({
    type: "warning",
    msg: "Internal Error!"
  });

  const [snackStatus, setSnackStatus] = React.useState(false);

  const snackInfo = useSelector((state: any) => state.snackInfo);

  useEffect(() => {
    if (loaded) {
      return;
    }
    if (snackInfo.type && snackInfo.msg) {
      setSnackOption({
        type: snackInfo.type,
        msg: snackInfo.msg
      });
      setSnackStatus(true);

      console.log('after');

      dispatch({ type: 'SNACK', snackInfo: { type: '', msg: '' } });
    }
    axios.get(API_URL + '/api/company/load', {
    })
      .then(function (response: any) {
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
    if (!value) return;

    const companyName: string = value.company_name;
    const companyInfo = {
      id: value.company_id,
      name: companyName.trim(),
      logo: value.logo ? value.logo : "DvP0JuNMrehWfzG1793520589.png"
    };

    const localemail = localStorage.getItem('email');
    const email = sessionStorage.getItem('email');
    const token = sessionStorage.getItem('token');

    let header;
    if (localemail) {
      header = {
        headers: {
          'email': localemail,
        }
      };
    } else {
      header = {
        headers: {
          'email': email,
          'Authorization': token
        }
      };
    }

    axios.get(API_URL + '/api/checktoken', header)
      .then(function (response: any) {
        let userInfo: any = {};
        if (response.data.user) {
          userInfo = response.data.user;
        }

        if (response.data.passed === 1) {
          history.push("/survey/start", { companyInfo: companyInfo });

          return;
        }

        history.push('/home/login', { companyInfo: companyInfo });
      })
      .catch(function (error: any) {
      });
  }

  return (
    <div>
      {snackStatus === true ? <SnackBar setSnackStatus={setSnackStatus} type={snackOption.type} msg={snackOption.msg} /> : null}
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
                      selectOnFocus
                      options={companies.map((option: any) => option)}
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
                              <span hidden>
                                {option.company_id}
                              </span>
                              <span style={{ fontWeight: 700 }}>
                                {option.company_name}
                              </span>
                              <Typography variant="body2" color="textSecondary">
                                {option.location}
                              </Typography>
                              <span hidden>
                                {option.logo}
                              </span>
                            </Grid>
                          </Grid>
                        );
                      }}
                      renderInput={(params: any) => (
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
                    <img src={imgApple} alt="Can not load file!" />
                  </Grid>
                  <Grid item>
                    <img src={imgGoogle} alt="Can not load file!" />
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
          </Grid>

          <Grid item md={4} sm={8}>
            <Grid container className={classes.paddingH1} alignContent="center" >
              <Grid item>
                <img src={imgPhone1} alt="Can not load file!" />
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pageStyle)(Home);