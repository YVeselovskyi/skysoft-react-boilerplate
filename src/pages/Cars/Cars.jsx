import React, { useReducer, useEffect } from 'react';
import { carsReducer, initialState } from './store/cars/cars.reducer';
import { setCarsList } from './store/cars/cars.actions';

export const Cars = () => {
  const [data, dispatch] = useReducer(carsReducer, initialState);

  useEffect(() => {
    setCarsList()(dispatch);
  }, []);

  return (
    <div>
      {data.carsList.map((car, index) => (
        <p key={`car-${index}`}>{car}</p>
      ))}
    </div>
  );
};
