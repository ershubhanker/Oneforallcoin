import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PasswordReset from "./PasswordReset";
import TransactionDetails from "../pages/TransactionDetails";
import AuthCheckComponent from "./AuthCheckComponent";
import GetUser from "../pages/GetUser";
import Security from "../pages/Security";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} scrollToTop />
      <Route path="/login" element={<Login />} scrollToTop />
      <Route path="/signup" element={<Signup />} scrollToTop />
      <Route path="/resetPassword" element={<PasswordReset />} scrollToTop />
      <Route
        path="/transactionDetails"
        element={
          <PrivateRoute>
            <TransactionDetails />
          </PrivateRoute>
        }
        scrollToTop
      />

      <Route
        path="/userProfile"
        element={
          <PrivateRoute>
            <GetUser />
          </PrivateRoute>
        }
        scrollToTop
      />

      <Route
        path="/changePassword"
        element={
          <PrivateRoute>
            <Security />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
