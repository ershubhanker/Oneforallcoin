import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, resetPassword } from "../redux/authreducer/action";
import Loading from "../components/Loading";
import { Alert, AlertTitle } from "@mui/material";
import "../CSS/animate.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [alertComponent, setAlertComponent] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading, resetEmailSent, resetEmailError } = useSelector(
    (store) => store.authReducer
  );
  console.log(location);
  // const msg = useSelector((store) => store.authReducer.msg);
  // // console.log(msg);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData))
      .then(() => {
        const alertComponent = (
          <Alert
            variant="filled"
            severity="success"
            onClose={() => setAlertComponent(null)}
          >
            <AlertTitle>Login Successfull!!</AlertTitle>
            <strong>Redirecting to you on homepage.</strong>
          </Alert>
        );
        setAlertComponent(alertComponent);

        // Navigate after a delay, or when the user closes the alert
        setTimeout(() => {
          navigate(location.state, { replace: true });
          navigate("/");
        }, 1000); 
      })
      .catch((err) => {
        const alertComponent = (
          <Alert
            variant="filled"
            severity="error"
            onClose={() => setAlertComponent(null)}
          >
            <AlertTitle>Error</AlertTitle>
            {err.response.data.msg} <strong>check it out once!</strong>
          </Alert>
        );
        setAlertComponent(alertComponent);

        setTimeout(() => {
          setAlertComponent(null);
        }, 3000);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const handleForgotPasswordClick = () => {
    dispatch(resetPassword(email));
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <section
      style={{ marginTop: "50px", backgroundImage: `url('assets/images/login_backone.jpg')` , backgroundSize:"cover" }}
      class="pt-0"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              style={{ backgroundColor: "#2E2E2E", marginTop: "150px" }}
              class="authorize_box"
            >
              <div class="title_light text-center">
                <h2>Login</h2>
              </div>

              <div class="authorize_form">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="E-mail"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password-field"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      data-toggle="#password-field"
                      class={`ion-eye toggle-password ${
                        passwordVisible ? "visible" : ""
                      }`}
                    ></span>
                  </div>
                  <div class="form-group">
                    <div class="checkbox_field d-inline">
                      <input
                        type="checkbox"
                        value="rememberme"
                        id="rememberme"
                        name="rememberme"
                      />
                      <label style={{ color: "white" }} for="rememberme">
                        Remember me
                      </label>
                    </div>

                    <a
                      style={{ color: "white" }}
                      onClick={handleForgotPasswordClick}
                      disabled={isLoading}
                      class="forgot_pass"
                    >
                      Forgot Password?
                    </a>
                    {resetEmailSent && (
                      <div>Password reset email sent successfully!</div>
                    )}
                    {resetEmailError && (
                      <div style={{ color: "red" }}>{resetEmailError}</div>
                    )}
                  </div>
                  <div class="form-group text-center">
                    <button type="submit" class="btn btn-default">
                      Login
                    </button>
                  </div>
                  <div class="form-group text-center">
                    <span style={{ color: "white" }}>
                      if you don't have an account{" "}
                      <Link to={"/signup"}>
                        <a>
                          <u style={{ color: "#ffffff" }}>Sign Up</u>
                        </a>
                      </Link>{" "}
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {alertComponent && (
        <div className="alert-container">{alertComponent}</div>
      )}
    </section>
  );
};

export default Login;
