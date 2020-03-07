/* eslint-disable no-underscore-dangle */
import { createStore } from "redux";
import information from "./reducers";

const store = createStore(
  information /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
