import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import { Box } from "@mui/material";
import EmployeeUpdateForm from "../components/features/EmployeeUpdateForm";
import { EmployeeUpdate } from "../Types/EmployeeUpdate";
import "../styles/EmployeeUpdatePage.css";

const EmployeeUpdatePage: React.FC = () => {
  const [employee, setEmployee] = useState<EmployeeUpdate | null>({
    employee_id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@gmail.com",
    password: "password",
    address: "123 Main St",
    phone: "123-456-7890",
  });

  const handleUpdate = (updatedEmployee: EmployeeUpdate) => {
    console.log("Updated employee:", updatedEmployee);
    setEmployee(updatedEmployee);
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Box className="employee-page-container">
        <h1>Update Employee Details</h1>
        <EmployeeUpdateForm employee={employee} onUpdate={handleUpdate} />
      </Box>
    </div>
  );
};

export default EmployeeUpdatePage;
