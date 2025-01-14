import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ width: "100%" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
