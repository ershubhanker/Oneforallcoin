import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../redux/authreducer/action";
import Loading from "../components/Loading";

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading } = useSelector((store) => store.authReducer);
  console.log(location);

  const dispatch = useDispatch();

  const handleReg = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // Display an error (you can handle this in a better way, like showing a message)
      console.error("Password and Confirm Password do not match");
      return;
    }

    const data = {
      username,
      name,
      age,
      email,
      password,
    };

    dispatch(register(data));
    navigate("/login");

    setuserName("");
    setEmail("");
    setName("");
    setAge("");
    setPassword("");
    setConfirmPassword("");
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
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
                  <h2>REGISTER</h2>
                </div>
                <div class="authorize_form">
                  <form onSubmit={handleReg}>
                    <div class="form-group">
                      <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => {
                          setuserName(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        name="age"
                        value={age}
                        placeholder="Age"
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="E-mail"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        id="password-field"
                        name="password"
                        placeholder="Password"
                        required
                      />
                      <span
                        data-toggle="#password-field"
                        class="ion-eye toggle-password"
                      ></span>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        id="cpassword-field"
                        name="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                        required
                      />
                      <span
                        data-toggle="#cpassword-field"
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
                          I agree with{" "}
                          <a style={{ color: "white" }} href="#">
                            Terms of Services
                          </a>
                        </label>
                      </div>
                    </div>
                    <div class="form-group text-center">
                      <button type="submit" class="btn btn-default">
                        Sign Up
                      </button>
                    </div>
                    <div class="form-group text-center">
                      <span style={{ color: "white" }}>
                        Back to{" "}
                        <Link to={"/login"}>
                          <a style={{ color: "#ffffff" }}>
                            <u>Login</u>
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
    </>
  );
};

export default Signup;
