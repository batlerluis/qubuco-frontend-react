import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Home from '../views/Home';
import WhatIsIt from '../views/WhatIsIt';
import LoginPage from '../views/LoginPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainHeader from '../components/MainHeader';

const indexRoutes = [
  { path: "/home/login", component: LoginPage },
  { path: "/home/comment", component: Home },
  { path: "/home/whatisit", component: WhatIsIt },
  { path: "/home/business", component: Home },
  { path: "/home/contact", component: Home },
  { path: "/home", to: "/home/comment", redirect: true }
];

const pageStyle = {
};

const HomePage = () => {
  return (
    <div>
      <Switch>
        {
          indexRoutes.map((prop, key) => {
            if (prop.redirect) {
              return <Redirect from={prop.path} to={prop.to} key={key} />
            }
            return <Route path={prop.path} component={prop.component} key={key} />
          })
        }
      </Switch>
    </div>
  );
}

export default withStyles(pageStyle)(HomePage);