import AuthReducer from "./reducers/AuthReducer";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { Action } from "redux";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
// import devToolsEnhancer from "remote-redux-devtools";
// import { composeWithDevTools } from "redux-devtools-extension";

console.log("logging in store");

// const middleware = [];

// middleware.push(createLogger());
// const enhancers = [...middleware];

// const persistConfig: any = { enhancers };

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default configureStore(
  {
    reducer: {
      auth: AuthReducer,
    },

    // middleware: enhancers,

    // devTools: true,
    // enhancers: [devToolsEnhancer({ realtime: true })],
    // devTools: [devToolsEnhancer({ realtime: true })],
  }
  // applyMiddleware(thunk)
);
