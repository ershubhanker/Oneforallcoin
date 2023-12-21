import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../redux/authreducer/action";
import { Link, useNavigate } from "react-router-dom";
import TransactionDetails from "../pages/TransactionDetails";
import Cookies from "js-cookie";

const settings = ["Profile", "Logout"];

const Profile = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const user = useSelector((store) => store.authReducer.user);
  console.log(user);

  const navigate = useNavigate();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    handleCloseUserMenu();
  };

  const handleNav = () => {
    navigate("/transactionDetails");
    handleCloseUserMenu();
  };

  const handlePro = () => {
    navigate("/userProfile");
    handleCloseUserMenu();
  };

  const handleSec = () => {
    navigate("/changePassword");
    handleCloseUserMenu();
  };

  useEffect(() => {
    const shared = Cookies.get("userTok");
    if (shared) {
      dispatch(getUser(shared));
    }
  }, [dispatch]);

  // console.log(user.data.name)

  return (
    <Box sx={{ flexGrow: 0 }}>
      {user?.data ? (
        <Tooltip title= {`Hii There!! ${user.data.name}`}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            {user?.data ? (
              <Avatar alt={user.data.name} src="">
                {" "}
                {user.data.name ? user.data.name.charAt(0).toUpperCase() : ""}
              </Avatar>
            ) : (
              <Avatar alt="" src="">
                {" "}
              </Avatar>
            )}
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <Tooltip title="Settings"></Tooltip>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="" src="" />
          </IconButton>
        </>
      )}

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem style={{ display: "grid" }}>
          <Typography textAlign="center" onClick={handlePro}>
            Profile
          </Typography>

          <Typography onClick={handleNav} textAlign="center">
            Transactions
          </Typography>
          <Typography textAlign="center" onClick={handleSec}>
            Security
          </Typography>
          <Typography textAlign="center" onClick={handleLogout}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;
