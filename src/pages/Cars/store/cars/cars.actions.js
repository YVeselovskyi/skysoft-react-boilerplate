export const SET_CARS_LIST = '[CARS] got cars list';

export const setCarsList = () => dispatch => {
  dispatch({
    type: SET_CARS_LIST,
    payload: ['Porsche', 'BMW', 'Mitsubishi'],
  });
};
