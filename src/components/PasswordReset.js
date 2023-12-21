import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { resetPassword } from "../redux/authreducer/action";

const PasswordReset = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading, resetPasswordError } = useSelector(
    (store) => store.authReducer
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(token, newPassword));
  };

  return (
    <div>
      <h2 style={{ color: "black" }}>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ color:"InfoText"}}>
          <label >New Password:</label>
          <input
            style={{ color: "black" }}
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" disabled={isLoading}>
            Reset Password
          </button>
        </div>
        {resetPasswordError && (
          <div style={{ color: "red" }}>{resetPasswordError}</div>
        )}
      </form>
    </div>
  );
};

export default PasswordReset;
