import axios from 'axios';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';

const AuthInterceptor = () => {
  const location = useLocation();  // Use useLocation inside a functional component

  axios.interceptors.response.use(
    (response) => {
      // Assuming the response contains the authentication token
      const authToken = response.data.token;
      const cookiePath = location.pathname;
      
      // Set the authentication token in a cookie
      Cookies.set("authToken", authToken, { expires: 1, path: cookiePath }); // expires in 1 day
      console.log(authToken);
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return null;
};

export default AuthInterceptor;
