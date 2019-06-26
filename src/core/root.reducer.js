import { combineReducers } from 'redux';
import { carsReducer } from '../pages/Cars/store/cars/cars.reducer';

export const rootReducer = combineReducers({
  cars: carsReducer,
});
