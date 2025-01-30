import React, { useState, useEffect } from "react";
import { Employee } from "../../Types/Employee";
import { Box, CircularProgress, Typography } from "@mui/material";
import { fetchEmployees } from "../../services/employeeService";
import EmployeeTable from "./EmployeeTable";

const EmployeeTableContainer: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the token from local storage
  const token = localStorage.getItem("authToken");

  const fetchEmployeesData = async () => {
    if (!token) {
      setError("Authentication required");
      setLoading(false);
      return;
    }

    try {
      const employeeData = await fetchEmployees(token);
      setEmployees(employeeData);
      console.log("Fetched employees:", employeeData); //debug line
    } catch (error) {
      console.error("Error fetching employees:", error);
      setError("Error fetching employees");
    } finally {
      setLoading(false);
    }
  };

  // Fetch employee data when component mounts
  useEffect(() => {
    fetchEmployeesData();
  }, [token]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <EmployeeTable employees={employees} fetchEmployees={fetchEmployeesData} />
  );
};

export default EmployeeTableContainer;
