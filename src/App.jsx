import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from 'components';

export const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);
