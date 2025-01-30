import React, { useMemo, useState } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { deleteEmployee } from "../../services/employeeService";
import { Employee } from "../../Types/Employee";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteDialog from "../common/DeleteDialog";

interface EmployeeTableProps {
  employees: Employee[];
  fetchEmployees: () => void; // Function to refetch employees after deletion
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employees,
  fetchEmployees,
}) => {
  const navigate = useNavigate();
  const [openDialogId, setOpenDialogId] = useState<number | null>(null); // Track which row's dialog is open

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
        fetchEmployees(); // Refresh data after deletion
      }
    } catch {
      alert("An error occurred while deleting the employee.");
    } finally {
      setOpenDialogId(null); // Close dialog after delete
    }
  };

  // Define columns for the table
  const columns = useMemo<MRT_ColumnDef<Employee>[]>(() => [
    {
      accessorKey: "employeeId",
      header: "Employee ID",
      size: 120,
    },
    {
      accessorKey: "firstName",
      header: "First Name",
      size: 150,
    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      size: 150,
    },
    {
      accessorKey: "email",
      header: "Email",
      size: 250,
    },
    {
      accessorKey: "role",
      header: "Role",
      size: 150,
    },
    {
      accessorKey: "address",
      header: "Address",
      size: 300,
    },
    {
      accessorKey: "phone",
      header: "Phone",
      size: 150,
    },
    {
      accessorKey: "actions",
      header: "Actions",
      size: 200,
      Cell: ({ row }) => {
        const employeeId = row.original.employeeId;
        return (
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff9800",
                color: "white",
                "&:hover": { backgroundColor: "#e68900" },
              }}
              onClick={() => navigate(`/employee/update/${employeeId}`)}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#d32f2f",
                color: "white",
                "&:hover": { backgroundColor: "#b71c1c" },
              }}
              onClick={() => setOpenDialogId(employeeId)}
            >
              Delete
            </Button>

            {/* Delete Confirmation Dialog */}
            <DeleteDialog
              open={openDialogId === employeeId}
              onClose={() => setOpenDialogId(null)}
              onDelete={() => handleDelete(employeeId)}
            />
          </div>
        );
      },
    },
  ], [openDialogId]); // Depend on openDialogId so it updates correctly

  return (
    <MaterialReactTable
      columns={columns}
      data={employees}
      enableColumnResizing
      enableStickyHeader
      enableStickyFooter
      enablePagination
      muiTableContainerProps={{
        sx: {
          maxHeight: "500px",
          overflow: "auto",
          backgroundColor: "#ffffff",
        },
      }}
      muiTableBodyRowProps={{
        sx: {
          "&:nth-of-type(odd)": { backgroundColor: "#ffe0b2" }, // Light orange for alternate rows
          "&:hover": { backgroundColor: "#ffcc80" }, // Hover effect
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          backgroundColor: "#ff9800", // Orange header
          color: "white",
          fontWeight: "bold",
        },
      }}
      muiTableFooterCellProps={{
        sx: {
          backgroundColor: "#ff9800",
          color: "white",
        },
      }}
      muiTablePaperProps={{
        sx: {
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          border: "1px solid #ff9800",
        },
      }}
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
