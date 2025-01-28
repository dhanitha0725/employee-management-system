import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { Employee } from "../../Types/Employee";
import { Button } from "@mui/material";

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  // Define columns for the table
  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        accessorKey: "id", // Employee ID
        header: "ID",
        size: 100,
      },
      {
        accessorKey: "firstName", // First Name
        header: "First Name",
        size: 200,
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
        accessorKey: "actions", // Actions (Edit/Delete buttons)
        header: "Actions",
        size: 200,
        Cell: () => (
          <div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              Edit
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={employees} // Employee data
      enableColumnResizing // Enable resizing of columns
      enableStickyHeader // Sticky header for better visibility
      initialState={{
        pagination: {
          pageSize: 10, // Default rows per page
          pageIndex: 0,
        },
      }}
    />
  );
};

export default EmployeeTable;
