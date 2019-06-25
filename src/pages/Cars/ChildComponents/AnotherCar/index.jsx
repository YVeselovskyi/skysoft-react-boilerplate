import React from 'react';
import { withRouter } from 'react-router';

const AnotherCarComponent = ({
  match: {
    params: { id },
  },
}) => <div>{id} car withRouter</div>;

export const AnotherCar = withRouter(AnotherCarComponent);
