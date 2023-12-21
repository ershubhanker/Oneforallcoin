import {
  CHANGE_PASSWORD_FAIURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REG_FAILURE,
  REG_REQUEST,
  REG_SUCCESS,
  RESET_PASSOWRD_REQUEST,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS,
  RESTORE_AUTH,
  TRANSACTION_DETAILS_FAILURE,
  TRANSACTION_DETAILS_REQUEST,
  TRANSACTION_DETAILS_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  auth: false,
  token: "",

  resetEmailSent: false,
  resetEmailError: "",
  buyTokensDetails: [],
  user: [],
  changePass: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
        auth: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case REG_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case REG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case REG_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoading: false,
        isError: false,
      };

    case GET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePass: payload,
        isLoading: false,
        isError: false,
      };

    case CHANGE_PASSWORD_FAIURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case RESET_PASSOWRD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        resetEmailSent: false,
        resetPasswordError: "",
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resetEmailSent: true,
      };

    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        resetEmailError: payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: "",
        auth: false,
        buyTokensDetails: [],
      };

    case RESTORE_AUTH:
      return {
        ...state,
        token: payload,
        auth: true,
      };

    case TRANSACTION_DETAILS_REQUEST:
      return {
        ...state,
        buyTokensDetails: null,
        isLoading: true,
        error: null,
      };

    case TRANSACTION_DETAILS_SUCCESS:
      return {
        ...state,
        buyTokensDetails: payload,
        isLoading: false,
        error: null,
      };

    case TRANSACTION_DETAILS_FAILURE:
      return {
        ...state,
        buyTokensDetails: null,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
