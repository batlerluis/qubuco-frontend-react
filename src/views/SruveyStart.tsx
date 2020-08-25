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
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';



import imgLog from "../assets/img/car.png"
import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/purple';

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
    maxWidth: 500,
    minWidth: 450,
    maxHeight: 560,
    padding: "100px 60px",
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
    // marginBottom: "40px",
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
  const [step, setStep] = React.useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const SelectType = (nType: number) => {
    console.log(nType);
    setStep(1);

  };

  let cardBody;

  if (step == 0) {
    cardBody =
      (
        <div>
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
              <Button variant="contained" color="primary" onClick={() => SelectType(0)} className={classes.btnClient}>CLIENTE</Button>
              <Button variant="contained" color="secondary" onClick={() => SelectType(1)} className={classes.btnEmployee}>EMPLEADO</Button>
              <Button variant="contained" color="inherit" onClick={() => SelectType(2)} className={classes.btnProvider}>PROVEEDOR</Button>
            </Grid>
          </CardContent></div>);
  } else if (step == 1) {

  } else if (step == 2) {

  }

  return (

    // ##########  Survey Start  ##############

    <Grid container>
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <IconButton edge="start" aria-label="menu">
            <ArrowBackIosIcon />SALIR
          </IconButton>
        </Toolbar>
      </AppBar>
      <Card className={classes.root}>
        {/* <CardHeader
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
            <Button variant="contained" color="primary" onClick={() => SelectType(0)} className={classes.btnClient}>CLIENTE</Button>
            <Button variant="contained" color="secondary" onClick={() => SelectType(1)} className={classes.btnEmployee}>EMPLEADO</Button>
            <Button variant="contained" color="inherit" onClick={() => SelectType(2)} className={classes.btnProvider}>PROVEEDOR</Button>
          </Grid>
        </CardContent> */}
        {cardBody}
      </Card>

    </Grid>

    // #################  Rating Page  #################
    // <ThemeProvider theme={theme}>
    //   <Grid container>
    //     <AppBar position="static" color="inherit">
    //       <Toolbar variant="dense">
    //         <IconButton edge="start" aria-label="menu">
    //           <ArrowBackIosIcon />SALIR
    //         </IconButton>
    //       </Toolbar>
    //     </AppBar>
    //     <Card className={classes.root}>
    //       <CardHeader
    //         avatar={
    //           <img src={imgLog} className={classes.avatar} />
    //         }
    //         action={
    //           <Card className={classes.return}>
    //             <IconButton aria-label="menu">
    //               <SettingsBackupRestoreIcon />Regresar
    //             </IconButton>
    //           </Card>
    //         }
    //         titleTypographyProps={{variant:'h5' }}
    //         title="Company Name"
    //         subheaderTypographyProps={{variant:'h6' }}
    //         subheader="Survey Name"
    //       />
    //       <CardContent>
    //         <Typography variant="h6" color="textSecondary" component="p">
    //           Question 1
    //         </Typography>
    //         <LinearProgress variant="buffer" value={33} className={classes.progBar} />
    //         <Box component="fieldset" textAlign="center" mb={3} justifyContent="center" borderColor="transparent">
    //           <Typography variant="h5" align="center" color="textSecondary" component="p">
    //             Cómo te sientes con las políticas de calidad de la empresa?
    //           </Typography>
    //           <Rating
    //             name="simple-controlled"
    //             value={5}
    //             className={classes.rating}
    //           />
    //         </Box>
    //         <Card className={classes.skip}>
    //           <IconButton aria-label="skip">
    //             Omitir<ArrowForwardIcon />
    //           </IconButton>
    //         </Card>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // </ThemeProvider>

    // #################  Ques 2 Page  #################

    // <ThemeProvider theme={theme}>
    //   <Grid container>
    //     <AppBar position="static" color="inherit">
    //       <Toolbar variant="dense">
    //         <IconButton edge="start" aria-label="menu">
    //           <ArrowBackIosIcon />SALIR
    //         </IconButton>
    //       </Toolbar>
    //     </AppBar>
    //     <Card className={classes.root}>
    //       <CardHeader
    //         avatar={
    //           <img src={imgLog} className={classes.avatar} />
    //         }
    //         action={
    //           <Card className={classes.return}>
    //             <IconButton aria-label="menu">
    //               <SettingsBackupRestoreIcon />Regresar
    //             </IconButton>
    //           </Card>
    //         }
    //         titleTypographyProps={{variant:'h5' }}
    //         title="Company Name"
    //         subheaderTypographyProps={{variant:'h6' }}
    //         subheader="Survey Name"
    //       />
    //       <CardContent>
    //         <Typography variant="h6" color="textSecondary" component="p">
    //           Question 2
    //         </Typography>
    //         <LinearProgress variant="buffer" value={67} className={classes.progBar} />
    //         <Box component="fieldset" textAlign="center" mb={3} justifyContent="center" borderColor="transparent">
    //           <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.description}>
    //             Te gusto el servicio en tu última experiencia con nuestra empresa?
    //           </Typography>
    //           <Grid container direction="column" className={classes.btnGroup}>
    //             <Button variant="contained" color="primary" className={classes.btnClient}>OPCIÓN POSITIVA</Button>
    //             <Button variant="contained" color="inherit" className={classes.btnProvider}>OPCIÓN NEGATIVA</Button>
    //           </Grid>
    //         </Box>
    //         <Card className={classes.skip}>
    //           <IconButton aria-label="skip">
    //             Omitir<ArrowForwardIcon />
    //           </IconButton>
    //         </Card>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // </ThemeProvider>

    // #################  Question 3 Page  #################

    // <ThemeProvider theme={theme}>
    //   <Grid container>
    //     <AppBar position="static" color="inherit">
    //       <Toolbar variant="dense">
    //         <IconButton edge="start" aria-label="menu">
    //           <ArrowBackIosIcon />SALIR
    //         </IconButton>
    //       </Toolbar>
    //     </AppBar>
    //     <Card className={classes.root}>
    //       <CardHeader
    //         avatar={
    //           <img src={imgLog} className={classes.avatar} />
    //         }
    //         action={
    //           <Card className={classes.return}>
    //             <IconButton aria-label="menu">
    //               <SettingsBackupRestoreIcon />Regresar
    //             </IconButton>
    //           </Card>
    //         }
    //         titleTypographyProps={{variant:'h5' }}
    //         title="Company Name"
    //         subheaderTypographyProps={{variant:'h6' }}
    //         subheader="Survey Name"
    //       />
    //       <CardContent>
    //         <Typography variant="h6" color="textSecondary" component="p">
    //           Question 3
    //         </Typography>
    //         <LinearProgress variant="buffer" value={100} className={classes.progBar} />
    //         <Box component="fieldset" textAlign="center" mb={3} justifyContent="center" borderColor="transparent">
    //           <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.description}>
    //             Te gusto el servicio en tu última experiencia con nuestra empresa?
    //           </Typography>
    //           <Grid container direction="column" className={classes.btnGroup}>
    //             <Button variant="contained" color="primary" className={classes.btnClient}>OPCIÓN A</Button>
    //             <Button variant="contained" color="primary" className={classes.btnClient}>OPCIÓN B</Button>
    //             <Button variant="contained" color="primary" className={classes.btnClient}>OPCIÓN C</Button>
    //           </Grid>
    //         </Box>
    //         <Card className={classes.skip}>
    //           <IconButton aria-label="skip">
    //             Omitir<ArrowForwardIcon />
    //           </IconButton>
    //         </Card>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // </ThemeProvider>

    // #################  Question 3 Page  #################

    // <ThemeProvider theme={theme}>
    //   <Grid container>
    //     <AppBar position="static" color="inherit">
    //       <Toolbar variant="dense">
    //         <IconButton edge="start" aria-label="menu">
    //           <ArrowBackIosIcon />SALIR
    //         </IconButton>
    //       </Toolbar>
    //     </AppBar>
    //     <Card className={classes.root}>
    //       <CardHeader
    //         avatar={
    //           <img src={imgLog} className={classes.avatar} />
    //         }
    //         action={
    //           <Card className={classes.return}>
    //             <IconButton aria-label="menu">
    //               <SettingsBackupRestoreIcon />Regresar
    //             </IconButton>
    //           </Card>
    //         }
    //         titleTypographyProps={{variant:'h5' }}
    //         title="Company Name"
    //         subheaderTypographyProps={{variant:'h6' }}
    //         subheader="Survey Name"
    //       />
    //       <CardContent>
    //         <Typography variant="subtitle1" color="textSecondary" component="p">
    //           Comparte tus experiencias con otros usuarios, y ayuda a nuestra comunidad a encontrar empresas de calidad.
    //         </Typography>
    //         <TextareaAutosize
    //           rows={5}
    //           aria-label="maximum height"
    //           placeholder="Escribe tu comentario…"
    //           defaultValue=""
    //           className={classes.comment}
    //         />
    //         <FormControlLabel
    //           control={<Checkbox className={classes.checkStyle}/>}
    //           label="Comentario privado"
    //           className={classes.formCtl}
    //         />
    //         <Grid container direction="column" className={classes.btnGroup}>
    //           <Button variant="contained" color="primary" className={classes.btnClient}>COMENTAR</Button>
    //         </Grid>
    //         <Card className={classes.skip}>
    //           <IconButton aria-label="skip">
    //             Omitir<ArrowForwardIcon />
    //           </IconButton>
    //         </Card>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // </ThemeProvider>


  );
}