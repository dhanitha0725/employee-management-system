import "../styles/EmployeeUpdatePage.css";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { Box, Snackbar, Alert } from "@mui/material";
import EmployeeUpdateForm from "../components/features/EmployeeUpdateForm";
import { EmployeeUpdate } from "../Types/EmployeeUpdate";
import { fetchEmployee, updateEmployee } from "../services/employeeService";

const EmployeeUpdatePage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extracts the employee ID from the URL
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<
    (EmployeeUpdate & { employeeId: number }) | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        if (!id || !token) {
          throw new Error("Missing employee ID or authentication token");
        }

        const data = await fetchEmployee(parseInt(id), token); // Convert id to number
        //console.log("Fetched employee data:", data); // debug line
        setEmployee({ ...data, employeeId: parseInt(id) });
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to load employee"
        );
        setSnackbar({
          open: true,
          message: "Failed to load employee data",
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    loadEmployee();
  }, [id, token]);

  const handleUpdate = async (updatedEmployee: EmployeeUpdate) => {
    try {
      if (!id || !token) {
        throw new Error("Missing employee ID or authentication token");
      }

      //console.log("Updating employee with data:", updatedEmployee); // debug line
      await updateEmployee(parseInt(id), token, updatedEmployee);
      setSnackbar({
        open: true,
        message: "Employee updated successfully!",
        severity: "success",
      });
      setTimeout(() => navigate("/employeePage"), 1500); // Correct the navigation path
    } catch (error) {
      console.error("Error updating employee:", error);
      setSnackbar({
        open: true,
        message: "Failed to update employee",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navbar />
      <Box sx={{ p: 3, maxWidth: 800, margin: "0 auto" }}>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>

        {employee && (
          <>
            <h1>Update Employee Details</h1>
            <EmployeeUpdateForm employee={employee} onUpdate={handleUpdate} />
          </>
        )}
      </Box>
    </div>
  );
};

export default EmployeeUpdatePage;
