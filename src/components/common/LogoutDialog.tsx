import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";

interface LogoutDialogProps {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const LogoutDialog: React.FC<LogoutDialogProps> = ({ open, onClose, onLogout }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Logout</DialogTitle>
      <DialogContent>
        Are you sure you want to log out?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onLogout} color="primary">
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
