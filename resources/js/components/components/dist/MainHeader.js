"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Hidden_1 = require("@material-ui/core/Hidden");
var Menu_1 = require("@material-ui/icons/Menu");
var Menu_2 = require("@material-ui/core/Menu");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var react_router_dom_1 = require("react-router-dom");
var logo_png_1 = require("../assets/img/logo.png");
var pageRoutes = [
    { path: "/home/c", label: "Comentar empresa" },
    { path: "/home", label: "Qué es" },
    { path: "/home/a", label: "Empresas" },
    { path: "/home/b", label: "Contacto" },
];
var useStyles = core_1.makeStyles({
    root: {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000029",
        color: "#717171",
        backgroundColor: "#ffffff",
        paddingLeft: 26,
        paddingRight: 29
    },
    appBar: {
        background: "#FFFFFF 0% 0% no-repeat padding-box !important",
        boxShadow: "0px 3px 6px #00000029",
        opacity: 1,
        width: "100%",
        height: "70px",
        padding: "5px 10px 5px 0",
        justifyContent: "space-between"
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "15px",
        paddingLeft: "15px",
        "&:after": {
            clear: "both"
        },
        minHeight: "50px"
    },
    fullHeight: {
        height: "100%"
    },
    logo: {
        color: "#202124",
        width: "150px"
    },
    navLink: {
        padding: "22px 20px",
        font: "normal normal normal 15px/17px Helvetica Neue",
        letterSpacing: -0.15,
        color: "#717171"
    },
    activeLink: {
        padding: "22px 20px",
        font: "normal normal medium 15px/17px Helvetica Neue",
        letterSpacing: -0.15,
        color: "#202124",
        borderBottom: "2px solid #8A56AC"
    },
    accessLink: {
        padding: "0px 20px",
        font: "normal normal normal 18px/22px Helvetica Neue",
        letterSpacing: -0.18,
        color: "#8A56AC"
    },
    companyLink: {
        background: "#8A56AC 0% 0% no-repeat padding-box",
        borderRadius: 2,
        padding: "12px 10px",
        font: "normal normal normal 18px/22px Helvetica Neue",
        letterSpacing: -0.18,
        color: "#FFFFFF"
    }
});
function LoginPage(props) {
    var classes = useStyles();
    var location = react_router_dom_1.useLocation();
    console.log(location);
    var activeRoute = function (routeName) {
        console.log(location.pathname);
        console.log(routeName);
        return location.pathname.indexOf(routeName) > -1 ? true : false;
    };
    var _a = react_1["default"].useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    // var list = () => {
    //   pageRoutes.map(item => {
    //     if (activeRoute(item.path)) {
    //       return <MenuItem onClick={handleClose}>{item.path}</MenuItem>
    //     }
    //     console.log(item.path);
    //     return <MenuItem onClick={handleClose}>{item.path}</MenuItem>
    //   })
    // }
    return (react_1["default"].createElement(core_1.AppBar, { className: classes.appBar },
        react_1["default"].createElement(Toolbar_1["default"], { className: classes.container },
            react_1["default"].createElement(core_1.Grid, { item: true, className: classes.logo },
                react_1["default"].createElement(core_1.Grid, { container: true, alignItems: "center", className: classes.fullHeight },
                    react_1["default"].createElement(core_1.Button, null,
                        react_1["default"].createElement("img", { src: logo_png_1["default"] }),
                        "QUBU"))),
            react_1["default"].createElement(Hidden_1["default"], { smDown: true },
                pageRoutes.map(function (prop, key) {
                    if (activeRoute(prop.path)) {
                        return react_1["default"].createElement(core_1.Button, { className: classes.activeLink, key: key }, prop.label);
                    }
                    return react_1["default"].createElement(core_1.Button, { className: classes.navLink, key: key }, prop.label);
                }),
                react_1["default"].createElement(core_1.Button, { className: classes.accessLink }, "Acceder"),
                react_1["default"].createElement(core_1.Grid, { item: true },
                    react_1["default"].createElement(core_1.Grid, { container: true, alignItems: "center", className: classes.fullHeight },
                        react_1["default"].createElement(core_1.Button, { className: classes.companyLink }, "Acceder como empresa")))),
            react_1["default"].createElement(Hidden_1["default"], { mdUp: true },
                react_1["default"].createElement(core_1.Button, { "aria-controls": "simple-menu", "aria-haspopup": "true", onClick: handleClick },
                    react_1["default"].createElement(Menu_1["default"], null))),
            react_1["default"].createElement(Menu_2["default"], { id: "simple-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose }, pageRoutes.map(function (prop, key) {
                if (activeRoute(prop.path)) {
                    return react_1["default"].createElement(MenuItem_1["default"], { key: key, onClick: handleClose }, prop.label);
                }
                return react_1["default"].createElement(MenuItem_1["default"], { key: key, onClick: handleClose }, prop.label);
            })))));
}
exports["default"] = LoginPage;
