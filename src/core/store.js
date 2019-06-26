import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

import { rootReducer } from './root.reducer';

const initialState = {};

const enhancers = [devToolsEnhancer()];

const middleware = [thunk];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export const store = createStore(rootReducer, initialState, composedEnhancers);
