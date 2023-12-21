import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./components/MainRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { restoreAuth } from "./redux/authreducer/action";
import { useEffect } from "react";
import AuthCheckComponent from "./components/AuthCheckComponent";
import Navbar from "./components/Navbar";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Check for the existence of the authentication token in cookies
  //   const authToken = Cookies.get('authToken');

  //   if (authToken) {

  //     dispatch(restoreAuth(authToken));
  //   }
  // }, [dispatch]);

  return (
    <div className="App">
      <Navbar/>
      {/* <Header /> */}
      <MainRoutes />

      <Footer />
    </div>
  );
}

export default App;
