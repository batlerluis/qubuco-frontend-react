"use strict";
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var withStyles_1 = require("@material-ui/core/styles/withStyles");
var core_1 = require("@material-ui/core");
var pageStyle = {
    wrapper: {
        flexGrow: 1,
        minHeight: "100vh",
        height: "auto",
        background: "transparent linear-gradient(180deg, #FFFFFF 0%, #8A56AC 100%) 0% 0% no-repeat padding-box"
    },
    cardcontent: {
        padding: "20px",
        '& div': {
            margin: "5px"
        }
    },
    fullHeight: {
        height: "100%"
    },
    forgot: {
        padding: "10px 0"
    },
    paddingH1: {
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 30
    },
    titleText: {
        font: "normal normal normal 46px/52px Helvetica Neue",
        letterSpacing: "-0.46px",
        color: "#202124",
        opacity: 1
    },
    dscrText: {
        font: "normal normal normal 20px/25px Quicksand",
        letterSpacing: "-1px",
        color: "#707070",
        opacity: 1
    },
    tabItem: {
        fontWeight: 500,
        fontSize: "22px",
        border: "none",
        '& > span: focus': {
            borderBottom: "2px solid #8a56ac"
        }
    },
    buttonbar: {
        width: "100%",
        display: "block",
        '& *': {
            width: "100%"
        }
    },
    buttonItem: {
        width: "100%",
        backgroundColor: "#8A56AC",
        "&:hover": {
            opacity: 0.9,
            backgroundColor: "#8A56AC"
        }
    }
};
var LoginPage = function (props) {
    var _a = react_1.useState(0), currentTab = _a[0], setTab = _a[1];
    var _b = react_1.useState(false), keepSigned = _b[0], setSign = _b[1];
    var classes = props.classes;
    var handleChange = function (event, newValue) { return setTab(newValue); };
    return (react_1["default"].createElement(core_1.Grid, { container: true, className: classes.wrapper, justify: "center", alignItems: "center" },
        react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 6, md: 4 },
            react_1["default"].createElement(core_1.Card, null,
                react_1["default"].createElement(core_1.Grid, { container: true, justify: "center", className: classes.cardcontent },
                    react_1["default"].createElement(core_1.Tabs, { value: currentTab, onChange: handleChange, textColor: "primary" },
                        react_1["default"].createElement(core_1.Tab, { label: "Ingresar", className: classes.tabItem }),
                        react_1["default"].createElement(core_1.Tab, { label: "Registrarse", className: classes.tabItem })),
                    react_1["default"].createElement(core_1.OutlinedInput, { fullWidth: true, placeholder: "Correo electr\u00F3nico" }),
                    react_1["default"].createElement(core_1.OutlinedInput, { fullWidth: true, placeholder: "Contrase\u00F1a" }),
                    react_1["default"].createElement(core_1.Grid, { container: true, justify: "space-between" },
                        react_1["default"].createElement(core_1.FormControlLabel, { control: react_1["default"].createElement(core_1.Checkbox, { checked: keepSigned, onChange: function (event, newValue) { return setSign(newValue); } }), label: "Permanecer conectado" }),
                        react_1["default"].createElement("div", { className: classes.forgot },
                            react_1["default"].createElement(core_1.Link, { href: "#", color: "primary", onClick: function (e) { return e.preventDefault(); } }, "Olvid\u00E9 contrase\u00F1a"))),
                    react_1["default"].createElement("div", { className: classes.buttonbar },
                        react_1["default"].createElement(core_1.Button, { className: classes.buttonItem }, "Ingresar"),
                        react_1["default"].createElement(core_1.Button, null, "Facebook")))))));
};
LoginPage.propTypes = {
    classes: prop_types_1["default"].object.isRequired
};
exports["default"] = withStyles_1["default"](pageStyle)(LoginPage);
