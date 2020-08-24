"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Typography_1 = require("@material-ui/core/Typography");
var IconButton_1 = require("@material-ui/core/IconButton");
var Card_1 = require("@material-ui/core/Card");
var Grid_1 = require("@material-ui/core/Grid");
var Button_1 = require("@material-ui/core/Button");
var CardHeader_1 = require("@material-ui/core/CardHeader");
var CardContent_1 = require("@material-ui/core/CardContent");
var ArrowBackIos_1 = require("@material-ui/icons/ArrowBackIos");
var ArrowForward_1 = require("@material-ui/icons/ArrowForward");
var SettingsBackupRestore_1 = require("@material-ui/icons/SettingsBackupRestore");
var LinearProgress_1 = require("@material-ui/core/LinearProgress");
var Box_1 = require("@material-ui/core/Box");
var car_png_1 = require("../assets/img/car.png");
var styles_2 = require("@material-ui/core/styles");
var purple_1 = require("@material-ui/core/colors/purple");
var theme = styles_2.createMuiTheme({
    palette: {
        primary: {
            main: purple_1["default"][500]
        },
        secondary: {
            main: '#f44336'
        }
    }
});
var useStyles = styles_1.makeStyles(function (theme) { return ({
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
            margin: 0
        }
        // boxShadow: "",
    },
    btnGroup: {
        padding: '10px 0',
        '& > *': {
            padding: "10px 0",
            margin: "10px 0",
            fontSize: "18px",
            lineHeight: "2.2em",
            color: "#ffffff"
        }
    },
    btnClient: {
        backgroundColor: "#8a56ac"
    },
    btnEmployee: {
        backgroundColor: "#D47FA6"
    },
    btnProvider: {
        backgroundColor: "#998FA2"
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
            fontSize: "16px"
        },
        // margin: "120px auto",
        boxShadow: "0px 2px 5px #00000029;",
        border: "1px solid #EEEEEE",
        borderRadius: "5px",
        opacity: 1,
        margin: "10px"
    },
    rating: {
        margin: "20px 0",
        fontSize: "45px"
    },
    description: {
        margin: "10px 0 40px"
    },
    progBar: {
        backgroundColor: "#F0E6FF",
        height: "10px",
        marginBottom: "15px",
        borderRadius: "5px",
        '& *': {
            borderRadius: "5px"
        }
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    "return": {
        maxWidth: 101,
        minWidth: 100,
        maxHeight: 36,
        minHeight: 35,
        '& > *': {
            padding: "5px",
            margin: "auto",
            fontSize: "16px"
        },
        // margin: "120px auto",
        boxShadow: "0px 2px 5px #00000029;",
        border: "1px solid #EEEEEE",
        borderRadius: "5px",
        opacity: 1,
        margin: "10px"
    },
    avatar: {
        // backgroundColor: red[500],
        backgroundImage: "url()",
        width: "70px",
        height: "70px"
    }
}); });
function RecipeReviewCard() {
    var classes = useStyles();
    var _a = react_1["default"].useState(false), expanded = _a[0], setExpanded = _a[1];
    var _b = react_1["default"].useState(2), value = _b[0], setValue = _b[1];
    var handleExpandClick = function () {
        setExpanded(!expanded);
    };
    return (
    // ##########  Survey Start  ##############
    // <Grid container>
    //   <AppBar position="static" color="inherit">
    //     <Toolbar variant="dense">
    //       <IconButton edge="start" aria-label="menu">
    //         <ArrowBackIosIcon />SALIR
    //       </IconButton>
    //     </Toolbar>
    //   </AppBar>
    //   <Card className={classes.root}>
    //     <CardHeader
    //       avatar={
    //         <img src={imgLog} className={classes.avatar} />
    //       }
    //       titleTypographyProps={{variant:'h5' }}
    //       title="Company Name"
    //       subheaderTypographyProps={{variant:'subtitle2' }}
    //       subheader="Escoge la opción que más se ajuste al comentario que harás sobre esta empresa."
    //     />
    //     <CardContent>
    //       <Typography variant="subtitle1" color="textSecondary" component="p">
    //         Quiero opinar esta empresa como:
    //       </Typography>
    //       <Grid container direction="column" className={classes.btnGroup}>
    //         <Button variant="contained" color="primary" className={classes.btnClient}>CLIENTE</Button>
    //         <Button variant="contained" color="secondary" className={classes.btnEmployee}>EMPLEADO</Button>
    //         <Button variant="contained" color="inherit" className={classes.btnProvider}>PROVEEDOR</Button>
    //       </Grid>
    //     </CardContent>
    //   </Card>
    // </Grid>
    // #################  Raging Page  #################
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
    // #################  Raging Page  #################
    react_1["default"].createElement(styles_1.ThemeProvider, { theme: theme },
        react_1["default"].createElement(Grid_1["default"], { container: true },
            react_1["default"].createElement(AppBar_1["default"], { position: "static", color: "inherit" },
                react_1["default"].createElement(Toolbar_1["default"], { variant: "dense" },
                    react_1["default"].createElement(IconButton_1["default"], { edge: "start", "aria-label": "menu" },
                        react_1["default"].createElement(ArrowBackIos_1["default"], null),
                        "SALIR"))),
            react_1["default"].createElement(Card_1["default"], { className: classes.root },
                react_1["default"].createElement(CardHeader_1["default"], { avatar: react_1["default"].createElement("img", { src: car_png_1["default"], className: classes.avatar }), action: react_1["default"].createElement(Card_1["default"], { className: classes["return"] },
                        react_1["default"].createElement(IconButton_1["default"], { "aria-label": "menu" },
                            react_1["default"].createElement(SettingsBackupRestore_1["default"], null),
                            "Regresar")), titleTypographyProps: { variant: 'h5' }, title: "Company Name", subheaderTypographyProps: { variant: 'h6' }, subheader: "Survey Name" }),
                react_1["default"].createElement(CardContent_1["default"], null,
                    react_1["default"].createElement(Typography_1["default"], { variant: "h6", color: "textSecondary", component: "p" }, "Question 2"),
                    react_1["default"].createElement(LinearProgress_1["default"], { variant: "buffer", value: 67, className: classes.progBar }),
                    react_1["default"].createElement(Box_1["default"], { component: "fieldset", textAlign: "center", mb: 3, justifyContent: "center", borderColor: "transparent" },
                        react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: "center", color: "textSecondary", component: "p", className: classes.description }, "Te gusto el servicio en tu \u00FAltima experiencia con nuestra empresa?"),
                        react_1["default"].createElement(Grid_1["default"], { container: true, direction: "column", className: classes.btnGroup },
                            react_1["default"].createElement(Button_1["default"], { variant: "contained", color: "primary", className: classes.btnClient }, "OPCI\u00D3N POSITIVA"),
                            react_1["default"].createElement(Button_1["default"], { variant: "contained", color: "inherit", className: classes.btnProvider }, "OPCI\u00D3N NEGATIVA"))),
                    react_1["default"].createElement(Card_1["default"], { className: classes.skip },
                        react_1["default"].createElement(IconButton_1["default"], { "aria-label": "skip" },
                            "Omitir",
                            react_1["default"].createElement(ArrowForward_1["default"], null))))))));
}
exports["default"] = RecipeReviewCard;
