import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import formGetReducer from "./ducks/formGetReducer";

const combineReducers = combineReducers({
  form: formGetReducer
});

const middlewares = applyMiddleware(promiseMiddleware());
const store = createStore(combineReducers, middlewares);

export default store;
