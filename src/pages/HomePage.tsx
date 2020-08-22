import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Home from '../views/Home';
import Login from '../views/Login';
import { Switch, Route } from 'react-router-dom';

const indexRoutes = [
  { path: "/home", component: Home },
  { path: "/login", component: Login },
];

const pageStyle = {
};

const HomePage = () => {
  return (
    <div>
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