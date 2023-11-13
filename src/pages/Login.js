import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/authreducer/action";
import Loading from "../components/Loading";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading } = useSelector((store) => store.authReducer);
  console.log(location);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData)).then(() => {
      navigate(location.state, { replace: true });
      navigate("/");
    });

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <section
      style={{ marginTop: "50px", backgroundColor: "#0f3e97" }}
      class="pt-0"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              style={{ backgroundColor: "#0f3e97", marginTop: "150px" }}
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
                      type="password"
                      id="password-field"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                    <span
                      data-toggle="#password-field"
                      class="ion-eye toggle-password"
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
                      href="lost-password-blue.html"
                      class="forgot_pass"
                    >
                      Forgot Password?
                    </a>
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
    </section>
  );
};

export default Login;
