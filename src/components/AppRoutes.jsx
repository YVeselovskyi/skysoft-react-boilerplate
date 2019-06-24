import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'config';

const AppRoutes = () => (
  <Switch>
    {routes.map(router => (
      <Route key={router.path} {...router} />
    ))}
  </Switch>
);

export default AppRoutes;
