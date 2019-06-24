import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from 'config';

const Navigation = () => (
  <ul>
    <li>
      <Link to={routes.home}>Home</Link>
    </li>

    <li>
      <Link to={routes.cars}>cars</Link>
    </li>

    <li>
      <Link to={routes.car.red}>red car</Link>
    </li>

    <li>
      <Link to={routes.car.green}>green car</Link>
    </li>

    <li>
      <Link to="/car/pink">another car</Link>
    </li>

    <li>
      <Link to="/notfoundpath">Not found</Link>
    </li>
  </ul>
);

export default Navigation;
