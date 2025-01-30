<<<<<<< HEAD
import React, { FC, useState } from "react";
import {TextField, Button, Box, Typography, Paper, Container} from "@mui/material";
=======
import React, { FC, useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Container,
} from "@mui/material";
>>>>>>> 0e46da5182817886fedaf2bd9f183aa399d3bb3b
import { EmployeeUpdate } from "../../Types/EmployeeUpdate";

type EmployeeUpdateFormProps = {
  employee: EmployeeUpdate & { employeeId: number }; // Include employeeId in the type
  onUpdate: (employee: EmployeeUpdate) => Promise<void>;
};

export const EmployeeUpdateForm: FC<EmployeeUpdateFormProps> = ({
  employee,
  onUpdate,
}) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    setFormData({
      first_name: employee.first_name,
      last_name: employee.last_name,
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
      //console.log("Submitting form data:", formData); // debug  line
      await onUpdate(formData);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Update Employee
          </Typography>

          <TextField
            fullWidth
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Update
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default EmployeeUpdateForm;
