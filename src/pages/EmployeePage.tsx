import React from "react";
import Navbar from "../components/common/Navbar";
import EmployeeTable from "../components/features/EmployeeTable";
import { employees } from "../constants/employees";
import { Box } from "@mui/material";

const EmployeePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "2px",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <h1>Employee Details</h1>
        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <EmployeeTable employees={employees} />
        </Box>
      </Box>
    </div>
  );
};

export default EmployeePage;
