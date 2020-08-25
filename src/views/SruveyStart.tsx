import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import imgLog from "../assets/img/car.png"
import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/purple';


const useStyles = makeStyles((theme) => ({

  root: {
    maxWidth: 400,
    minWidth: 330,
    maxHeight: 560,
    padding: "70px 60px 50px",
    margin: "120px auto",
    boxShadow: "0px 5px 10px #00000029;",
    border: "2px solid #EEEEEE",
    borderRadius: "9px",
    opacity: 1,
    action: {
      margin: 0,
    }
    // boxShadow: "",
  },
  btnGroup: {
    padding: '10px 0', // 16:9
    '& > *': {
      padding: "10px 0",
      margin: "10px 0",
      fontSize: "18px",
      lineHeight: "2.2em",
      color: "#ffffff",
    }
  },
  checkStyle: {
    color: "#8a56ac !important",
    padding: "10px",
  },
  btnClient: {
    backgroundColor: "#8a56ac !important",
    opacity: 0.8,
    "&:hover": {
      opacity: 1
    },
  },
  btnEmployee: {
    backgroundColor: "#D47FA6 !important",
    opacity: 0.8,
    "&:hover": {
      opacity: 1
    },
  },
  btnProvider: {
    backgroundColor: "#998FA2 !important",
    opacity: 0.8,
    "&:hover": {
      opacity: 1
    },
  },
  formCtl: {
    marginBottom: "40px",
  },
  checkout: {
    // backgroundColor: "#8a56ac",
    color: "#8a56ac",
  },
  comment: {
    width: "100%",
    height: "150px",
    fontSize: "20px",
    padding: "15px"
  },
  skip: {
    maxWidth: 101,
    float: "right",
    minWidth: 100,
    maxHeight: 36,
    minHeight: 35,
    '& > *': {
      padding: "7px 15px",
      margin: "auto",
      fontSize: "16px",
    },
    // margin: "120px auto",
    boxShadow: "0px 2px 5px #00000029;",
    border: "1px solid #EEEEEE",
    borderRadius: "5px",
    opacity: 1,
    margin: "10px",
  },
  rating: {
    margin: "20px 0",
    fontSize: "45px",
  },
  description: {
    margin: "10px 0 40px",
    // fontSize: "45px",
  },
  progBar: {
    backgroundColor: "#F0E6FF",
    height: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    '& *': {
      borderRadius: "5px",
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  return: {
    maxWidth: 101,
    minWidth: 100,
    maxHeight: 36,
    minHeight: 35,
    '& > *': {
      padding: "5px",
      margin: "auto",
      fontSize: "16px",
    },
    // margin: "120px auto",
    boxShadow: "0px 2px 5px #00000029;",
    border: "1px solid #EEEEEE",
    borderRadius: "5px",
    opacity: 1,
    margin: "10px",
  },
  avatar: {
    // backgroundColor: red[500],
    backgroundImage: "url()",
    width: "70px",
    height: "70px",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(2);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const SelectType = (nType: number) => {
    console.log(nType);
  };

  return (
      <Grid container>
        <AppBar position="static" color="inherit">
          <Toolbar variant="dense">
            <IconButton edge="start" aria-label="menu">
              <ArrowBackIosIcon />SALIR
            </IconButton>
          </Toolbar>
        </AppBar>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <img src={imgLog} className={classes.avatar} />
            }
            titleTypographyProps={{ variant: 'h5' }}
            title="Company Name"
            subheaderTypographyProps={{ variant: 'subtitle2' }}
            subheader="Escoge la opción que más se ajuste al comentario que harás sobre esta empresa."
          />
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              Quiero opinar esta empresa como:
          </Typography>
            <Grid container direction="column" className={classes.btnGroup}>
              <Button variant="contained" href="/survey/detail" onClick={() => SelectType(0)} className={classes.btnClient}>CLIENTE</Button>
              <Button variant="contained" href="/survey/detail" onClick={() => SelectType(1)} className={classes.btnEmployee}>EMPLEADO</Button>
              <Button variant="contained" href="/survey/detail" onClick={() => SelectType(2)} className={classes.btnProvider}>PROVEEDOR</Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
  );
}