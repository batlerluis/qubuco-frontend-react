import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, Grid, Card, CardContent, CardHeader, Button } from '@material-ui/core';
import axios, { AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';
import SnackBar from '../components/SnackBar';
import MainHeader from '../components/MainHeader';
import { API_URL } from '../Config';

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
  lineItem: {
    width: "45%",
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

export default function ResetPassword(props: any) {
  const classes = useStyles();

  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [snackOption, setSnackOption] = useState({
    type: "warning",
    msg: "Internal Error!"
  });

  const [snackStatus, setSnackStatus] = React.useState(false);

  const history = useHistory();

  const handleReset = () => {
    const curUrl: string = window.location.href;
    let nodes: string[] = curUrl.split("/");
    const token: string = nodes[nodes.length - 1];

    axios.get(API_URL + '/api/pass/find/' + token)
      .then(function (response: AxiosResponse) {
        const data: any = response.data;
        console.log(data.email);

        axios.post(API_URL + '/api/pass/reset', {
          'email': data.email,
          'password': pass1,
          'password_confirmation': pass2,
          'token': token
        })
          .then(function (response: AxiosResponse) {
            const data: any = response.data;
            if (data.error) {
              let errors: string[] = data.error;
              setSnackOption({
                type: "error",
                msg: "Reset Password Failed! " + errors[0]
              });
              setSnackStatus(true);
    
              return;
            }
            
            console.log(data.user);
            history.push('/home');

            setSnackOption({
              type: "success",
              msg: "Reset Password Success!"
            });
            setSnackStatus(true);
          })
          .catch(function (error: any) {

          });
      })
      .catch(function (error: any) {

      });
  }

  return (
    <div>
      <MainHeader />

      <Grid container alignItems="center">
        {snackStatus == true ? <SnackBar setSnackStatus={setSnackStatus} type={snackOption.type} msg={snackOption.msg} /> : null}
        <Card className={classes.root}>
          <CardHeader
            titleTypographyProps={{ variant: 'h5' }}
            title="Reset Password"
          />
          <CardContent>
            <FormControl className={classes.formGroup}>
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                value={pass1}
                onChange={(event: any) => setPass1(event.target.value)}
                className={classes.textInput}
              />
              <TextField
                label="Confirmar contraseña"
                variant="outlined"
                type="password"
                value={pass2}
                onChange={(event: any) => setPass2(event.target.value)}
                className={classes.textInput}
              />
              <div style={{ height: '30px' }}></div>
              <Grid container className={classes.buttonbar} >
                <Button variant="contained" onClick={() => handleReset()} className={classes.buttonItem}>Restablecer la contraseña</Button>
              </Grid>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}