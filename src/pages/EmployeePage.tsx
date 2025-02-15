//import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
//import SearchBar from "../components/common/SearchBar";
import { Box } from "@mui/material";
import EmployeeTableContainer from "../components/features/EmployeeTableContainer";
import "../styles/EmployeePage.css";

const EmployeePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Box className="employee-page-container">
        <h1 className="employee-page-title">Employee Details</h1>
        <Box className="search-bar-container"></Box>
        <Box className="employee-table-container" sx={{ backgroundColor:'#fc7e00' }}>
          <EmployeeTableContainer />
        </Box>
      </Box>
    </div>
  );
};

export default EmployeePage;
