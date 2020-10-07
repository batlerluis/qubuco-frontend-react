import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { Switch, Route } from 'react-router-dom';
import SruveyStart from "../views/SruveyStart";
import SurveyDetail from '../views/SurveyDetail';
import SurveyFinal from '../views/SurveyFinal';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import MainHeader from '../components/MainHeader';

const indexRoutes = [
  { path: "/survey/start", component: SruveyStart },
  { path: "/survey/detail/:pathParam?", component: SurveyDetail },
  { path: "/survey/final", component: SurveyFinal},
];

const pageStyle = {
};

const SurveyPage = () => {

  const companyName = useSelector((state:any) => state.companyName);

  const history = useHistory();

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



export default withStyles(pageStyle)(SurveyPage);