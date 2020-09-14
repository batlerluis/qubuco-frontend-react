import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, Grid, Card, CardContent, CardHeader, Tab, Tabs, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import SnackBar from '../components/SnackBar';

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
  },
  forgot: {
    color: "#8a56ac",
    fontSize: "16px",
    // padding: "25px 25px 25px 10px !important",
    textAlign: "right",
    // boxSizing: "border-box",
  },
  checkBox: {
    color: "#8a56ac !important",
    marginLeft: "-12px",
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
  }
}));

export default function LoginPage(props: any) {

  const [tabIndex, setTabIndex] = useState(0);
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [snackOption, setSnackOption] = useState({
    type: "",
    msg: ""
  });

  const [snackStatus, setSnackStatus] = React.useState(false);

  const history = useHistory();

  const handleLogin = async () => {

    Axios.post('http://localhost:8000/api/login', {
      'email': email,
      'password': pass1
    })
      .then(function (response: any) {
        console.log(response.data);
        if (response.data.message == "Invalid Credentials") {
          setSnackOption({
            type: "error",
            msg: "Login Failed! User not registered."
          });
          setSnackStatus(true);
        }
        else {
          history.push("/survey/start");
        }
      })
      .catch(function (error: any) {
        if (error.response.data.errors.hasOwnProperty('password')) {
          setSnackOption({
            type: "error",
            msg: "LogIn Failed! " + error.response.data.errors.password[0]
          });
        }
        else if (error.response.data.errors.hasOwnProperty('email')) {
          setSnackOption({
            type: "error",
            msg: "LogIn Failed! " + error.response.data.errors.email[0]
          });
        }
        setSnackStatus(true);
      });
  }

  const handleRegister = () => {
    Axios.post('http://localhost:8000/api/register', {
      'name': name,
      'email': email,
      'password': pass1,
      'password_confirmation': pass2
    })
      .then(function (response: any) {
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
        if (error.response.data.errors.hasOwnProperty('password')) {
          setSnackOption({
            type: "error",
            msg: "Register Failed! " + error.response.data.errors.password[0]
          });
        }
        else if (error.response.data.errors.hasOwnProperty('email')) {
          setSnackOption({
            type: "error",
            msg: "Register Failed! " + error.response.data.errors.email[0]
          });
        }
        setSnackStatus(true);
      });
    // fetch('http://localhost:8000/api/register', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //       'name': name,
    //       'email': email,
    //       'password': pass1,
    //       'password_confirmation': pass2
    //   })
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   console.log(responseJson);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  }

  const OnTabChange = (event: object, value: any) => {
    setTabIndex(value);
    setName('');
    setEmail('');
    setPass1('');
    setPass2('');
  }

  let LogAndRegister;

  if (tabIndex == 0) {
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

        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <FormControlLabel
              control={<Checkbox className={classes.checkBox} />}
              label="Permanecer conectado"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Grid container alignItems="center">
              <a className={classes.forgot} href="#">Olvidé contraseña</a>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.buttonbar} >
          <Button variant="contained" onClick={() => handleLogin()} className={classes.buttonItem}>Ingresar</Button>
          <Grid className={classes.lineGroup}>
            <Grid className={classes.lineItem}><hr /></Grid>
            <span>O</span>
            <Grid className={classes.lineItem}><hr /></Grid>
          </Grid>
          <Button variant="contained" onClick={() => handleLogin()} className={classes.facebookBtn}><FacebookIcon color="primary" /><span>Facebook</span><span></span></Button>
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
          <Button variant="contained" onClick={() => handleRegister()} className={classes.facebookBtn}><FacebookIcon color="primary" /><span>Facebook</span><span></span></Button>
        </Grid>

      </FormControl>
    );
  }

  return (

    <Grid container alignItems="center">
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
              <span className={classes.seperator}>|</span>
              <Tab label="Registrarse" className={classes.tabItem}></Tab>
            </Tabs>
          }
        />
        <CardContent>
          {LogAndRegister}
        </CardContent>
      </Card>
      {snackStatus == true ? <SnackBar type={snackOption.type} msg={snackOption.msg} /> : null}
    </Grid>
  );
}

