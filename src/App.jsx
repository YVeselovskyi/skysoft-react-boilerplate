import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from 'components';

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
