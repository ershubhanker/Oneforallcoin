import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Paper,
  Button,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authreducer/action";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "./i18n";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
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

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    changeLanguage(newLanguage);
  };

  const menuItems = [
    { text: "How it work", link: "#how_it_work" },
    { text: "About", link: "#about" },
    { text: "Token", link: "#token" },

    { text: "Faq", link: "#faq" },
    { text: "Contact", link: "#contact" },
  ];

  return (
    <div>
      {/* Desktop Navbar */}
      <Hidden mdDown>
        <AppBar
          style={{
            backgroundColor: "#20126F",
            boxShadow: "none",
            transition: "height 0.3s ease",
          }}
          position="fixed"
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              margin: "auto",
            }}
          >
            <div>
              <a href="/" class="navbar-brand page-scroll">
                <img
                  style={{ width: "90px" }}
                  class="logo_light"
                  src="assets/images/OFA_1.png"
                  alt="logo"
                />
                {/* <h1 style={{ color: "white" }}>Oneforall</h1> */}
                <span>OFA</span>
                <img
                  class="logo_dark"
                  src="assets/images/logo_dark.png"
                  alt="logo"
                />
              </a>
            </div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <a href="#how_it_work">How it Work</a>
              <a href="#about">About</a>
              <a href="#token">Token</a>

              <a href="#faq">Faq</a>
              <a href="#contact">Contact</a>
              <button onClick={toggleLanguage}>
                {i18n.language === "en"
                  ? "Switch to Spanish"
                  : "Switch to English"}
              </button>

              {auth ? (
                <>
                  {" "}
                  <Profile />
                </>
              ) : (
                <Link to={"/login"}>
                  <Button
                    style={{
                      display: "inline-block",
                      padding: "10px 15px",
                      borderRadius: "5px",
                      backgroundColor: "#20126F",
                      color: "white",
                      textDecoration: "none",
                      transition: "background-color 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    {auth ? "Logout" : "Login"}{" "}
                  </Button>
                </Link>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </Hidden>

      {/* Mobile and Tablet Navbar */}
      <Hidden mdUp>
        <AppBar
          style={{
            backgroundColor: "#20126F",
            boxShadow: "none",
            transition: "height 0.3s ease",
          }}
          position="fixed"
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              margin: "auto",
              alignItems: "center",
            }}
          >
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              style={{ borderRadius: "5px" }}
            >
              <MenuIcon />
            </IconButton>

            <a href="/" style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ width: "90px" }}
                class="logo_light"
                src="assets/images/OFA_2.png"
                alt="logo"
              />
              {/* <h1 style={{ color: "white", margin: 0 }}>Oneforall</h1> */}
              <img
                class="logo_dark"
                src="assets/images/logo_dark.png"
                alt="logo"
              />
            </a>

            {auth ? (
              <>
                {" "}
                <Profile />
              </>
            ) : (
              <Link to={"/login"}>
                <Button
                  style={{
                    display: "inline-block",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    backgroundColor: "#20126F",
                    color: "white",
                    textDecoration: "none",
                    transition: "background-color 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  {auth ? "Logout" : "Login"}{" "}
                </Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Paper
            sx={{
              backgroundColor: "#20126F",
              height: "100%",
              borderRadius: "0px",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center", // Vertical centering
              // alignItems: "center", // Horizontal centering
            }}
          >
            <List>
              <Link to="/" onClick={toggleDrawer(false)}>
                <ListItemIcon
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "100px" }}
                    src="assets/images/OFA_1.png"
                  />
                </ListItemIcon>
              </Link>
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component="a"
                  href={item.link}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText
                    style={{
                      color: "white",
                      fontFamily: "sans-serif",
                    }}
                    primary={item.text}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Drawer>
      </Hidden>
    </div>
  );
};

export default Navbar;
