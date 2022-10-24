import AuthReducer from "./reducers/AuthReducer";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
