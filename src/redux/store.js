// import { combineReducers, configureS } from "react-redux";
import AuthReducer from "./reducers/AuthReducer";
import { configureStore } from "@reduxjs/toolkit";
// const rootReducers = combineReducers({
//   reducers: AuthReducer,
// });

// export const store = createStore(rootReducers);

console.log("logging in store");
export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
