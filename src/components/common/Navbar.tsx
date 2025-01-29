import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import LogoutDialog from "./LogoutDialog"; 

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleLogoutClick = () => {
    setOpenDialog(true); 
  };

  return (
    <>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Management System
          </Typography>
          <Button color="inherit" onClick={handleLogoutClick} startIcon={<LogoutIcon />}>
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
