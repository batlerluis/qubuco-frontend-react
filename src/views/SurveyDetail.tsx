import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackBar from '../components/SnackBar';

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
  blank: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
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

export default function SurveyDetail(props: any) {
  const classes = useStyles();
  const [categoryId, setCategoryId] = React.useState(0);
  const [checked, setChecked] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<string[]>([]);
  const [questionIds, setQuestionIds] = React.useState('');
  const [questionScores, setQuestionScores] = React.useState('');
  const [scoreSum, setScoreSum] = React.useState(0);
  const [scoreCount, setScoreCount] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [surveys, setSurveys] = useState<any[]>([]);
  const [companyId, setCompanyId] = React.useState(0);
  const [companyName, setCompanyName] = React.useState('');
  const [companyLogo, setCompanyLogo] = React.useState('');
  const [ownerId, setOwnerId] = React.useState(0);

  const [snackOption, setSnackOption] = useState({
    type: "warning",
    msg: "Internal Error!"
  });
  const [snackStatus, setSnackStatus] = React.useState(false);

  const history = useHistory();

  const textRef = useRef();

  const dispatch = useDispatch();

  const snackInfo = useSelector((state: any) => state.snackInfo);

  useEffect(() => {
    const curUrl: string = window.location.href;
    let nodes: string[] = curUrl.split("/");
    let surveyId: string = nodes[nodes.length - 1];
    if (surveyId === "detail") {
      surveyId = "";
    }

    let isNew: boolean = false;
    if (surveyId.indexOf('@@') > 0) {
      isNew = true;
    } else {
      isNew = false;
    }

    const data = props.location.state;

    if (!surveyId || (isNew && !data)) {
      history.push('/home');

      return;
    }

    if (snackInfo.type && snackInfo.msg) {
      setSnackOption({
        type: snackInfo.type,
        msg: snackInfo.msg
      });
      setSnackStatus(true);

      dispatch({ type: 'SNACK', snackInfo: { type: '', msg: '' } });
    }

    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("token");

    axios.get(API_URL + '/api/survey/load/' + surveyId, {
      headers: {
        'email': email,
        'Authorization': `${token}`
      }
    })
      .then(function (response: any) {
        if (response.data.noUser) {
          dispatch({ type: 'SURVEYID_INPUT', surveyId: surveyId });
          history.push('/home/login', { surveyId: surveyId });

          return;
        }

        setLoaded(true);

        if (response.data.length > 0) {
          if (!isNew) {
            setCompanyId(response.data[0].company_id);
            setCompanyName(response.data[0].company_name);
            setCompanyLogo(response.data[0].logo);
            setOwnerId(response.data[0].user_id);
            setCategoryId(response.data[0].survey_user_type);
          } else {
            const surveyInfo:string[] = surveyId.split('@@');
            if (surveyInfo.length != 3) {
              history.push('/home');

              return;
            }

            setCompanyName(surveyInfo[1]);
            setCompanyLogo("DvP0JuNMrehWfzG1793520589.png");
            setCategoryId(parseInt(surveyInfo[2], 10));
          }
        } else {
          setSnackOption({
            type: "error",
            msg: "No match surveys!"
          });

          setSnackStatus(true);

          return;
        }

        setSurveys(response.data);
      })
      .catch(function (error: any) {
        setLoaded(true);
        console.log(error);
      });
  }, []);

  let questionKind: string = "";
  let surveyName: string = "";
  if (loaded) {
    if (surveys.length <= index) {
      questionKind = "final";
    } else {
      questionKind = surveys[index].kind_of_question;
      surveyName = surveys[index].survey_name;
      if (!surveyName) {
        if (categoryId === 1) {
          surveyName = "Empleados";
        } else if (categoryId === 2) {
          surveyName = "Proveedores";
        } else if (categoryId === 3) {
          surveyName = "Clientes";
        }
      }
    }
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
    let questionIds_temp = questionIds;
    if (questionIds.length > 0) {
      questionIds_temp += ",";
    }
    setQuestionIds(questionIds_temp + surveys[index].question_id);

    let questionScores_temp = questionScores;
    if (questionScores.length > 0) {
      questionScores_temp += ",";
    }
    setQuestionScores(questionScores_temp + val);

    setScoreSum(scoreSum + val);
    setScoreCount(scoreCount + 1);

    let newArray = [...answers];
    newArray[index] = val;
    setAnswers(newArray);

    setIndex(index + 1);
  }

  const SelectPositive = (val: string) => {
    let questionIds_temp = questionIds;
    if (questionIds.length > 0) {
      questionIds_temp += ",";
    }
    setQuestionIds(questionIds_temp + surveys[index].question_id);

    let questionScores_temp = questionScores;
    if (questionScores.length > 0) {
      questionScores_temp += ",";
    }
    let score: any;
    if (val === "yes") {
      score = 5;
    } else {
      score = 2;
    }
    setQuestionScores(questionScores_temp + score);

    setScoreSum(scoreSum + score);
    setScoreCount(scoreCount + 1);

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
    for (let i = 0; i < surveys.length; i++) {
      question += surveys[i].question;
      if (i < surveys.length - 1) {
        question += '@#';
      }
    }

    let answer: string = '';
    for (let i = 0; i < answers.length; i++) {
      answer += answers[i];
      if (i < answers.length - 1) {
        answer += '@#';
      }
    }

    let score = scoreSum / scoreCount;
    let status: number;
    if (checked === true) {
      status = 0;
    } else {
      status = 1;
    }

    const email = sessionStorage.getItem("email");

    axios.put(API_URL + '/api/comment/add', {
      email: email,
      companyName: companyName,
      companyId: companyId,
      ownerId: ownerId,
      userType: categoryId,
      questions: question,
      answers: answer,
      comment: textVal.value,
      questionIds: questionIds,
      questionScores: questionScores,
      score: parseFloat(score.toString()).toFixed(2),
      status: status
    })
      .then(function (response: any) {
        console.log(response.data);

      })
      .catch(function (error: any) {
        console.log(error);
      });

    history.push('/survey/final');
  }

  const cardHeader = (
    <CardHeader
      avatar={
        <img src={`/images/${companyLogo}`} className={classes.avatar} />
      }
      action={
        <Card className={classes.return}>
          <IconButton aria-label="menu" onClick={() => OnBack(index - 1)}>
            <SettingsBackupRestoreIcon />Regresar
                </IconButton>
        </Card>
      }
      titleTypographyProps={{ variant: 'h5' }}
      title={companyName}
      subheaderTypographyProps={{ variant: 'h6' }}
      subheader={surveyName}
    />
  );
  let cardBody;

  if (loaded === false) {
    cardBody = (
      <div className={classes.blank}>
        <CircularProgress />
      </div>
    )
  } else {
    if (questionKind === "Rating") {
      const val = parseInt(answers[index], 10);
      cardBody = (
        <div>
          {cardHeader}

          <CardContent>
            <Typography variant="h6" color="textSecondary" component="p">
              {'Question ' + (index + 1)}
            </Typography>

            <LinearProgress variant="determinate" value={100 / questionCount * (index + 1)} className={classes.progBar} />

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
    } else if (questionKind === "Yes & No") {
      cardBody = (
        <div>
          {cardHeader}

          <CardContent>
            <Typography variant="h6" color="textSecondary" component="p">
              {'Question ' + (index + 1)}
            </Typography>

            <LinearProgress variant="determinate" value={100 / questionCount * (index + 1)} className={classes.progBar} />

            <Box component="fieldset" textAlign="center" mb={3} justifyContent="center" borderColor="transparent">
              <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.description}>
                {surveys[index].question}
              </Typography>

              <Grid container direction="column" className={classes.btnGroup}>
                <Button variant="contained" color="primary" onClick={() => SelectPositive("yes")} className={classes.btnClient}>Si</Button>
                <Button variant="contained" color="inherit" onClick={() => SelectPositive("no")} className={classes.btnProvider}>No</Button>
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
    } else if (questionKind === "Multiple Question") {
      const answer: string = surveys[index].answer;
      const options: string[] = answer.split('@#');

      const buttonList = options.map((option, key) =>
        <Button variant="contained" color="primary" key={key} onClick={() => SelectMulti(option)} className={classes.btnClient}>{option}</Button>
      );
      cardBody = (
        <div>
          {cardHeader}

          <CardContent>
            <Typography variant="h6" color="textSecondary" component="p">
              {'Question ' + (index + 1)}
            </Typography>

            <LinearProgress variant="determinate" value={100 / questionCount * (index + 1)} className={classes.progBar} />

            <Box component="fieldset" textAlign="center" mb={3} justifyContent="center" borderColor="transparent">
              <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.description}>
                {surveys[index].question}
              </Typography>
              <Grid container direction="column" className={classes.btnGroup}>
                {buttonList}
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
    } else if (questionKind === "final") {
      cardBody = (
        <div>
          {cardHeader}

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
              control={<Checkbox value={checked} onChange={(event: any) => setChecked(event.target.checked)} className={classes.checkStyle} />}
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

    if (surveys.length === 0) {
      cardBody = (
        <Grid container direction="column" className={classes.blank}>
          <p style={{ fontSize: 24 }}>No hay encuestas.</p>
          <p style={{ fontSize: 24 }}>Por favor, vete a casa.</p>
        </Grid>
      )
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        {snackStatus == true ? <SnackBar setSnackStatus={setSnackStatus} type={snackOption.type} msg={snackOption.msg} /> : null}
        <Card className={classes.root}>
          {cardBody}
        </Card>
      </Grid>
    </ThemeProvider>
  );
}