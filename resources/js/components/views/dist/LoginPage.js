"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var Facebook_1 = require("@material-ui/icons/Facebook");
var useStyles = styles_1.makeStyles(function (theme) { return ({
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
            margin: 0
        }
    },
    formGroup: {
        width: "100%",
        '& > *': {
            margin: "5px 0"
        }
    },
    textInput: {
        width: "100%",
        '& label.Mui-focused': {
            color: '#8a56ac'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#8a56ac'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey'
            },
            '&:hover fieldset': {
                borderColor: '#000'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#8a56ac'
            }
        }
    },
    seperator: {
        fontSize: "32px"
    },
    forgot: {
        color: "#8a56ac",
        fontSize: "16px",
        padding: "20px 25px",
        textAlign: "end",
        boxSizing: "border-box"
    },
    checkBox: {
        color: "#8a56ac !important",
        marginLeft: "-12px"
    },
    lineItem: {
        width: "45%"
    },
    facebookBtn: {
        display: "flex",
        color: "grey !important",
        backgroundColor: "white",
        paddingRight: "25px !important",
        justifyContent: "space-between"
    },
    lineGroup: {
        width: "100%",
        display: "flex",
        margin: "20px 0",
        justifyContent: "space-between"
    },
    tabItem: {
        fontWeight: 500,
        fontSize: "22px",
        padding: "5px 0",
        margin: "0 20px",
        border: "none",
        textTransform: "none",
        '& > span: focus': {
            borderBottom: "2px solid #8a56ac"
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
            textTransform: "none"
        }
    },
    buttonItem: {
        width: "100%",
        opacity: 1,
        backgroundColor: "#8A56AC",
        "&:hover": {
            opacity: 0.9,
            backgroundColor: "#8A56AC"
        }
    }
}); });
function LoginPage(props) {
    var _a = react_1.useState(0), currentTab = _a[0], setTab = _a[1];
    var classes = useStyles();
    var handleChange = function (event, newValue) { return setTab(newValue); };
    return (react_1["default"].createElement(core_1.Grid, { alignItems: "center" },
        react_1["default"].createElement(core_1.Card, { className: classes.root },
            react_1["default"].createElement(core_1.CardHeader, { titleTypographyProps: { variant: 'h5' }, title: react_1["default"].createElement(core_1.Tabs, { value: currentTab, centered: true, onChange: handleChange, TabIndicatorProps: {
                        style: {
                            backgroundColor: "#8a56ac",
                            height: "3px",
                            borderRadius: "2px"
                        }
                    } },
                    react_1["default"].createElement(core_1.Tab, { label: "Ingresar", className: classes.tabItem }),
                    react_1["default"].createElement("span", { className: classes.seperator }, "|"),
                    react_1["default"].createElement(core_1.Tab, { label: "Registrarse", className: classes.tabItem })) }),
            react_1["default"].createElement(core_1.CardContent, null,
                react_1["default"].createElement(core_1.FormControl, { className: classes.formGroup },
                    react_1["default"].createElement(core_1.TextField, { label: "Correo electr\u00F3nico", variant: "outlined", className: classes.textInput }),
                    react_1["default"].createElement(core_1.TextField, { label: "Contrase\u00F1a", variant: "outlined", className: classes.textInput }),
                    react_1["default"].createElement(core_1.Grid, { container: true, spacing: 3 },
                        react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 6 },
                            react_1["default"].createElement(core_1.FormControlLabel, { control: react_1["default"].createElement(core_1.Checkbox, { className: classes.checkBox }), label: "Permanecer conectado" })),
                        react_1["default"].createElement(core_1.Grid, { xs: 12, sm: 6, className: classes.forgot },
                            react_1["default"].createElement("a", { href: "#" }, "Olvid\u00E9 contrase\u00F1a"))),
                    react_1["default"].createElement(core_1.Grid, { className: classes.buttonbar },
                        react_1["default"].createElement(core_1.Link, { href: "/survey/start", underline: "none" },
                            react_1["default"].createElement(core_1.Button, { variant: "contained", className: classes.buttonItem }, "Ingresar")),
                        react_1["default"].createElement(core_1.Grid, { className: classes.lineGroup },
                            react_1["default"].createElement(core_1.Grid, { className: classes.lineItem },
                                react_1["default"].createElement("hr", null)),
                            react_1["default"].createElement("span", null, "O"),
                            react_1["default"].createElement(core_1.Grid, { className: classes.lineItem },
                                react_1["default"].createElement("hr", null))),
                        react_1["default"].createElement(core_1.Button, { variant: "contained", className: classes.facebookBtn },
                            react_1["default"].createElement(Facebook_1["default"], { color: "primary" }),
                            react_1["default"].createElement("span", null, "Facebook"),
                            react_1["default"].createElement("span", null))))))));
}
exports["default"] = LoginPage;
