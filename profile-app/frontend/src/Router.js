import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import NotFound from './components/404/NotFound.js';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
