import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from '../components/home/home';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={home} />
      </Switch>
    </Router>
  );
};

export default Routers;
