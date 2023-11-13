import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/authreducer/action";
import Profile from "./Profile";

const Header = () => {
  const { auth } = useSelector((store) => store.authReducer);
  const navigate = useNavigate();
  console.log(auth);
  const { token } = useSelector((store) => store.authReducer);
  console.log(token);

  const { isLoading } = useSelector((store) => store.authReducer);
  console.log(isLoading);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header
      style={{ backgroundColor: "#20126f " }}
      class="header_wrap fixed-top"
      auth={auth}
    >
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <Link to={"/"}>
            <a  class="navbar-brand page-scroll">
              {/* <img style={{width:"90px"}}  class="logo_light" src="assets/images/OFA_2.png" alt="logo" /> */}
              <h1  style={{color:"white"}} >Oneforall</h1>
              <img
                class="logo_dark"
                src="assets/images/logo_dark.png"
                alt="logo"
              />
            </a>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span class="ion-android-menu"></span>{" "}
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li>
                <a class="nav-link page-scroll" href="#how_it_work">
                  How it Work
                </a>
              </li>
              <li>
                <a class="nav-link page-scroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link page-scroll" href="#token">
                  Token
                </a>
              </li>
              <li>
                <a class="nav-link page-scroll" href="#road_map">
                  Road Map
                </a>
              </li>
              <li>
                <a class="nav-link page-scroll" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a class="nav-link page-scroll" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a class="nav-link page-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <ul class="navbar-nav nav_btn">
              {auth ? (
                <>
                  {" "}
                  <Profile />
                </>
              ) : (
                <li>
                  <Link to={"/login"}>
                    <a class="btn btn-default"> {auth ? "Logout" : "Login"} </a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
