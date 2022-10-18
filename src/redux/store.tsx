import AuthReducer from "./reducers/AuthReducer";
import { configureStore } from "@reduxjs/toolkit";

console.log("logging in store");
export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
