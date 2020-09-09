import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { createBrowserHistory } from 'history';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SurveyPage from './pages/SurveyPage';

const indexRoutes = [
  { path: "/home", component: HomePage },
  { path: "/survey", component: SurveyPage },
  { path: "/", to: "/home", redirect: true }
];

// const hist = createBrowserHistory();

const App = () => {
  return (
    // <div className="App">
    <Router>
      <Switch>
        {indexRoutes.map((prop, key) => {
          if (prop.redirect) {
            return <Redirect from={prop.path} to={prop.to} key={key} />
          }
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
    // </div>
  );
}

export default App;
