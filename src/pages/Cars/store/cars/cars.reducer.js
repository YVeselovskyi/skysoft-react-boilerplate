import { SET_CARS_LIST } from './cars.actions';

export const initialState = {
  carsList: [],
};

export function carsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARS_LIST:
      return {
        ...state,
        carsList: action.payload,
      };
    default:
      return state;
  }
}
