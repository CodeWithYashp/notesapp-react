import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "../constants/logo.png";

const Header: React.FC = () => {
  return (
    <AppBar
      color="transparent"
      style={{ backgroundColor: "#e28cb9" }}
      position="static"
    >
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 30, marginRight: 10 }} />
        <Typography
          fontWeight={600}
          fontSize={25}
          style={{ fontFamily: "mooli, sans-serif" }}
        >
          InstaNote
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

//#dcdbfc
