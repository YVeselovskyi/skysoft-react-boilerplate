import { keyManager } from 'utils/key-manager';

const types = {
  SET_CARS_LIST: 'SET_CARS_LIST',
};

const prefix = { prefix: '[CARS] ' };

export const carsActions = keyManager(types, prefix);

export const setCarsList = () => dispatch => {
  dispatch({
    type: carsActions.SET_CARS_LIST,
    payload: ['Porsche', 'BMW', 'Mitsubishi'],
  });
};
