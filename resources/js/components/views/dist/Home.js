"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var withStyles_1 = require("@material-ui/core/styles/withStyles");
var core_1 = require("@material-ui/core");
var TextField_1 = require("@material-ui/core/TextField");
var Autocomplete_1 = require("@material-ui/lab/Autocomplete");
var Search_1 = require("@material-ui/icons/Search");
var appstore_png_1 = require("../assets/img/appstore.png");
var googlestore_png_1 = require("../assets/img/googlestore.png");
var phone1_png_1 = require("../assets/img/phone1.png");
var react_router_dom_1 = require("react-router-dom");
var pageStyle = {
    wrapper: {
        minHeight: "100vh",
        height: "auto",
        // background: "transparent linear-gradient(180deg, #FFFFFF 0%, #8A56AC 100%) 0% 0% no-repeat padding-box",
        paddingTop: 120
    },
    content: {
        height: "fit-content"
    },
    fullHeight: {
        height: "100%"
    },
    paddingH1: {
        paddingLeft: 80,
        paddingRight: 80,
        minWidth: 540,
        marginBottom: 50,
        justifyContent: "center"
    },
    search: {
        paddingTop: 35
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
        opacity: 1,
        paddingBottom: 19
    },
    addLink: {
        paddingTop: 25
    }
};
var top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
];
// const imgPhone = "http://localhost:3000/phone.png";
var Home = function (props) {
    var classes = props.classes;
    var history = react_router_dom_1.useHistory();
    var handleLink = function (event) { return event.preventDefault(); };
    return (react_1["default"].createElement(core_1.Grid, { container: true, className: classes.wrapper, justify: "center" },
        react_1["default"].createElement(core_1.Grid, { container: true, justify: "center", className: classes.content },
            react_1["default"].createElement(core_1.Grid, { item: true, sm: 7, md: 4, className: classes.paddingH1 },
                react_1["default"].createElement(core_1.Grid, { container: true, direction: "column", alignItems: "flex-end", justify: "space-between", className: classes.fullHeight },
                    react_1["default"].createElement(core_1.Grid, { item: true },
                        react_1["default"].createElement("h1", { className: classes.titleText }, "Busca la empresa, calif\u00EDcala y deja tu comentario"),
                        react_1["default"].createElement("h2", { className: classes.dscrText }, "Comparte tus experiencias con otros usuarios, y ayuda a nuestra comunidad a encontrar empresas de calidad."),
                        react_1["default"].createElement(core_1.Grid, { container: true, alignItems: "flex-end" },
                            react_1["default"].createElement(Search_1["default"], { fontSize: "large" }),
                            react_1["default"].createElement(core_1.Grid, { style: { flexGrow: 1 } },
                                react_1["default"].createElement(Autocomplete_1["default"], { className: classes.search, id: "free-solo-demo", options: top100Films.map(function (option) { return option.title; }), fullWidth: true, onChange: function (event, value, reason) { return history.push("/home/login"); }, renderInput: function (params) { return (react_1["default"].createElement(TextField_1["default"], __assign({}, params, { placeholder: "Ingresa el nombre de la em\u2026", margin: "none", variant: "standard" }))); } }))),
                        react_1["default"].createElement(core_1.Grid, { container: true, className: classes.addLink },
                            react_1["default"].createElement(core_1.Link, { className: classes.addLink, href: "#", color: "primary", onClick: function (e) { return handleLink(e); } }, "Agregar mi empresa a QUBU"))),
                    react_1["default"].createElement(core_1.Grid, { container: true, item: true },
                        react_1["default"].createElement(core_1.Grid, { container: true, justify: "space-around" },
                            react_1["default"].createElement(core_1.Grid, { item: true },
                                react_1["default"].createElement("img", { src: appstore_png_1["default"], alt: "Can not load image!" })),
                            react_1["default"].createElement(core_1.Grid, { item: true },
                                react_1["default"].createElement("img", { src: googlestore_png_1["default"], alt: "Can not load image!" })))))),
            react_1["default"].createElement(core_1.Grid, { container: true, md: 4, sm: 5, className: classes.paddingH1, alignContent: "center" },
                react_1["default"].createElement(core_1.Grid, { item: true },
                    react_1["default"].createElement("img", { src: phone1_png_1["default"], alt: "Can not load image!" }))))));
};
Home.propTypes = {
    classes: prop_types_1["default"].object.isRequired
};
exports["default"] = withStyles_1["default"](pageStyle)(Home);
