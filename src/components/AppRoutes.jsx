import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Cars } from 'pages';
import { RedCar, GreenCar, AnotherCar } from 'pages/Cars';
import { NotFound, Navigation } from 'components';

import { routes } from 'config';

export const AppRoutes = () => (
  <div>
    <Navigation />
    <div className="component-container">
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.cars} component={Cars} />
        <Route exact path={routes.car.red} component={RedCar} />
        <Route exact path={routes.car.green} component={GreenCar} />
        <Route exact path={routes.otherCar} component={AnotherCar} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);
