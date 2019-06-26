import { keyManager } from 'utils/key-manager';

const prefix = '[CARS] ';

const types = {
  SET_CARS_LIST: 'SET_CARS_LIST',
};

export const carsActions = keyManager(types, prefix);

export const setCarsList = () => {
  return {
    type: carsActions.SET_CARS_LIST,
    payload: ['Porsche', 'BMW', 'Mitsubishi'],
  };
};
