import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import formGetReducer from "./ducks/formGetReducer";
import formInputReducer from "./ducks/formInputReducer";

const combinedReducers = combineReducers({
  forms: formGetReducer,
  formInput: formInputReducer
});

const middlewares = applyMiddleware(promiseMiddleware());
const store = createStore(combinedReducers, middlewares);

export default store;
