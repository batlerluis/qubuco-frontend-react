import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({

  root: {
    maxWidth: 550,
    padding: "100px 60px",
    margin: "120px auto",
    boxShadow: "0px 5px 10px #00000029;",
    border: "2px solid #EEEEEE",
    borderRadius: "9px",
    opacity: 1,
    '& > * > button:hover': {
      backgroundColor: "none",
      opacity: "0.9",
    },
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
  btnClient: {
    backgroundColor: "#8a56ac",
  },
  btnEmployee: {
    backgroundColor: "#D47FA6",
  },
  btnProvider: {
    backgroundColor: "#998FA2",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
          titleTypographyProps={{variant:'h5' }}
          title="Company Name"
          subheaderTypographyProps={{variant:'subtitle2' }}
          subheader="Escoge la opción que más se ajuste al comentario que harás sobre esta empresa."
        />
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            Quiero opinar esta empresa como:
          </Typography>
          <Grid container direction="column" className={classes.btnGroup}>
            <Button variant="contained" className={classes.btnClient}>CLIENTE</Button>
            <Button variant="contained" className={classes.btnEmployee}>EMPLEADO</Button>
            <Button variant="contained" className={classes.btnProvider}>PROVEEDOR</Button>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}