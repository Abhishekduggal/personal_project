import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import formGetReducer from "./ducks/formGetReducer";

const combinedReducers = combineReducers({
  forms: formGetReducer
});

const middlewares = applyMiddleware(promiseMiddleware());
const store = createStore(combinedReducers, middlewares);

export default store;
