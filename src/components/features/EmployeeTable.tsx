import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { deleteEmployee } from "../../services/employeeService";
import { Employee } from "../../Types/Employee";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface EmployeeTableProps {
  employees: Employee[];
  fetchEmployees: () => void; // Function to refetch employees after deletion
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, fetchEmployees }) => {
  const navigate = useNavigate();

  const handleDelete = async (employeeId: number) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Authentication required");
      return;
    }

    try {
      await deleteEmployee(employeeId, token);
      alert(`Employee with ID ${employeeId} has been deleted successfully.`);
      if (fetchEmployees) {
        fetchEmployees(); // Only call if it exists
      }
    } catch{
      alert("An error occurred while deleting the employee.");
    }
  };
  
  // Define columns for the table
  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        accessorKey: "id", // Employee ID
        header: "Employee ID",
        size: 150,
      },
      {
        accessorKey: "firstName", // First Name
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName", // Last Name
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "email", // Email
        header: "Email",
        size: 250,
      },
      {
        accessorKey: "role", // Role
        header: "Role",
        size: 150,
      },
      {
        accessorKey: "address", // Address
        header: "Address",
        size: 300,
      },
      {
        accessorKey: "phone", // Phone
        header: "Phone",
        size: 150,
      },
      {
        accessorKey: "actions", // Edit/Delete buttons
        header: "Actions",
        size: 200,
        Cell: ({ row }) => (
          <div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
              onClick={() => navigate(`/employee/update/${row.original.id}`)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(row.original.id)}
            >
              Delete
            </Button>
          </div>
        ),
      },
    ],
    [navigate]
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={employees}
      enableColumnResizing
      enableStickyHeader
      enableStickyFooter
      enablePagination
      muiTableContainerProps={{ sx: { maxHeight: "500px", overflow: "auto" } }} 
      initialState={{
        pagination: {
          pageSize: 10,
          pageIndex: 0,
        },
      }}
    />
  );
};

export default EmployeeTable;
