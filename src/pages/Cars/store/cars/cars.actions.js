export const carsActions = {
  SET_CARS_LIST: '[CARS] SET_CARS_LIST',
};

export const setCarsList = () => {
  return {
    type: carsActions.SET_CARS_LIST,
    payload: ['Porsche', 'BMW', 'Mitsubishi'],
  };
};
