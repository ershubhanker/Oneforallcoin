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
import { I18nextProvider } from "react-i18next";
import { i18n } from "./components/i18n";

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
      <I18nextProvider i18n={i18n}>
      <Navbar/>
      {/* <Header /> */}
      <MainRoutes />

      <Footer />
      </I18nextProvider>
     
    </div>
  );
}

export default App;
