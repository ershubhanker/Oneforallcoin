import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes"

export const login =(userData)=> (dispatch) => {
    dispatch({type : LOGIN_REQUEST})
   return axios.post("https://reqres.in/api/login" , userData).then((res)=> {
          dispatch ({type : LOGIN_SUCCESS , payload : res.data.token})
          console.log(res.data)
    }).catch(()=>{
      dispatch({type : LOGIN_FAILURE})
    })
}
export const logout = ()=>{
    return {
        type:"LOGOUT_SUCCESS"
    }
}