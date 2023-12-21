import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, logout } from "../redux/authreducer/action";
import Loading from "../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { Alert, AlertTitle, Stack } from "@mui/material";
import "../CSS/animate.css";

const Security = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { changePass, isLoading } = useSelector((store) => store.authReducer);
  console.log(changePass);

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      // Display an error
      setErrorMessage("Password and Confirm Password do not match");
      setShowErrorAlert(true);
      return;
    }

    if (!currentPassword || !newPassword || !confirmPassword) {
      // Display an error
      setErrorMessage("All fields are required");
      setShowErrorAlert(true);
      return;
    }

    dispatch(changePassword(currentPassword, newPassword)).then(() => {
      setErrorMessage("Password changed successfully. Login again to continue");
      setShowErrorAlert(false);
      setShowSuccessAlert(true);

      setTimeout(() => {
        dispatch(logout());
      }, 3000);
    })
    .catch((err)=>{
      setErrorMessage(err.response.data.message)
      setShowErrorAlert(true)
      setShowSuccessAlert(false)
      return;
    })

    // alert("Password changed succesfully. Login again to continue");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  useEffect(() => {
    navigate(location.state, { replace: true });
  }, [dispatch]);

  return isLoading ? (
    <Loading />
  ) : (
    <div style={{ marginTop: "120px" }}>
      <div>
        <label>Current Password:</label>
        <br />
        <input
          style={{
            width: "50%",
            border: "2px solid blue",
            borderRadius: "5px",
          }}
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div>
        <label>New Password:</label>
        <br />
        <input
          style={{
            width: "50%",
            border: "2px solid blue",
            borderRadius: "5px",
          }}
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div>
        <label>Confirm New Password:</label>
        <br />
        <input
          style={{
            width: "50%",
            border: "2px solid blue",
            borderRadius: "5px",
          }}
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </div>
      <button
        style={{ marginBottom: "20px", marginTop: "15px", borderRadius: "5px" }}
        onClick={handlePasswordChange}
      >
        Change Password
      </button>
      {/* {changePass && <p style={{ color: "green" }}>{changePass}</p>} */}

      <div className="alert-container">
        {showErrorAlert && (
          <Alert
            severity="error"
            variant="filled"
            onClose={() => setShowErrorAlert(false)}
          >
            <AlertTitle>Error</AlertTitle>
            {errorMessage}
          </Alert>
        )}
      </div>

      {/* Material-UI Success Alert */}
      <div className="alert-container">
        {showSuccessAlert && (
          <Alert severity="success"  variant="filled" onClose={() => setShowSuccessAlert(false)}>
            <AlertTitle>Success</AlertTitle>
            Password changed successfully. Login again to continue.
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Security;
