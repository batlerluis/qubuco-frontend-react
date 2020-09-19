import React, { useEffect, useState, useRef } from 'react';
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
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import imgLog from "../assets/img/car.png"
import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/purple';
import { API_URL } from '../Config';
import axios from 'axios';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles((theme) => ({

  root: {
    width: 450,
    minHeight: 480,
    padding: "20px 25px",
    margin: "120px auto",
    boxShadow: "0px 5px 10px #00000029;",
    border: "2px solid #EEEEEE",
    borderRadius: "9px",
    opacity: 1,
    action: {
      margin: 0,
    }
  },
  appBar: {
    height: "70px",
    padding: "10px 0",
  },
  btnGroup: {
    padding: '10px 0',
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
  btnProvider: {
    backgroundColor: "#998FA2 !important",
    opacity: 0.8,
    "&:hover": {
      opacity: 1
    },
  },
  formCtl: {
    marginBottom: "50px !important",
  },
  comment: {
    width: "385px",
    fontSize: "20px",
    paddingTop: "15px",
    paddingLeft: "15px"
  },
  skip: {
    maxWidth: 101,
    float: "right",
    minWidth: 100,
    maxHeight: 36,
    minHeight: 35,
    '& > *': {
      padding: "7px 15px 7px 25px",
      margin: "auto",
      fontSize: "16px",
    },
    boxShadow: "0px 2px 5px #00000029;",
    border: "1px solid #EEEEEE",
    borderRadius: "5px",
    opacity: 1,
    margin: "10px",
  },
  rating: {
    margin: "60px 0",
    fontSize: "45px",
  },
  description: {
    margin: "10px 0 80px",
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
    boxShadow: "0px 2px 5px #00000029;",
    border: "1px solid #EEEEEE",
    borderRadius: "5px",
    opacity: 1,
    margin: "10px",
  },
  avatar: {
    backgroundImage: "url()",
    width: "70px",
    height: "70px",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<string[]>([]);

  const history = useHistory();

  const textRef = useRef();

  const surveys: any[] = useSelector((state: any) => {
    return state.survies
  });

  const companyId = useSelector((state: any) => {
    return state.companyId
  });

  const userId = useSelector((state: any) => {
    return state.userId
  });

  let questionKind: string;
  if (surveys.length == 0 || surveys.length <= index) {
    questionKind = "final";
  } else {
    questionKind = surveys[index].kind_of_question;
  }

  const questionCount: number = surveys.length;

  const OnBack = (val: number) => {
    if (val < 0) {
      // history.back();
      history.push('/survey/start');
    } else {
      setIndex(val);
    }
  }

  const SelectRating = (val: any) => {
    let newArray = [...answers];
    newArray[index] = val;
    setAnswers(newArray);

    setIndex(index + 1);
  }

  const SelectPositive = (val: string) => {
    let newArray = [...answers];
    newArray[index] = val;
    setAnswers(newArray);

    setIndex(index + 1);
  }

  const SelectMulti = (val: string) => {
    let newArray = [...answers];
    newArray[index] = val;
    setAnswers(newArray);

    setIndex(index + 1);
  }

  const OnConfirm = () => {
    const textVal: any = textRef.current;

    let question: string = '';
    for (let i = 0; i < surveys.length; i ++) {
      question += surveys[i].question;
      if (i < surveys.length - 1) {
        question += '@#';
      }
    }

    let answer: string = '';
    for (let i = 0; i < answers.length; i ++) {
      answer += answers[i];
      if (i < answers.length - 1) {
        answer += '@#';
      }
    }

    axios.put(API_URL + '/api/comment/add', {
      companyId: companyId,
      userId: userId,
      questions: question,
      answers: answer,
      comment: textVal.value
    })
      .then(function (response: any) {
        console.log(response.data);

      })
      .catch(function (error: any) {
        console.log(error);
      });
    
    history.push('/survey/final');
  }

  let cardBody;

  if (questionKind == "Rating") {
    const val = parseInt(answers[index], 10);
    cardBody = (
      <div>
        <CardHeader
          avatar={
            <img src={imgLog} className={classes.avatar} />
          }
          action={
            <Card className={classes.return}>
              <IconButton aria-label="menu" onClick={() => OnBack(index - 1)}>
                <SettingsBackupRestoreIcon />Regresar
              </IconButton>
            </Card>
          }
          titleTypographyProps={{ variant: 'h5' }}
          title="Company Name"
          subheaderTypographyProps={{ variant: 'h6' }}
          subheader="Survey Name"
        />

        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p">
            {'Question ' + (index + 1)}
          </Typography>

          <LinearProgress variant="buffer" value={100 / questionCount * (index + 1)} className={classes.progBar} />

          <Box component="fieldset" textAlign="center" mb={3} justifyContent="center" borderColor="transparent">
            <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.description}>
              {surveys[index].question}
            </Typography>
            <Rating
              name="simple-controlled"
              value={val}
              className={classes.rating}
              onChange={(event, newValue) => {
                SelectRating(newValue);
              }}
            />
          </Box>

          <Card className={classes.skip}>
            <IconButton aria-label="skip" onClick={() => setIndex(index + 1)}>
              Omitir<ArrowForwardIcon />
            </IconButton>
          </Card>
        </CardContent>
      </div>
    );
  } else if (questionKind == "Yes & No") {
    cardBody = (
      <div>
        <CardHeader
          avatar={
            <img src={imgLog} className={classes.avatar} />
          }
          action={
            <Card className={classes.return}>
              <IconButton aria-label="menu" onClick={() => OnBack(index - 1)}>
                <SettingsBackupRestoreIcon />Regresar
                </IconButton>
            </Card>
          }
          titleTypographyProps={{ variant: 'h5' }}
          title="Company Name"
          subheaderTypographyProps={{ variant: 'h6' }}
          subheader="Survey Name"
        />
        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p">
            {'Question ' + (index + 1)}
          </Typography>

          <LinearProgress variant="buffer" value={100 / questionCount * (index + 1)} className={classes.progBar} />

          <Box component="fieldset" textAlign="center" mb={3} justifyContent="center" borderColor="transparent">
            <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.description}>
              {surveys[index].question}
            </Typography>

            <Grid container direction="column" className={classes.btnGroup}>
              <Button variant="contained" color="primary" onClick={() => SelectPositive("yes")} className={classes.btnClient}>OPCIÓN POSITIVA</Button>
              <Button variant="contained" color="inherit" onClick={() => SelectPositive("no")} className={classes.btnProvider}>OPCIÓN NEGATIVA</Button>
            </Grid>
          </Box>

          <Card className={classes.skip}>
            <IconButton aria-label="skip" onClick={() => setIndex(index + 1)}>
              Omitir<ArrowForwardIcon />
            </IconButton>
          </Card>
        </CardContent>
      </div>
    )
  } else if (questionKind == "Multiple Question") {
    const answer: string = surveys[index].answer;
    const options: string[] = answer.split('@#');

    const buttonList = options.map((option) =>
      <Button variant="contained" color="primary" onClick={() => SelectMulti(option)} className={classes.btnClient}>{option}</Button>
    );
    cardBody = (
      <div>
        <CardHeader
          avatar={
            <img src={imgLog} className={classes.avatar} />
          }
          action={
            <Card className={classes.return}>
              <IconButton aria-label="menu" onClick={() => OnBack(index - 1)}>
                <SettingsBackupRestoreIcon />Regresar
              </IconButton>
            </Card>
          }
          titleTypographyProps={{ variant: 'h5' }}
          title="Company Name"
          subheaderTypographyProps={{ variant: 'h6' }}
          subheader="Survey Name"
        />

        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p">
            {'Question ' + (index + 1)}
          </Typography>

          <LinearProgress variant="buffer" value={100 / questionCount * (index + 1)} className={classes.progBar} />

          <Box component="fieldset" textAlign="center" mb={3} justifyContent="center" borderColor="transparent">
            <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.description}>
              {surveys[index].question}
            </Typography>
            <Grid container direction="column" className={classes.btnGroup}>
              {buttonList}
              {/* <Button variant="contained" color="primary" onClick={() => SelectMulti("")} className={classes.btnClient}>OPCIÓN A</Button>
              <Button variant="contained" color="primary" onClick={() => SelectMulti("")} className={classes.btnClient}>OPCIÓN B</Button>
              <Button variant="contained" color="primary" onClick={() => SelectMulti("")} className={classes.btnClient}>OPCIÓN C</Button> */}
            </Grid>
          </Box>

          <Card className={classes.skip}>
            <IconButton aria-label="skip" onClick={() => setIndex(index + 1)}>
              Omitir<ArrowForwardIcon />
            </IconButton>
          </Card>
        </CardContent>
      </div>
    );
  } else if (questionKind == "final") {
    cardBody = (
      <div>
        <CardHeader
          avatar={
            <img src={imgLog} className={classes.avatar} />
          }
          action={
            <Card className={classes.return}>
              <IconButton aria-label="menu" onClick={() => OnBack(index - 1)}>
                <SettingsBackupRestoreIcon />Regresar
                </IconButton>
            </Card>
          }
          titleTypographyProps={{ variant: 'h5' }}
          title="Company Name"
          subheaderTypographyProps={{ variant: 'h6' }}
          subheader="Survey Name"
        />
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            Comparte tus experiencias con otros usuarios, y ayuda a nuestra comunidad a encontrar empresas de calidad.
          </Typography>

          <TextField
            id="outlined-multiline-static"
            placeholder="Escribe tu comentario…"
            multiline
            rows={5}
            inputRef={textRef}
            variant="outlined"
            className={classes.comment}
          />

          <FormControlLabel
            control={<Checkbox className={classes.checkStyle} />}
            label="Comentario privado"
            className={classes.formCtl}
          />

          <Grid container direction="column" className={classes.btnGroup}>
            <Button variant="contained" onClick={() => OnConfirm()} color="primary" className={classes.btnClient}>COMENTAR</Button>
          </Grid>
        </CardContent>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <AppBar position="static" color="inherit" className={classes.appBar} >
          <Toolbar variant="dense">
            <IconButton edge="start" href="/home" aria-label="menu">
              <ArrowBackIosIcon />SALIR
            </IconButton>
          </Toolbar>
        </AppBar>

        <Card className={classes.root}>
          {cardBody}
        </Card>
      </Grid>
    </ThemeProvider>
  );
}