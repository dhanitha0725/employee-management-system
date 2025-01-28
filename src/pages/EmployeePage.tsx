import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import SearchBar from "../components/common/SearchBar";
import { Box } from "@mui/material";
import EmployeeTableContainer from "../components/features/EmployeeTableContainer";
import "../styles/EmployeePage.css";

const EmployeePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar />
      <Box className="employee-page-container">
        <h1 className="employee-page-title">Employee Details</h1>
        <Box className="search-bar-container">
          <SearchBar searchQuery={searchQuery} onSearchChange={handleSearch} />
        </Box>
        <Box className="employee-table-container">
          <EmployeeTableContainer />
        </Box>
      </Box>
    </div>
  );
};

export default EmployeePage;
