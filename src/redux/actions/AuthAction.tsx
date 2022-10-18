import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  IS_LOADING,
} from "../types/AuthType";

export const Login = () => {
  return (dispatch: any) => {
    try {
      dispatch({ type: IS_LOADING });
      dispatch({ type: LOGIN_SUCCESS });
    } catch (err) {
      dispatch({ type: LOGIN_ERROR, err });
    }
  };
};

export const SearchType = () => {
  return (dispatch: any) => {
    //  try {
    //    dispatch({ type: IS_LOADING });
    //    dispatch({ type: LOGIN_SUCCESS });
    //  } catch (err) {
    //    dispatch({ type: LOGIN_ERROR, err });
    //  }
  };
};
