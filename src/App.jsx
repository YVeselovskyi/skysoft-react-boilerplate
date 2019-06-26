import React from 'react';
import { Router } from 'react-router-dom';
import { AppRoutes } from 'components';
import { history } from 'core/routing/history';

export const App = () => (
  <Router history={history}>
    <AppRoutes />
  </Router>
);
