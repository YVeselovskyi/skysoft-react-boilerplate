import React from 'react';
import { withRouter } from 'react-router';

import { Navigation } from 'components';

const AnotherCarComponent = ({
  match: {
    params: { id },
  },
}) => (
  <div>
    <Navigation />
    This is a {id} car withRouter
  </div>
);

export const AnotherCar = withRouter(AnotherCarComponent);
