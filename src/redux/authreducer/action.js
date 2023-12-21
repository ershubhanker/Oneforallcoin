import axios from "axios";
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
import Cookies from "js-cookie";

// const characters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// function generateString(length) {
//   let result = " ";
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }

//   return result;
// }

// axios.interceptors.response.use(
//   (response) => {
//     // Assuming the response contains the authentication token
//     const authToken = generateString(100);

//     // Set the authentication token in a cookie
//     Cookies.set("authTok", authToken, { expires: 1 }); // expires in 1 day
//     console.log(authToken);
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const restoreAuth = (authToken) => (dispatch) => {
  dispatch({ type: RESTORE_AUTH, payload: authToken });
};

export const login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("https://api.oneforallcoin.com/api/v1/user/login", userData)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      Cookies.set("userTok", res.data.token, { expires: 1 });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE , payload : err.response.data.msg });
      console.log(err.response.data.msg)
      throw err;
    });
};

export const register = (data) => (dispatch) => {
  dispatch({ type: REG_REQUEST });
  axios
    .post("https://api.oneforallcoin.com/api/v1/user/create", data)
    .then((res) => {
      dispatch({ type: REG_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: REG_FAILURE });
      
    });
};

export const getUser = (token) => (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return axios
    .get("https://api.oneforallcoin.com/api/v1/user/getuser", config)
    .then((res) => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((error) => {
      dispatch({ type: GET_USER_FAILURE });
    });
};

export const changePassword = (currentPassword, newPassword) => (dispatch) => {
  dispatch({ type: CHANGE_PASSWORD_REQUEST });

  const token = Cookies.get("userTok");
  return axios.post(
    "https://api.oneforallcoin.com/api/v1/user/changePassword",
    { currentPassword, newPassword },
    { headers: { Authorization: `Bearer ${token}` } }
  )
  .then((res)=>{
    dispatch({type : CHANGE_PASSWORD_SUCCESS , payload: res.data.message})
    console.log(res.data)
  })
  .catch((err)=>{
    dispatch({type : CHANGE_PASSWORD_FAIURE , payload : err.response.data.message})
    console.log(err.response.data.message)
    throw err
  })
};

export const resetPassword = (email) => (dispatch) => {
  dispatch({ type: RESET_PASSOWRD_REQUEST });
  axios
    .post("http://localhost:9090/user/forgot-password", email)
    .then((res) => {
      dispatch({ type: RESET_PASSWORD_SUCCESS });
    })
    .catch((err) => {
      dispatch({
        type: RESET_PASSWORD_FAILURE,
        payload: err.response.data.msg,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });

  // Cookies.remove("authTok");
  Cookies.remove("userTok");
};

export const getBuyTokenDetails = (queryParams) => (dispatch) => {
  dispatch({ type: TRANSACTION_DETAILS_REQUEST });
  return axios
    .get("https://api.oneforallcoin.com/api/v1/ico/getBuyTokenDetails", {
      params: queryParams,
    })
    .then((res) => {
      dispatch({ type: TRANSACTION_DETAILS_SUCCESS, payload: res.data });
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      dispatch({
        type: TRANSACTION_DETAILS_FAILURE,
        payload: "Error while fetching the transaction",
      });
      throw error;
    });
};
