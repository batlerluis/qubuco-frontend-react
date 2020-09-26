import React, { useContext } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SurveyPage from './pages/SurveyPage';
import { AppContext, AppProvider } from './context/AppContext';
import ResetPassword from './views/ResetPassword';

const indexRoutes = [
  { path: "/home", component: HomePage },
  { path: "/survey", component: SurveyPage },
  { path: "/pass/reset/:pathParam?", component: ResetPassword },
  { path: "/", to: "/home", redirect: true }
];

const App = () => {
  return (
    // <AppProvider>
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
    // </AppProvider>
  );
}

export default App;
