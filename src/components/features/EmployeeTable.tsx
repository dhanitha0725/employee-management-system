import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Employee } from "../../Types/Employee";

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Salary</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell align="center">{employee.id}</TableCell>
              <TableCell align="center">{employee.firstName}</TableCell>
              <TableCell align="center">{employee.lastName}</TableCell>
              <TableCell align="center">{employee.role}</TableCell>
              <TableCell align="center">{employee.salary}</TableCell>
              <TableCell align="center">{employee.status}</TableCell>
              <TableCell align="center">
                <button>Edit</button>
                <button>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
