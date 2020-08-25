"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var prop_types_1 = require("prop-types");
var react_router_dom_1 = require("react-router-dom");
var logo_png_1 = require("../assets/img/logo.png");
var pageRoutes = [
    { path: "/home/c", label: "Comentar empresa" },
    { path: "/home", label: "Qué es" },
    { path: "/home/a", label: "Empresas" },
    { path: "/home/b", label: "Contacto" },
];
var headerStyle = {
    root: {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000029",
        color: "#717171",
        backgroundColor: "#ffffff",
        paddingLeft: 26,
        paddingRight: 29
    },
    appBar: {
        height: "70px",
        background: "#FFFFFF 0% 0% no-repeat padding-box !important",
        boxShadow: "0px 3px 6px #00000029",
        opacity: 1
    },
    fullHeight: {
        height: "100%"
    },
    logo: {
        paddingRight: 150,
        color: "#202124"
    },
    rest: {
        flexGrow: 1
    },
    navLink: {
        padding: "0px 20px",
        font: "normal normal normal 15px/17px Helvetica Neue",
        letterSpacing: -0.15,
        color: "#717171"
    },
    activeLink: {
        padding: "0px 20px",
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
};
var MainHeader = function (props) {
    var classes = props.classes;
    var location = react_router_dom_1.useLocation();
    console.log(location);
    var activeRoute = function (routeName) {
        console.log(location.pathname);
        console.log(routeName);
        return location.pathname.indexOf(routeName) > -1 ? true : false;
    };
    var logoIcon = function () { return react_1["default"].createElement(core_1.Icon, null,
        " ",
        react_1["default"].createElement("img", { src: logo_png_1["default"] }),
        " "); };
    return (react_1["default"].createElement(core_1.AppBar, { className: classes.root },
        react_1["default"].createElement(core_1.Grid, { container: true, className: classes.wrapper, alignItems: "stretch" },
            react_1["default"].createElement(core_1.Grid, { item: true, className: classes.logo },
                react_1["default"].createElement(core_1.Grid, { container: true, alignItems: "center", className: classes.fullHeight },
                    react_1["default"].createElement(core_1.Button, null,
                        react_1["default"].createElement("img", { src: logo_png_1["default"] }),
                        "QUBU"))),
            react_1["default"].createElement(core_1.Grid, { item: true, className: classes.rest },
                react_1["default"].createElement(core_1.Grid, { container: true, justify: "space-between", alignItems: "stretch", className: classes.fullHeight },
                    pageRoutes.map(function (prop, key) {
                        if (activeRoute(prop.path)) {
                            return react_1["default"].createElement(core_1.Button, { className: classes.activeLink, key: key }, prop.label);
                        }
                        return react_1["default"].createElement(core_1.Button, { className: classes.navLink, key: key }, prop.label);
                    }),
                    react_1["default"].createElement(core_1.Button, { className: classes.accessLink }, "Acceder"),
                    react_1["default"].createElement(core_1.Grid, { item: true },
                        react_1["default"].createElement(core_1.Grid, { container: true, alignItems: "center", className: classes.fullHeight },
                            react_1["default"].createElement(core_1.Button, { className: classes.companyLink }, "Acceder como empresa")))))))
    // <AppBar position="static" color="inherit" className={classes.appBar}>
    //   <Toolbar>
    //     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //       <img src={imgLogo} />
    //     </IconButton>
    //     <Typography variant="h6" className={classes.title}>
    //       QUBU
    //     </Typography>
    //     <Grid container>
    //       <Link href="#"></Link>
    //     </Grid>
    //     <Button color="inherit">Login</Button>
    //   </Toolbar>
    // </AppBar>
    );
};
MainHeader.propTypes = {
    classes: prop_types_1["default"].object.isRequired
};
exports["default"] = core_1.withStyles(headerStyle)(MainHeader);
