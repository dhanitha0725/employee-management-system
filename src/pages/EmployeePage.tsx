import React from "react";
import Navbar from "../components/common/Navbar";
import EmployeeTable from "../components/features/EmployeeTable";
import { employees } from "../constants/employees";
import { Box } from "@mui/material";

const EmployeePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          boxSizing: "border-box",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Employee Details</h1>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1000px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EmployeeTable employees={employees} />
        </Box>
      </Box>
    </div>
  );
};

export default EmployeePage;
