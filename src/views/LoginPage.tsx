import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, Grid, Card, CardContent, CardHeader, Tab, Tabs, Button } from '@material-ui/core';
import axios, { AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';
import SnackBar from '../components/SnackBar';
import { API_URL } from '../Config';
import FacebookLogin from 'react-facebook-login';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: 330,
    maxHeight: 560,
    padding: "40px",
    margin: "200px auto",
    boxShadow: "0px 5px 10px #00000029;",
    border: "2px solid #EEEEEE",
    borderRadius: "9px",
    opacity: 1,
    position: "relative",
    justifyContent: "center",
    action: {
      margin: 0,
    }
  },
  formGroup: {
    width: "100%",
    '& > *': {
      margin: "5px 0",
    }
  },
  textInput: {
    width: "100%",
    '& label.Mui-focused': {
      color: '#8a56ac',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#8a56ac',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: '#000',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8a56ac',
      },
    },
  },
  seperator: {
    fontSize: "32px",
    margin: 0,
    position: "relative",
    top: "-60px",
    left: "48%",
    width: 0,
    "@media screen and (max-width: 600px)": {
      left: "45%",
    }
  },
  forgot: {
    color: "#8a56ac",
    fontSize: "16px",
    textAlign: "right" as "right",
  },
  checkBox: {
    color: "#8a56ac !important",
  },
  lineItem: {
    width: "45%",
  },
  facebookBtn: {
    display: "flex",
    color: "grey !important",
    backgroundColor: "white",
    paddingRight: "25px !important",
    justifyContent: "space-between",
  },
  lineGroup: {
    width: "100%",
    display: "flex",
    margin: "20px 0",
    justifyContent: "space-between",
    fontSize: '20px'
  },
  tabItem: {
    fontWeight: 500,
    fontSize: "22px",
    padding: "5px 0",
    margin: "0 20px",
    border: "none",
    textTransform: "none",
    '& > span: focus': {
      borderBottom: "2px solid #8a56ac",
    }
  },
  buttonbar: {
    width: "100%",
    display: "block",
    marginTop: "-10px",
    '& button': {
      color: "white",
      width: "100%",
      margin: "10px 0",
      padding: "10px",
      border: "1px solid grey",
      fontSize: "18px",
      textTransform: "none",
    },
  },
  buttonItem: {
    width: "100%",
    opacity: 1,
    backgroundColor: "#8A56AC",
    "&:hover": {
      opacity: 0.9,
      backgroundColor: "#8A56AC",
    }
  },
  passContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: '5px',
    paddingBottom: '15px',
  }
}));

export default function LoginPage(props: any) {
  const data = props.location.state;

  let companyInfo: any = {};
  let surveyId: string = "";

  if (data) {
    if (data.companyInfo) {
      companyInfo = data.companyInfo;
    }

    if (data.surveyId) {
      surveyId = data.surveyId;
    }
  }

  const [tabIndex, setTabIndex] = useState(0);
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [checked, setChecked] = useState(false);

  const [snackOption, setSnackOption] = useState({
    type: "warning",
    msg: "Internal Error!"
  });

  const [snackStatus, setSnackStatus] = React.useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleLogin = () => {
    axios.post(API_URL + '/api/login', {
      'email': email,
      'password': pass1,
      'remember': checked
    })
      .then(function (response: any) {
        console.log(response);
        if (response.data.error) {
          console.log("err");
          const errors: string[] = response.data.error;
          setSnackOption({
            type: "error",
            msg: errors[0]
          });
          setSnackStatus(true);

          return;
        }

        if (response.data.message) {
          console.log("msg");
          const msg: string = response.data.message
          setSnackOption({
            type: "error",
            msg: "Login Failed! " + msg
          });
          setSnackStatus(true);

          return;
        }

        if (checked) {
          localStorage.setItem("email", email);
        } else {
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("token", response.data.token);
        }

        dispatch({ type: 'SNACK', snackInfo: { type: 'success', msg: 'Log in Success!' } });

        if (surveyId) {
          history.push("/survey/detail/" + surveyId);

          return;
        }

        if (Object.keys(companyInfo).length === 0) {
          history.push("/home");
        } else {
          history.push("/survey/start", { companyInfo: companyInfo });
        }
      })
      .catch(function (error: any) {
      });
  }

  const handleFBLogin = (response: any) => {
    if (response.id) {
      axios.post(API_URL + '/api/fblogin', {
        'email': response.email,
        'id': response.id,
        'remember': checked
      })
        .then(function (response: any) {
          console.log(response);
          if (response.data.error) {
            console.log("err");
            const errors: string[] = response.data.error;
            setSnackOption({
              type: "error",
              msg: errors[0]
            });
            setSnackStatus(true);

            return;
          }

          if (response.data.message) {
            console.log("msg");
            const msg: string = response.data.message
            setSnackOption({
              type: "error",
              msg: "Login Failed! " + msg
            });
            setSnackStatus(true);

            return;
          }

          const userInfo = response.data.user;
          history.push("/survey/start", { companyInfo: companyInfo, userInfo: userInfo });
        })
        .catch(function (error: any) {
        });
    }
  }

  const handleFBRegister = (response: any) => {
    if (response.id) {
      axios.post(API_URL + '/api/fbregister', {
        'name': response.name,
        'email': response.email,
        'login_type': 'facebook',
        'facebook_id': response.id,
      })
        .then(function (response: AxiosResponse) {
          if (response.data.error) {
            let errors: string[] = response.data.error;
            setSnackOption({
              type: "error",
              msg: "Register Failed! " + errors[0]
            });
            setSnackStatus(true);

            return;
          }
          setTabIndex(0);
          setEmail('');
          setPass1('');
          setSnackOption({
            type: "success",
            msg: "Register Success!"
          });
          setSnackStatus(true);
        })
        .catch(function (error: any) {

        });
    }
  }

  const handleRegister = () => {
    axios.post(API_URL + '/api/register', {
      'name': name,
      'email': email,
      'password': pass1,
      'password_confirmation': pass2
    })
      .then(function (response: AxiosResponse) {
        if (response.data.error) {
          let errors: string[] = response.data.error;
          setSnackOption({
            type: "error",
            msg: "Register Failed! " + errors[0]
          });
          setSnackStatus(true);

          return;
        }
        setTabIndex(0);
        setEmail('');
        setPass1('');
        setSnackOption({
          type: "success",
          msg: "Register Success!"
        });
        setSnackStatus(true);
      })
      .catch(function (error: any) {

      });
  }

  const handleForgot = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    axios.post(API_URL + '/api/pass/forgot', {
      'email': email,
    })
      .then(function (response: AxiosResponse) {
        const data: any = response.data;

        if (data.error) {
          console.log("err");
          const errors: string[] = data.error;
          setSnackOption({
            type: "error",
            msg: errors[0]
          });
          setSnackStatus(true);

          return;
        }

        setSnackOption({
          type: data.type,
          msg: data.message
        });
        setSnackStatus(true);
      })
      .catch(function (error: any) {

      });
  }

  const OnTabChange = (event: object, value: any) => {
    setTabIndex(value);
    setName('');
    setEmail('');
    setPass1('');
    setPass2('');
  }

  let LogAndRegister;

  if (tabIndex === 0) {
    LogAndRegister = (
      <FormControl className={classes.formGroup}>

        <TextField
          label="Correo electrónico"
          variant="outlined"
          value={email}
          onChange={(event: any) => setEmail(event.target.value)}
          className={classes.textInput}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          value={pass1}
          onChange={(event: any) => setPass1(event.target.value)}
          className={classes.textInput}
        />

        <Grid container className={classes.passContainer}>
          {/* <FormControlLabel
            control={<Checkbox value={checked} onChange={(event: any) => setChecked(event.target.checked)} className={classes.checkBox} />}
            label="Permanecer conectado"
          /> */}
          <a href="" className={classes.forgot} onClick={(e) => handleForgot(e)}>Olvidé contraseña</a>
        </Grid>

        <Grid container className={classes.buttonbar} >
          <Button variant="contained" onClick={() => handleLogin()} className={classes.buttonItem}>Ingresar</Button>
          <Grid className={classes.lineGroup}>
            <Grid className={classes.lineItem}><hr /></Grid>
            <span>O</span>
            <Grid className={classes.lineItem}><hr /></Grid>
          </Grid>
          {/* <Button variant="contained" onClick={() => handleFBLogin()} className={classes.facebookBtn}><FacebookIcon color="primary" /><span>Facebook</span><span></span></Button> */}
          <FacebookLogin
            appId="687042532167808" //APP ID NOT CREATED YET
            fields="name,email,picture"
            callback={handleFBLogin}
          />
        </Grid>

      </FormControl>
    )
  } else {
    LogAndRegister = (

      <FormControl className={classes.formGroup}>
        <TextField
          label="Nombre"
          variant="outlined"
          value={name}
          onChange={(event: any) => setName(event.target.value)}
          className={classes.textInput}
        />
        <TextField
          label="Correo electrónico"
          variant="outlined"
          value={email}
          onChange={(event: any) => setEmail(event.target.value)}
          className={classes.textInput}
        />
        <TextField
          label="Contraseña"
          type="password"
          value={pass1}
          onChange={(event: any) => setPass1(event.target.value)}
          variant="outlined"
          className={classes.textInput}
        />
        <TextField
          label="Confirmar contraseña"
          type="password"
          value={pass2}
          variant="outlined"
          onChange={(event: any) => setPass2(event.target.value)}
          className={classes.textInput}
        />
        <br></br>
        <Grid container className={classes.buttonbar} >
          <Button variant="contained" onClick={() => handleRegister()} className={classes.buttonItem}>Ingresar</Button>
          <Grid className={classes.lineGroup}>
            <Grid className={classes.lineItem}><hr /></Grid>
            <span>O</span>
            <Grid className={classes.lineItem}><hr /></Grid>
          </Grid>
          {/* <Button variant="contained" onClick={() => handleRegister()} className={classes.facebookBtn}><FacebookIcon color="primary" /><span>Facebook</span><span></span></Button> */}
          <FacebookLogin
            appId="687042532167808" //APP ID NOT CREATED YET
            fields="name,email,picture"
            callback={handleFBRegister}
          />
        </Grid>

      </FormControl>
    );
  }

  return (

    <Grid container alignItems="center">
      {snackStatus === true ? <SnackBar setSnackStatus={setSnackStatus} type={snackOption.type} msg={snackOption.msg} /> : null}
      <Card className={classes.root}>
        <CardHeader
          titleTypographyProps={{ variant: 'h5' }}
          title={
            <Tabs
              value={tabIndex}
              centered
              onChange={OnTabChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#8a56ac",
                  height: "3px",
                  borderRadius: "2px",
                }
              }}
            >
              <Tab label="Ingresar" className={classes.tabItem}></Tab>
              <Tab label="Registrarse" className={classes.tabItem}></Tab>
            </Tabs>
          }
        />
        <span className={classes.seperator}>|</span>
        <CardContent>
          {LogAndRegister}
        </CardContent>
      </Card>
    </Grid>
  );
}

