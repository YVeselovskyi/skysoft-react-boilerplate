import { carsActions } from './cars.actions';

export const initialState = {
  carsList: [],
};

export function carsReducer(state = initialState, action) {
  switch (action.type) {
    case carsActions.SET_CARS_LIST:
      return {
        ...state,
        carsList: action.payload,
      };
    default:
      return state;
  }
}
