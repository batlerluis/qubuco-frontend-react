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
var Checkbox_1 = require("@material-ui/core/Checkbox");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var TextareaAutosize_1 = require("@material-ui/core/TextareaAutosize");
var LinearProgress_1 = require("@material-ui/core/LinearProgress");
var Box_1 = require("@material-ui/core/Box");
var Rating_1 = require("@material-ui/lab/Rating");
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
        width: 450,
        minHeight: 480,
        padding: "20px 25px",
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
    checkStyle: {
        color: "#8a56ac !important",
        padding: "10px"
    },
    btnClient: {
        backgroundColor: "#8a56ac !important",
        opacity: 0.8,
        "&:hover": {
            opacity: 1
        }
    },
    btnEmployee: {
        backgroundColor: "#D47FA6 !important",
        opacity: 0.8,
        "&:hover": {
            opacity: 1
        }
    },
    btnProvider: {
        backgroundColor: "#998FA2 !important",
        opacity: 0.8,
        "&:hover": {
            opacity: 1
        }
    },
    formCtl: {
        marginBottom: "50px !important"
    },
    checkout: {
        // backgroundColor: "#8a56ac",
        color: "#8a56ac"
    },
    comment: {
        width: "385px",
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
            padding: "7px 15px 7px 25px",
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
        margin: "60px 0",
        fontSize: "45px"
    },
    description: {
        margin: "10px 0 80px"
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
    var _b = react_1["default"].useState(0), ratingvalue = _b[0], setRatingValue = _b[1];
    var _c = react_1["default"].useState(1), step = _c[0], setStep = _c[1];
    var handleExpandClick = function () {
        setExpanded(!expanded);
    };
    var SelectRating = function (nValue) {
        setRatingValue(nValue);
        setStep(2);
    };
    var SelectExp = function (nValue) {
        setStep(3);
    };
    var SelectFinal = function (nValue) {
        setStep(4);
    };
    var cardBody;
    if (step == 1) {
        console.log("sdadfsdadf");
        cardBody = (react_1["default"].createElement("div", null,
            react_1["default"].createElement(CardHeader_1["default"], { avatar: react_1["default"].createElement("img", { src: car_png_1["default"], className: classes.avatar }), action: react_1["default"].createElement(Card_1["default"], { className: classes["return"] },
                    react_1["default"].createElement(IconButton_1["default"], { "aria-label": "menu", onClick: function () { return setStep(step - 1); } },
                        react_1["default"].createElement(SettingsBackupRestore_1["default"], null),
                        "Regresar")), titleTypographyProps: { variant: 'h5' }, title: "Company Name", subheaderTypographyProps: { variant: 'h6' }, subheader: "Survey Name" }),
            react_1["default"].createElement(CardContent_1["default"], null,
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", color: "textSecondary", component: "p" }, "Question 1"),
                react_1["default"].createElement(LinearProgress_1["default"], { variant: "buffer", value: 33, className: classes.progBar }),
                react_1["default"].createElement(Box_1["default"], { component: "fieldset", textAlign: "center", mb: 3, justifyContent: "center", borderColor: "transparent" },
                    react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: "center", color: "textSecondary", component: "p", className: classes.description }, "C\u00F3mo te sientes con las pol\u00EDticas de calidad de la empresa?"),
                    react_1["default"].createElement(Rating_1["default"], { name: "simple-controlled", value: ratingvalue, className: classes.rating, onChange: function (event, newValue) {
                            SelectRating(newValue);
                        } })),
                react_1["default"].createElement(Card_1["default"], { className: classes.skip },
                    react_1["default"].createElement(IconButton_1["default"], { "aria-label": "skip", onClick: function () { return setStep(step + 1); } },
                        "Omitir",
                        react_1["default"].createElement(ArrowForward_1["default"], null))))));
    }
    else if (step == 2) {
        cardBody = (react_1["default"].createElement("div", null,
            react_1["default"].createElement(CardHeader_1["default"], { avatar: react_1["default"].createElement("img", { src: car_png_1["default"], className: classes.avatar }), action: react_1["default"].createElement(Card_1["default"], { className: classes["return"] },
                    react_1["default"].createElement(IconButton_1["default"], { "aria-label": "menu", onClick: function () { return setStep(step - 1); } },
                        react_1["default"].createElement(SettingsBackupRestore_1["default"], null),
                        "Regresar")), titleTypographyProps: { variant: 'h5' }, title: "Company Name", subheaderTypographyProps: { variant: 'h6' }, subheader: "Survey Name" }),
            react_1["default"].createElement(CardContent_1["default"], null,
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", color: "textSecondary", component: "p" }, "Question 2"),
                react_1["default"].createElement(LinearProgress_1["default"], { variant: "buffer", value: 67, className: classes.progBar }),
                react_1["default"].createElement(Box_1["default"], { component: "fieldset", textAlign: "center", mb: 3, justifyContent: "center", borderColor: "transparent" },
                    react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: "center", color: "textSecondary", component: "p", className: classes.description }, "Te gusto el servicio en tu \u00FAltima experiencia con nuestra empresa?"),
                    react_1["default"].createElement(Grid_1["default"], { container: true, direction: "column", className: classes.btnGroup },
                        react_1["default"].createElement(Button_1["default"], { variant: "contained", color: "primary", onClick: function () { return SelectExp(0); }, className: classes.btnClient }, "OPCI\u00D3N POSITIVA"),
                        react_1["default"].createElement(Button_1["default"], { variant: "contained", color: "inherit", onClick: function () { return SelectExp(1); }, className: classes.btnProvider }, "OPCI\u00D3N NEGATIVA"))),
                react_1["default"].createElement(Card_1["default"], { className: classes.skip },
                    react_1["default"].createElement(IconButton_1["default"], { "aria-label": "skip", onClick: function () { return setStep(step + 1); } },
                        "Omitir",
                        react_1["default"].createElement(ArrowForward_1["default"], null))))));
    }
    else if (step == 3) {
        cardBody = (react_1["default"].createElement("div", null,
            react_1["default"].createElement(CardHeader_1["default"], { avatar: react_1["default"].createElement("img", { src: car_png_1["default"], className: classes.avatar }), action: react_1["default"].createElement(Card_1["default"], { className: classes["return"] },
                    react_1["default"].createElement(IconButton_1["default"], { "aria-label": "menu", onClick: function () { return setStep(step - 1); } },
                        react_1["default"].createElement(SettingsBackupRestore_1["default"], null),
                        "Regresar")), titleTypographyProps: { variant: 'h5' }, title: "Company Name", subheaderTypographyProps: { variant: 'h6' }, subheader: "Survey Name" }),
            react_1["default"].createElement(CardContent_1["default"], null,
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", color: "textSecondary", component: "p" }, "Question 3"),
                react_1["default"].createElement(LinearProgress_1["default"], { variant: "buffer", value: 100, className: classes.progBar }),
                react_1["default"].createElement(Box_1["default"], { component: "fieldset", textAlign: "center", mb: 3, justifyContent: "center", borderColor: "transparent" },
                    react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: "center", color: "textSecondary", component: "p", className: classes.description }, "Te gusto el servicio en tu \u00FAltima experiencia con nuestra empresa?"),
                    react_1["default"].createElement(Grid_1["default"], { container: true, direction: "column", className: classes.btnGroup },
                        react_1["default"].createElement(Button_1["default"], { variant: "contained", color: "primary", onClick: function () { return SelectFinal(0); }, className: classes.btnClient }, "OPCI\u00D3N A"),
                        react_1["default"].createElement(Button_1["default"], { variant: "contained", color: "primary", onClick: function () { return SelectFinal(1); }, className: classes.btnClient }, "OPCI\u00D3N B"),
                        react_1["default"].createElement(Button_1["default"], { variant: "contained", color: "primary", onClick: function () { return SelectFinal(2); }, className: classes.btnClient }, "OPCI\u00D3N C"))),
                react_1["default"].createElement(Card_1["default"], { className: classes.skip },
                    react_1["default"].createElement(IconButton_1["default"], { "aria-label": "skip", onClick: function () { return setStep(step + 1); } },
                        "Omitir",
                        react_1["default"].createElement(ArrowForward_1["default"], null))))));
    }
    else if (step == 4) {
        cardBody = (react_1["default"].createElement("div", null,
            react_1["default"].createElement(CardHeader_1["default"], { avatar: react_1["default"].createElement("img", { src: car_png_1["default"], className: classes.avatar }), action: react_1["default"].createElement(Card_1["default"], { className: classes["return"] },
                    react_1["default"].createElement(IconButton_1["default"], { "aria-label": "menu", onClick: function () { return setStep(step - 1); } },
                        react_1["default"].createElement(SettingsBackupRestore_1["default"], null),
                        "Regresar")), titleTypographyProps: { variant: 'h5' }, title: "Company Name", subheaderTypographyProps: { variant: 'h6' }, subheader: "Survey Name" }),
            react_1["default"].createElement(CardContent_1["default"], null,
                react_1["default"].createElement(Typography_1["default"], { variant: "subtitle1", color: "textSecondary", component: "p" }, "Comparte tus experiencias con otros usuarios, y ayuda a nuestra comunidad a encontrar empresas de calidad."),
                react_1["default"].createElement(TextareaAutosize_1["default"], { rows: 5, "aria-label": "maximum height", placeholder: "Escribe tu comentario\u2026", defaultValue: "", className: classes.comment }),
                react_1["default"].createElement(FormControlLabel_1["default"], { control: react_1["default"].createElement(Checkbox_1["default"], { className: classes.checkStyle }), label: "Comentario privado", className: classes.formCtl }),
                react_1["default"].createElement(Grid_1["default"], { container: true, direction: "column", className: classes.btnGroup },
                    react_1["default"].createElement(Button_1["default"], { variant: "contained", href: "/survey/final", color: "primary", className: classes.btnClient }, "COMENTAR")))));
    }
    return (react_1["default"].createElement(styles_1.ThemeProvider, { theme: theme },
        react_1["default"].createElement(Grid_1["default"], { container: true },
            react_1["default"].createElement(AppBar_1["default"], { position: "static", color: "inherit" },
                react_1["default"].createElement(Toolbar_1["default"], { variant: "dense" },
                    react_1["default"].createElement(IconButton_1["default"], { edge: "start", href: "/home", "aria-label": "menu" },
                        react_1["default"].createElement(ArrowBackIos_1["default"], null),
                        "SALIR"))),
            react_1["default"].createElement(Card_1["default"], { className: classes.root }, cardBody))));
}
exports["default"] = RecipeReviewCard;
