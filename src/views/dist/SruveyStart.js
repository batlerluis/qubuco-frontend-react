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
var car_png_1 = require("../assets/img/car.png");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        maxWidth: 550,
        padding: "100px 60px",
        margin: "120px auto",
        boxShadow: "0px 5px 10px #00000029;",
        border: "2px solid #EEEEEE",
        borderRadius: "9px",
        opacity: 1,
        '& > * > button:hover': {
            backgroundColor: "none",
            opacity: "0.9"
        }
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
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
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
    var handleExpandClick = function () {
        setExpanded(!expanded);
    };
    return (react_1["default"].createElement(Grid_1["default"], { container: true },
        react_1["default"].createElement(AppBar_1["default"], { position: "static", color: "inherit" },
            react_1["default"].createElement(Toolbar_1["default"], { variant: "dense" },
                react_1["default"].createElement(IconButton_1["default"], { edge: "start", "aria-label": "menu" },
                    react_1["default"].createElement(ArrowBackIos_1["default"], null),
                    "SALIR"))),
        react_1["default"].createElement(Card_1["default"], { className: classes.root },
            react_1["default"].createElement(CardHeader_1["default"], { avatar: react_1["default"].createElement("img", { src: car_png_1["default"], className: classes.avatar }), titleTypographyProps: { variant: 'h5' }, title: "Company Name", subheaderTypographyProps: { variant: 'subtitle2' }, subheader: "Escoge la opci\u00F3n que m\u00E1s se ajuste al comentario que har\u00E1s sobre esta empresa." }),
            react_1["default"].createElement(CardContent_1["default"], null,
                react_1["default"].createElement(Typography_1["default"], { variant: "subtitle1", color: "textSecondary", component: "p" }, "Quiero opinar esta empresa como:"),
                react_1["default"].createElement(Grid_1["default"], { container: true, direction: "column", className: classes.btnGroup },
                    react_1["default"].createElement(Button_1["default"], { variant: "contained", className: classes.btnClient }, "CLIENTE"),
                    react_1["default"].createElement(Button_1["default"], { variant: "contained", className: classes.btnEmployee }, "EMPLEADO"),
                    react_1["default"].createElement(Button_1["default"], { variant: "contained", className: classes.btnProvider }, "PROVEEDOR"))))));
}
exports["default"] = RecipeReviewCard;
