"use strict";
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var withStyles_1 = require("@material-ui/core/styles/withStyles");
var core_1 = require("@material-ui/core");
var Copyright_1 = require("@material-ui/icons/Copyright");
var googlestore1_png_1 = require("../assets/img/googlestore1.png");
var appstore1_png_1 = require("../assets/img/appstore1.png");
var phone2_png_1 = require("../assets/img/phone2.png");
var log_png_1 = require("../assets/img/log.png");
var pageStyle = {
    wrapper: {
        flexGrow: 1,
        minHeight: "100vh",
        height: "auto",
        paddingTop: 112,
        '& > *': {
            padding: "20px 0"
        }
    },
    content: {
        height: "fit-content",
        paddingTop: 135,
        paddingLeft: 230
    },
    leftPart: {
        width: 390,
        height: 535
    },
    fullHeight: {
        height: "100%"
    },
    titleGroup: {
        paddingBottom: 30
    },
    dscrGroup: {
        height: 120,
        paddingBottom: 20
    },
    titleText: {
        font: "normal normal normal 46px/52px Helvetica Neue",
        letterSpacing: "-0.46px",
        color: "#202124",
        opacity: 1,
        margin: 0
    },
    dscrText: {
        font: "normal normal normal 20px/25px Quicksand",
        letterSpacing: "-1px",
        color: "#707070",
        opacity: 1,
        margin: 0
    },
    qubuText: {
        font: "bold normal normal 35px/45px Quicksand",
        letterSpacing: "-1px",
        color: "#000000",
        opacity: 1,
        margin: 0
    },
    downloadGroup: {
        width: 195,
        height: 170
    },
    logGroup: {
        paddingBottom: 15
    },
    logContainer: {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 6px 9px #00000029",
        color: "#717171",
        width: 84,
        height: 84,
        opacity: 1
    },
    downloadText: {
        font: "normal normal normal 25px/28px Helvetica Neue",
        letterSpacing: "-0.25px",
        color: "#202124",
        textShadow: "0px 6px 9px #00000029"
    },
    buttonGroup: {
        width: 200
    }
};
var SurveyFinal = function (props) {
    var classes = props.classes;
    return (react_1["default"].createElement(core_1.Grid, { container: true, "justify-xs-space-between": true, className: classes.wrapper, justify: "space-evenly" },
        react_1["default"].createElement(core_1.Grid, { item: true, sm: 10, md: 4 },
            react_1["default"].createElement(core_1.Grid, { container: true, direction: "column" },
                react_1["default"].createElement(core_1.Grid, { item: true, alignContent: "center", className: classes.titleGroup },
                    react_1["default"].createElement("h1", { className: classes.titleText }, "Gracias! Hemos recibido tus comentarios")),
                react_1["default"].createElement(core_1.Grid, { item: true, className: classes.dscrGroup },
                    react_1["default"].createElement("h3", { className: classes.dscrText }, "Mira tu opini\u00F3n y la de otros usuarios en nuestra app. Califica, Comenta y Gana cupones de descuento por tus comentarios.")),
                react_1["default"].createElement(core_1.Grid, { item: true },
                    react_1["default"].createElement(core_1.Grid, { container: true, direction: "column", alignItems: "center" },
                        react_1["default"].createElement(core_1.Grid, { item: true },
                            react_1["default"].createElement("h2", { className: classes.downloadText }, "Desc\u00E1rgala ahora!")),
                        react_1["default"].createElement(core_1.Grid, { item: true, className: classes.logGroup },
                            react_1["default"].createElement(core_1.Grid, { container: true, className: classes.logContainer, alignItems: "center", justify: "center" },
                                react_1["default"].createElement("img", { src: log_png_1["default"], alt: "Can not load image!" }))),
                        react_1["default"].createElement(core_1.Grid, { item: true, className: classes.logGroup },
                            react_1["default"].createElement("p", { className: classes.qubuText },
                                "QUBU",
                                react_1["default"].createElement(Copyright_1["default"], { style: { fontSize: 10 } }))),
                        react_1["default"].createElement(core_1.Grid, { item: true },
                            react_1["default"].createElement(core_1.Grid, { container: true, className: classes.buttonGroup, justify: "space-around" },
                                react_1["default"].createElement("img", { src: appstore1_png_1["default"], alt: "Can not load image!" }),
                                react_1["default"].createElement("img", { src: googlestore1_png_1["default"], alt: "Can not load image!" }))))))),
        react_1["default"].createElement(core_1.Grid, { item: true, sm: 10, md: 3 },
            react_1["default"].createElement(core_1.Grid, { container: true, justify: "center" },
                react_1["default"].createElement("img", { src: phone2_png_1["default"], alt: "Can not load image!" })))));
};
SurveyFinal.propTypes = {
    classes: prop_types_1["default"].object.isRequired
};
exports["default"] = withStyles_1["default"](pageStyle)(SurveyFinal);
