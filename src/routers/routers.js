import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from '../components/home/home';
import SignInComponent from '../components/auth/signIn/SignInComponent';
import SignUpComponent from '../components/auth/signUp/SignUpComponent';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={home} />
        <Route path='/auth/sign-in' exact={true} component={SignInComponent} />
        <Route path='/auth/sign-up' exact={true} component={SignUpComponent} />
      </Switch>
    </Router>
  );
};

export default Routers;
