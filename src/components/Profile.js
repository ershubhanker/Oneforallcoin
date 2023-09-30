import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authreducer/action";
import { useNavigate } from "react-router-dom";



const settings = ["Profile", "Account", "Dashboard", "Logout"];





const Profile = () => {

  const [anchorElNav, setAnchorElNav] =useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate ();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch ();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };



  return (
    <Box  sx={{ flexGrow: 0 }}>
      <Tooltip   title="Open settings">
        <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Eve Holt" src="https://w0.peakpx.com/wallpaper/362/897/HD-wallpaper-anime-boy-aesthetic-aesthetic-anime-aesthetic-anime-boy-anime-aesthetic-anime-boy-cute-cute-anime-boy-sad-anime-boy-thumbnail.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px"}}
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
        {settings.map((setting) => (
          <MenuItem   key={setting} onClick={setting === "Logout" ? handleLogout : handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Profile;
