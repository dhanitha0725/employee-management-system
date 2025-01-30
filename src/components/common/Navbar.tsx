import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import LogoutDialog from "./LogoutDialog"; 
import './Navbar.css'; // Import the CSS file

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleLogoutClick = () => {
    setOpenDialog(true); 
  };

  return (
    <>
      <AppBar position="static" className="appbar" style={{ backgroundColor: '#fc7e00' }}>
        <Toolbar className="toolbar">
          <Typography variant="h6" component="div" className="title">
            Employee Management System
          </Typography>
            <Button className="logout-button" onClick={handleLogoutClick} startIcon={<LogoutIcon className="logout-icon" />} style={{ color: 'white' }}>
            Logout
            </Button>
        </Toolbar>
      </AppBar>

      {/* Use LogoutDialog component */}
      <LogoutDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onLogout={() => {
          localStorage.removeItem("userToken");
          sessionStorage.removeItem("userToken");
          navigate("/"); // Redirect after logout
        }}
      />
    </>
  );
};

export default Navbar;
