import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import { Employee } from "../../Types/Employee";

interface EmployeeTableProps {
  employees: Employee[];
}

const columns = [
  {
    width: 100,
    label: "Employee ID",
    dataKey: "employee_id",
  },
  {
    width: 100,
    label: "First Name",
    dataKey: "first_name",
  },
  {
    width: 100,
    label: "Last Name",
    dataKey: "last_name",
  },
  {
    width: 100,
    label: "Email",
    dataKey: "email",
  },
  {
    width: 100,
    label: "Role",
    dataKey: "role",
  },
  {
    width: 200,
    label: "Address",
    dataKey: "address",
  },
  {
    width: 150,
    label: "Phone",
    dataKey: "phone",
  },
  {
    width: 150,
    label: "Actions",
    dataKey: "actions",
  },
];

const VirtuosoTableComponents: TableComponents<Employee> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align="left"
          style={{ width: column.width }}
          sx={{ backgroundColor: "background.paper", fontWeight: "bold" }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Employee) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell key={column.dataKey} align="left">
          {column.dataKey === "actions" ? (
            <>
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
            </>
          ) : (
            row[column.dataKey as keyof Employee]
          )}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <TableVirtuoso
        data={employees}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
};

export default EmployeeTable;
