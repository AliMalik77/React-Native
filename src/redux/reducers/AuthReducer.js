import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  IS_LOADING,
} from "../types/AuthType";

const initialState = {
  signedIn: false,
  isLoading: false,
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signedIn: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authError: action.error.message,
        isLoading: false,
      };
  }
};

export default authReducer;
