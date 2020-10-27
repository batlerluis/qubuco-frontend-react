import React from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';

import TelegramIcon from '@material-ui/icons/Telegram';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PeopleIcon from '@material-ui/icons/People';

import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import "./HomeStyle.css";
import MainFooter from '../components/MainFooter';
import people from "../assets/img/people.png"
import Phone3 from "../assets/img/Phone3.png"
import horse from "../assets/img/horse.png"

const pageStyle = {
  wrapper: {
    paddingTop: 120,
    margin: "0 100px"
  },
  content: {
    height: "fit-content",
    marginBottom: 20
  },
  paddingH1: {
    marginBottom: 50,
    justifyContent: "center",
    position: "relative" as "relative",
    right: "-6.1em",
    transform: "scale(1.1)",
    alignItems: "center" as "center",
    "@media screen and (max-width: 962px)": {
      right: 0,
    }
  },
  paddingH2: {
    marginBottom: 50,
    justifyContent: "center",
    position: "relative" as "relative",
    right: "-6.1em",
    height: "100%",
    alignItems: "center" as "center",
    "@media screen and (max-width: 962px)": {
      right: 0,
    },
    "& > img": {
      height: "100%",
      "@media screen and (max-width: 1101px)": {
        height: "90%",
      },
    }
  },
  textBox: {
    alignItems: "flex-end",
    paddingTop: "30px",
    paddingRight: "2vw",
    "@media screen and (max-width: 962px)": {
      alignItems: "center",
    }
  },
  textBox1: {
    // alignItems: "center",
    paddingTop: "30px",
    backgroundColor: "#8a56ac",
    "@media screen and (max-width: 962px)": {
      alignItems: "center",
    }
  },
  iconGroup: {
    paddingRight: "4vw",
    "& > h1": {
      color: "#202124",
      fontSize: "3.8vw",
      minHeight: "2.4em",
      lineHeight: "1em",
      "@media screen and (max-width: 962px)": {
        fontSize: "46px"
      },
      "@media screen and (max-width: 425px)": {
        fontSize: "30px"
      }
    },
    "& > h2": {
      minHeight: "7em",
      color: "#707070",
      "@media screen and (max-width: 1400px)": {
        minHeight: "8.2em"
      },
      "@media screen and (max-width: 1101px)": {
        minHeight: "10em"
      }
      // lineHeight: "1em",
    },
    "& > div": {
      width: "100%",
      textAlign: "center",
    },
  },
  // progBar: {
  //   backgroundColor: "#F0E6FF",
  //   height: "30px",
  //   marginBottom: "15px",
  //   borderRadius: "5px",
  //   '& *': {
  //     borderRadius: "5px",
  //   },
  // },
  // content1: {
  //   height: "fit-content",
  //   backgroundColor: "#8a56ac"
  // },
  // fullHeight: {
  //   height: "100%",
  // },
  // search: {
  //   width: "80%",
  // },
  titleText: {
    letterSpacing: "-0.46px",
    fontSize: "3.9vw",
    fontWeight: 600,
    color: "#202124",
    opacity: 1,
    "font-width": "scaleY(0.95)",
    textAlign: "left" as "left",
    "@media screen and (max-width: 962px)": {
      fontSize: "46px"
    },
    "@media screen and (max-width: 425px)": {
      fontSize: "30px"
    }
    // "text-align": "center",
  },
  dscrText: {
    letterSpacing: "-1px",
    color: "#707070",
    fontSize: "2vw",
    opacity: 1,
    paddingBottom: 19,
    "@media screen and (max-width: 962px)": {
      fontSize: "30px"
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "20px"
    }
    // textAlign: "center" as "center",
  },
  titleText1: {
    letterSpacing: "-0.46px",
    fontSize: "3.9vw",
    margin: "4vw 0",
    fontWeight: 600,
    color: "#ffffff",
    opacity: 1,
    "font-width": "scaleY(0.95)",
    textAlign: "left" as "left",
    "@media screen and (max-width: 962px)": {
      fontSize: "46px"
    },
    "@media screen and (max-width: 425px)": {
      fontSize: "30px"
    }
  },
  contentText1: {
    color: "#ffffff",
    fontSize: "1.8vw",
    paddingTop: "30px",
    lineHeight: "1.3",
    "@media screen and (max-width: 962px)": {
      fontSize: "30px"
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "20px"
    }
  },
  // filterContent: {
  //   padding: 10,
  // },
  // addLink: {
  //   fontSize: '18px',
  //   fontWeight: 400,
  //   color: "#8A56AC"
  // },
  // linkContainer: {
  //   height: 130,
  //   alignItems: 'center'
  // },
  // horseImg: {
  //   // width: 380
  //   position: 'relative' as 'relative',
  //   left: "100%"
  // },
  btnClient: {
    backgroundColor: "#8a56ac !important",
    opacity: 1,
    "&:hover": {
      opacity: 0.8
    },
    width: "250px",
    height: 58,
    borderRadius: 29,
    margin: "1vw 0",
    // float: "right"
  },
  btnClient1: {
    backgroundColor: "#ffffff !important",
    opacity: 1,
    "&:hover": {
      opacity: 0.8
    },
    width: 250,
    height: 58,
    borderRadius: 29,
    // margin: "40 0",
    color: "#000000",
    marginLeft: "6vw",
    marginTop: "3vw",
    "@media screen and (max-width: 962px)": {
      marginLeft: 0,
    }
  },
  iconStyle: {
    fontSize: "10vw",
    width: "100%",
  },
  // thirdSection: {
  //   minHeight: "80vh",
  //   height: "auto",
  //   // backgroundImage: `url(${Phone3})`,
  //   backgroundPosition: 'left',
  //   backgroundRepeat: 'no-repeat',
  // },
  // roundItem: {
  //   width: 370,
  //   height: 80,
  //   borderRadius: 40
  // }
};

const Business = (props: any) => {
  const { classes } = props;
  return (
    <div>
      <div className={classes.wrapper}>
        <Grid container justify="center">
          <Grid container justify="center" className={classes.content}>
            <Grid item md={5}>
              <Grid container className={classes.textBox} direction="column" justify="center" alignItems="flex-start">
                <h1 className={classes.titleText}>Mide la satisfacción de tus clientes</h1>
                <h2 className={classes.dscrText}>Crea tu propia encuesta de satisfacción y conoce lo que opinan los clientes de tu empresa. Hazlo desde tu celular o web y compártelo en tus facturas, página web, counter, redes sociales o correo electrónico.</h2>
                <Button variant="contained" color="primary" className={classes.btnClient}>Comentar una empresa</Button>
              </Grid>
            </Grid>
            <Grid item md={7}>
              <Grid container className={classes.paddingH1} >
                <img src={people} alt="Can not load file!" width="100%" />
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.content1}>
            <Grid item md={7}>
              <Grid container className={classes.textBox1} direction="column" justify="flex-end" alignItems="flex-start">
                <h1 className={classes.titleText1}>Haz seguimiento al clima laboral</h1>
                <h2 className={classes.contentText1}>Evita encuestas de papel o correos spam! Con QUBU envía recordatorios automáticos al celular de tus empleados, recibe notificaciones de cada respuesta y diviértete con la interfaz amigable de nuestra app.</h2>
                <Button variant="contained" color="primary" className={classes.btnClient1}>Inicia ahora!</Button>
              </Grid>
            </Grid>
            <Grid item md={5}>
              <Grid container className={classes.paddingH2} alignContent="center" >
              {/* <Grid container alignContent="center" > */}
                <img src={Phone3} alt="Can not load file!" />
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="flex-start" alignItems="center" className={classes.thirdSection}>
            <Grid item md={7}>
              <Grid container className={classes.textBox} direction="column" justify="flex-end" alignItems="flex-start">
                <h1 className={classes.titleText}>Observa tu progreso</h1>
                <h2>Con nuestro sistema SMART-REVIEW, no tienes que preocuparte por análisis de encuestas. QUBU analiza las respuestas de los usuarios y entrega los resultados en tiempo real.</h2>
                <Button variant="contained" color="primary" className={classes.btnClient}>Comentar una empresa</Button>
              </Grid>
            </Grid>
            <Grid item md={5} >
              <Card className={classes.root}>
                <CardContent>
                  <List>
                    <ListItem>
                      <div>
                        <span></span>
                        <span>Clients</span>
                      </div>
                      <div>
                        <span>3.5</span>
                      </div>
                    </ListItem>
                    <LinearProgress variant="determinate" value={0.7} className={classes.progbar} />
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Grid container className={classes.horseImg} alignContent="center" >
                <img src={horse} alt="Can not load file!" />
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.content1}>
            <h1 className={classes.titleText1}>Obtiene más con PREMIUM</h1>
            <h2 className={classes.contentText1}>Implementa tu buzón PQRSF online; analiza y toma decisiones de mejora con las métricas que te da QUBU.</h2>
          </Grid>
          <Grid container justify="center" >
            <Grid item md={4} className={classes.iconGroup}>
              <TelegramIcon className={classes.iconStyle} />
              <h1>PQRSF Online</h1>
              <h2>Canaliza los comentarios de tus clientes, hazles seguimiento en una sola herramienta, y cuantifica tu progreso, semanal, mensual y anual.</h2>
              <div>
                <Button variant="contained" color="primary" className={classes.btnClient}>Ver más</Button>
              </div>
            </Grid>
            <Grid item md={4} className={classes.iconGroup} >
              <TrendingUpIcon className={classes.iconStyle} />
              <h1>Acceso a Estadísticas</h1>
              <h2>Un REVIEW es más que un comentario, es una tendencia. Con QUBU tienes acceso a estadísticas con las que puedes comparar tu progreso en cualquier momento.</h2>
              <div>
                <Button variant="contained" color="primary" className={classes.btnClient}>Ver más</Button>
              </div>
            </Grid>
            <Grid item md={4} className={classes.iconGroup} >
              <PeopleIcon className={classes.iconStyle} />
              <h1>Conoce tus empleados</h1>
              <h2>Un empleado motivado es eficaz. Abre tu red para que tus empleados te feliciten públicamente o comuniquen sus necesidades en privado.</h2>
              <div>
                <Button variant="contained" color="primary" className={classes.btnClient}>Ver más</Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <MainFooter />
    </div>
  );
}

Business.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pageStyle)(Business);