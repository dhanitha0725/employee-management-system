import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { Employee } from "../../Types/Employee";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  const navigate = useNavigate();

  // Define columns for the table
  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        accessorKey: "id", // Employee ID
        header: "Employee ID",
        size: 100,
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
            <Button variant="contained" color="error">
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
      data={employees} // Employee data
      enableColumnResizing
      enableStickyHeader
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
