import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from 'config';
import { Home } from 'pages/Home/Home';
import { Cars } from 'pages/Cars/Cars';
import { AnotherCar, GreenCar, RedCar } from 'pages/Cars/ChildComponents';

import { Navigation } from '../Navigation';
import { NotFound } from '../NotFound';

import './AppRoutes.scss';

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
