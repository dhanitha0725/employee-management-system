import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import EmployeeTable from "../components/features/EmployeeTable";
import SearchBar from "../components/common/SearchBar";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Employee } from "../Types/Employee";

const EmployeePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [employees, setEmployees] = useState<Employee[]>([]);

  // fetch all employees on initial render
  useEffect(() => {
    fetchEmployees();
  }, []);

  // fetch employees based on search query
  const fetchEmployees = async (query: string = "") => {
    try {
      const response = await axios.get(`http://localhost:8080/api/employees`);
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar />
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
        <h1 style={{ margin: "20px" }}>Employee Details</h1>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 2,
          }}
        >
          <SearchBar searchQuery={searchQuery} onSearchChange={handleSearch} />
        </Box>
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
