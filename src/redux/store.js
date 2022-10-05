import { combineReducers, createStore } from "react-redux";
import AuthReducer from "./reducers/AuthReducer";

const rootReducers = combineReducers({
  reducers: AuthReducer,
});

export const store = createStore(rootReducers);
