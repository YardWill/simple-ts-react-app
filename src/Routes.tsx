import * as React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import { About, Home } from './containers';

const Render = (routeProps: RouteProps) => (
  <Home {...routeProps} user="Default User" />
);

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={Render}
    />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
