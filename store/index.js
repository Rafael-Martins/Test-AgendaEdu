import { createStore, combineReducers } from "redux";
import { eventReducer } from "../reducers/index";

const rootReducer = combineReducers({
  events: eventReducer
});

const store = createStore(rootReducer);

export default store;
