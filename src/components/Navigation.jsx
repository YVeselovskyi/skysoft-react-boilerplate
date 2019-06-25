import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from 'config';

import Logo from 'assets/images/logo.svg';

export const Navigation = () => (
  <div className="header-wrapper">
    <header className="header-item">
      <Link to={routes.home} className="react-link">
        <img className="logo" src={Logo} alt="React" />
        <h2>React</h2>
      </Link>
      <nav>
        <ul className="site-navigation">
          <li>
            <Link to={routes.home}>Home</Link>
          </li>
          <li>
            <Link to={routes.cars}>Cars</Link>
          </li>
          <li>
            <Link to={routes.car.red}>Red car</Link>
          </li>
          <li>
            <Link to={routes.car.green}>Green car</Link>
          </li>
          <li>
            <Link to="/car/pink">Another car</Link>
          </li>
          <li>
            <Link to="/notfoundpath">Not found</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);
