import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCarsList as setCarsListAction } from './store/cars/cars.actions';

import { carsSelector } from './store/cars/cars.selector';

const CarsComponent = ({ carsList, setCarsList }) => {
  useEffect(() => {
    setCarsList();
  }, []);
  return (
    <div>
      {carsList.map((car, index) => (
        <p key={`car-${index}`}>{car}</p>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  carsList: carsSelector.carsList(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCarsList: setCarsListAction,
    },
    dispatch,
  );

export const Cars = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarsComponent);
