import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Home from '../views/Home';
import LoginPage from '../views/LoginPage';
import { Switch, Route } from 'react-router-dom';
import MainHeader from '../components/MainHeader';

const indexRoutes = [
  { path: "/home/login", component: LoginPage },
  { path: "/home", component: Home },
];

const pageStyle = {
};

const HomePage = () => {
  return (
    <div>
      <MainHeader />
      <Switch>
        {
          indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />
          })
        }
      </Switch>
    </div>
  );
}

export default withStyles(pageStyle)(HomePage);