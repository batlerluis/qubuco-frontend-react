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
        maxWidth: 400,
        minWidth: 330,
        maxHeight: 560,
        padding: "70px 60px 50px",
        margin: "120px auto",
        boxShadow: "0px 5px 10px #00000029;",
        borderRadius: "9px",
        opacity: 1,
        action: {
            margin: 0
        }
    },
    appBar: {
        // height: "70px",
        padding: "10px 0"
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
        marginBottom: "40px"
    },
    checkout: {
        color: "#8a56ac"
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
            fontSize: "16px"
        },
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
        boxShadow: "0px 2px 5px #00000029;",
        border: "1px solid #EEEEEE",
        borderRadius: "5px",
        opacity: 1,
        margin: "10px"
    },
    avatar: {
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
    var SelectType = function (nType) {
        console.log(nType);
    };
    return (react_1["default"].createElement(Grid_1["default"], { container: true },
        react_1["default"].createElement(AppBar_1["default"], { position: "static", color: "inherit", className: classes.appBar },
            react_1["default"].createElement(Toolbar_1["default"], { variant: "dense" },
                react_1["default"].createElement(IconButton_1["default"], { edge: "start", "aria-label": "menu" },
                    react_1["default"].createElement(ArrowBackIos_1["default"], null),
                    "SALIR"))),
        react_1["default"].createElement(Card_1["default"], { className: classes.root },
            react_1["default"].createElement(CardHeader_1["default"], { avatar: react_1["default"].createElement("img", { src: car_png_1["default"], className: classes.avatar }), titleTypographyProps: { variant: 'h5' }, title: "Company Name", subheaderTypographyProps: { variant: 'subtitle2' }, subheader: "Escoge la opci\u00F3n que m\u00E1s se ajuste al comentario que har\u00E1s sobre esta empresa." }),
            react_1["default"].createElement(CardContent_1["default"], null,
                react_1["default"].createElement(Typography_1["default"], { variant: "subtitle1", color: "textSecondary", component: "p" }, "Quiero opinar esta empresa como:"),
                react_1["default"].createElement(Grid_1["default"], { container: true, direction: "column", className: classes.btnGroup },
                    react_1["default"].createElement(Button_1["default"], { variant: "contained", href: "/survey/detail", onClick: function () { return SelectType(0); }, className: classes.btnClient }, "CLIENTE"),
                    react_1["default"].createElement(Button_1["default"], { variant: "contained", href: "/survey/detail", onClick: function () { return SelectType(1); }, className: classes.btnEmployee }, "EMPLEADO"),
                    react_1["default"].createElement(Button_1["default"], { variant: "contained", href: "/survey/detail", onClick: function () { return SelectType(2); }, className: classes.btnProvider }, "PROVEEDOR"))))));
}
exports["default"] = RecipeReviewCard;
