import React, { useState, useEffect } from "react";
import axios from "axios";
import { Employee } from "../../Types/Employee";
import EmployeeTable from "./EmployeeTable";

const EmployeeTableContainer: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  // fetch employees from the backend
  const fetchEmployees = async () => {
    try {
      const response = await axios.get<Employee[]>(
        `http://localhost:8090/employee`
      );
      setEmployees(response.data);
      console.log("Fetched employees:", response.data); //print in console to check
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return <EmployeeTable employees={employees} />;
};

export default EmployeeTableContainer;
