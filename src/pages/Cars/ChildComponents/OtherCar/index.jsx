import React from 'react';
import { withRouter } from 'react-router';

import { Navigation } from 'components';

const OtherCarWithRouter = ({
  match: {
    params: { id },
  },
}) => (
  <div>
    <Navigation />
    This is a {id} car withRouter
  </div>
);

const OtherCar = withRouter(OtherCarWithRouter);

export default OtherCar;
