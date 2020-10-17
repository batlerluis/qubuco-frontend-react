import React, { useContext } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SurveyPage from './pages/SurveyPage';
import { AppContext, AppProvider } from './context/AppContext';
import ResetPassword from './views/ResetPassword';
import MainHeader from './components/MainHeader';
import { Helmet } from 'react-helmet';

const indexRoutes = [
  { path: "/home", component: HomePage },
  { path: "/survey", component: SurveyPage },
  { path: "/pass/reset/:pathParam?", component: ResetPassword },
  { path: "/", to: "/home", redirect: true }
];

const TITLE = 'Qubu - Negocios de calidad'

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <MainHeader />
      <Switch>
        {indexRoutes.map((prop, key) => {
          if (prop.redirect) {
            return <Redirect from={prop.path} to={prop.to} key={key} />
          }
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  );
}

export default App;
