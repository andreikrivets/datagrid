/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from "redux";

import { fetchInfo } from "../actions";
import reducers from "../reducers";

const store = createStore(
  combineReducers(reducers) /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(fetchInfo);

export default store;
