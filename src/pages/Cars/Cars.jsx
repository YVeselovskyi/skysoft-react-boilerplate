import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCarsList } from './store/cars/cars.actions';
import { carsSelector } from './store/cars/cars.selector';

const CarsComponent = ({ carsList, setCars }) => {
  useEffect(() => {
    setCars();
  }, [setCars]);
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

export const Cars = connect(
  mapStateToProps,
  { setCars: setCarsList },
)(CarsComponent);
