import React, { FC, useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import { EmployeeUpdate } from "../../Types/EmployeeUpdate";

type EmployeeUpdateFormProps = {
  employee: EmployeeUpdate;
  onUpdate: (employee: EmployeeUpdate) => void;
};

export const EmployeeUpdateForm: FC<EmployeeUpdateFormProps> = ({
  employee,
  onUpdate,
}) => {
  const [formData, setFormData] = useState({
    first_name: employee.first_name,
    last_name: employee.last_name,
    email: employee.email,
    password: employee.password,
    address: employee.address,
    phone: employee.phone,
  });

  useEffect(() => {
    setFormData({
      first_name: employee.firstName,
      last_name: employee.lastName,
      email: employee.email,
      password: employee.password,
      address: employee.address,
      phone: employee.phone,
    });
  }, [employee]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Submitting form data:", formData); // debug line
      await onUpdate(formData);
      console.log("Submitting form data:", formData); // debug line
      console.log(employee.employeeId);
    } catch (error) {
      console.error("Update failed:", error);
      // print id in console
      console.log(employee.employeeId);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          marginTop: 4,
          borderRadius: "10px",
          border: "2px solid #ff9800",
          backgroundColor: "#ffffff",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            align="center"
            gutterBottom
            sx={{ color: "#ff9800", fontWeight: "bold" }}
          >
            Update Employee
          </Typography>
          <TextField
            fullWidth
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ff9800" },
                "&:hover fieldset": { borderColor: "#e68900" },
                "&.Mui-focused fieldset": { borderColor: "#ff9800" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ff9800" },
                "&:hover fieldset": { borderColor: "#e68900" },
                "&.Mui-focused fieldset": { borderColor: "#ff9800" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            disabled
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#eeeeee",
                borderRadius: "5px",
              },
            }}
          />
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ff9800" },
                "&:hover fieldset": { borderColor: "#e68900" },
                "&.Mui-focused fieldset": { borderColor: "#ff9800" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ff9800" },
                "&:hover fieldset": { borderColor: "#e68900" },
                "&.Mui-focused fieldset": { borderColor: "#ff9800" },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#ff9800",
              color: "white",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#e68900" },
            }}
          >
            Update
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default EmployeeUpdateForm;
