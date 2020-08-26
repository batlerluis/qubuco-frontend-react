import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, Link, Grid, Card, CardContent, CardHeader, Typography, Tab, Tabs, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

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
    padding: "20px 25px",
    textAlign: "end",
    boxSizing: "border-box",
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

  const [currentTab, setTab] = useState(0);
  const classes = useStyles();

  const handleChange = (event: any, newValue: number) => setTab(newValue);

  return (
    
    <Grid alignItems="center">
      <Card className={classes.root}>
        <CardHeader
          titleTypographyProps={{ variant: 'h5' }}
          title={
            <Tabs
              value={currentTab}
              centered
              onChange={handleChange}
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
            </Tabs>}
        />
        <CardContent>
          <FormControl className={classes.formGroup}>
            
            <TextField label="Correo electrónico" variant="outlined" className={classes.textInput} />
            <TextField label="Contraseña" variant="outlined" className={classes.textInput} />
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={<Checkbox className={classes.checkBox} />}
                  label="Permanecer conectado"

                />
              </Grid>
              <Grid xs={12} sm={6} className={classes.forgot}>
                <a href="#">Olvidé contraseña</a>
              </Grid>
            </Grid>
            
            <Grid className={classes.buttonbar} >
              <Link href="/survey/start" underline="none">
                <Button variant="contained"  className={classes.buttonItem}>Ingresar</Button>
              </Link>
              <Grid className={classes.lineGroup}>
                <Grid className={classes.lineItem}><hr /></Grid>
                <span>O</span>
                <Grid className={classes.lineItem}><hr /></Grid>
              </Grid>
              <Button variant="contained" className={classes.facebookBtn}><FacebookIcon color="primary" /><span>Facebook</span><span></span></Button>
            </Grid>
         
          </FormControl>
        </CardContent>
      </Card>
    </Grid>
  );
}

