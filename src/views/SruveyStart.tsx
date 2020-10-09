import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom';
import SnackBar from '../components/SnackBar';
import { API_URL } from '../Config';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

  root: {
    maxWidth: 400,
    minWidth: 330,
    maxHeight: 560,
    padding: "70px 60px 50px",
    margin: "120px auto",
    boxShadow: "0px 5px 10px #00000029;",
    borderRadius: "9px",
    opacity: 1,
    action: {
      margin: 0,
    }
  },
  appBar: {
    // height: "70px",
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

export default function SurveyStart(props: any) {
  const classes = useStyles();
  const history = useHistory();
  const [companyInfo, setCompanyInfo] = useState({ id: 0, name: '', logo: '' });
  const data = props.location.state;

  const dispatch = useDispatch();

  const [snackOption, setSnackOption] = useState({
    type: "warning",
    msg: "Internal Error!"
  });

  const [snackStatus, setSnackStatus] = React.useState(false);

  const snackInfo = useSelector((state: any) => state.snackInfo);

  useEffect(() => {
    if (!data) {
      history.push('/home');

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

    if (data.companyInfo) {
      setCompanyInfo(data.companyInfo);
    }
  }, []);

  const SelectType = (nType: number) => {
    axios.post(API_URL + '/api/survey/select', {
      'companyId': companyInfo.id,
      'category': nType
    })
      .then(function (response: any) {
        console.log(response.data);
        const survey = response.data;
        let surveyId: string = "";
        if (!survey) {
          surveyId = "add@@" + companyInfo.name + "@@" + nType;
        } else {
          surveyId = survey.survey_id;
        }

        history.push('/survey/detail/' + surveyId, { select: 'select' });
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  return (
    <Grid container>
      {snackStatus == true ? <SnackBar setSnackStatus={setSnackStatus} type={snackOption.type} msg={snackOption.msg} /> : null}
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <img src={`/images/${companyInfo.logo}`} alt="Avatar" className={classes.avatar} />
          }
          titleTypographyProps={{ variant: 'h5' }}
          title={companyInfo.name}
          subheaderTypographyProps={{ variant: 'subtitle2' }}
          subheader="Escoge la opción que más se ajuste al comentario que harás sobre esta empresa."
        />

        <CardContent>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            Quiero opinar esta empresa como:
            </Typography>

          <Grid container direction="column" className={classes.btnGroup}>
            <Button variant="contained" onClick={() => SelectType(3)} className={classes.btnClient}>CLIENTE</Button>
            <Button variant="contained" onClick={() => SelectType(1)} className={classes.btnEmployee}>EMPLEADO</Button>
            <Button variant="contained" onClick={() => SelectType(2)} className={classes.btnProvider}>PROVEEDOR</Button>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}