import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  auth: false,
  token: "",
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

      case LOGOUT_SUCCESS:
        return {
            ...state,
            isLoading:false,
            token: "",
            auth: false
        }

    default:
      return state;
  }
};
