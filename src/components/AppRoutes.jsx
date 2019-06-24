import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Cars } from 'pages';
import { RedCar, GreenCar, OtherCar } from 'pages/Cars';
import { NotFound } from 'components';

import { routes } from 'config';

const AppRoutes = () => (
  <Switch>
    <Route exact path={routes.home} component={Home} />
    <Route exact path={routes.cars} component={Cars} />
    <Route exact path={routes.car.red} component={RedCar} />
    <Route exact path={routes.car.green} component={GreenCar} />
    <Route exact path={routes.otherCar} component={OtherCar} />
    <Route component={NotFound} />
  </Switch>
);

export default AppRoutes;
