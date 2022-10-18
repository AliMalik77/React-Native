import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  IS_LOADING,
} from "../types/AuthType";

export const Login = () => {
  console.log("logging in reducer");
  return (dispatch) => {
    try {
      dispatch({ type: IS_LOADING });
      dispatch({ type: LOGIN_SUCCESS });
    } catch (err) {
      dispatch({ type: LOGIN_FAILURE, err });
    }
  };
};
