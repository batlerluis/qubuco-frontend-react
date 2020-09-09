"use strict";
exports.__esModule = true;
var react_1 = require("react");
var withStyles_1 = require("@material-ui/core/styles/withStyles");
var react_router_dom_1 = require("react-router-dom");
var SruveyStart_1 = require("../views/SruveyStart");
var SurveyDetail_1 = require("../views/SurveyDetail");
var SurveyFinal_1 = require("../views/SurveyFinal");
var indexRoutes = [
    { path: "/survey/start", component: SruveyStart_1["default"] },
    { path: "/survey/detail", component: SurveyDetail_1["default"] },
    { path: "/survey/final", component: SurveyFinal_1["default"] },
];
var pageStyle = {};
var SurveyPage = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_router_dom_1.Switch, null, indexRoutes.map(function (prop, key) {
            return react_1["default"].createElement(react_router_dom_1.Route, { path: prop.path, component: prop.component, key: key });
        }))));
};
exports["default"] = withStyles_1["default"](pageStyle)(SurveyPage);
