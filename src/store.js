import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import formReducer from "./ducks/formReducer";
import formInputReducer from "./ducks/formInputReducer";

const combinedReducers = combineReducers({
  forms: formReducer,
  formInput: formInputReducer
});

const middlewares = applyMiddleware(promiseMiddleware());
const store = createStore(combinedReducers, middlewares);

export default store;
