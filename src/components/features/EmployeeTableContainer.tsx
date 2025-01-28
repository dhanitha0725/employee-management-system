import React, { useState, useEffect } from "react";
import { Employee } from "../../Types/Employee";
import EmployeeTable from "./EmployeeTable";
import { Box, CircularProgress, Typography } from "@mui/material";
import { fetchEmployees } from "../../services/employeeService";

const EmployeeTableContainer: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //fetch the token
  const token = localStorage.getItem("token");

  //fetch emp data when component mounts
  useEffect(() => {
    const fetchEmployeesData = async () => {
      if (!token) {
        setError("Authentication required");
        console.log("Token from localStorage:", token);
        setLoading(false);
        return;
      }

      try {
        const employeeData = await fetchEmployees(token);
        setEmployees(employeeData);
      } catch (error) {
        console.error("Error fetching employees:", error);
        setError("Error fetching employees");
      } finally {
        setLoading(false);
      }
    };
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
  return <EmployeeTable employees={employees} />;
};

export default EmployeeTableContainer;
