import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Container, Typography, Paper, Button, Box } from "@mui/material";
import useremp from "../assets/useremp.png"; 
import { fetchEmployeeDetails } from "../services/employeeProfileService";

interface Employee {
    id: number;
    role: string;
    email: string;
    first_name: string;
    last_name: string;
    employee_id: string;
    address: string;
    phone: string;
}

const EmployeeProfile: React.FC = () => {
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleUpdate = () => {
        navigate("/update-employee");
    };

    useEffect(() => {
        const getEmployeeDetails = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    setError("Authentication required");
                    setLoading(false);
                    return;
                }
                const data = await fetchEmployeeDetails(token);
                console.log("Fetched Employee Data:", data); // Debugging
    
                // Correct the mapping
                const formattedEmployee: Employee = {
                    id: data.id,                      
                    employee_id: data.id.toString(),  
                    first_name: data.firstName,       
                    last_name: data.lastName,         
                    email: data.email,                 
                    role: data.role,            
                    address: data.address,              
                    phone: data.phone
                };
    
                setEmployee(formattedEmployee);
                setLoading(false);
            } catch {
                setError("An error occurred while fetching employee details.");
                setLoading(false);
            }
        };
    
        getEmployeeDetails();
    }, []);
    
    

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box textAlign="center" mt={5}>
                <Typography variant="h6" color="error">{error}</Typography>
            </Box>
        );
    }

    if (!employee) {
        return (
            <Box textAlign="center" mt={5}>
                <Typography variant="h6">No employee data available.</Typography>
            </Box>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: "center", backgroundColor: "#f9f9f9" }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom color="#3a5c64">
                    User Profile
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                    <img src={useremp} alt="Employee" style={{ width: 120, height: 120, borderRadius: "50%", marginBottom: 10 }} />
                    <Typography variant="h5" fontWeight="bold">
                        {employee.first_name} {employee.last_name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {employee.role}
                    </Typography>
                </Box>
                <Paper elevation={1} sx={{ p: 3, textAlign: "left", backgroundColor: "#fff", borderRadius: 2 }}>
                    <Typography variant="body1"><strong>ID:</strong> {employee.id}</Typography>
                    <Typography variant="body1" mt={1}><strong>First Name:</strong> {employee.first_name}</Typography>
                    <Typography variant="body1" mt={1}><strong>Last Name:</strong> {employee.last_name}</Typography>
                    <Typography variant="body1" mt={1}><strong>Email:</strong> {employee.email}</Typography>
                    <Typography variant="body1" mt={1}><strong>Address:</strong> {employee.address}</Typography>
                    <Typography variant="body1" mt={1}><strong>Phone:</strong> {employee.phone}</Typography>
                    <Typography variant="body1" mt={1}><strong>Role:</strong> {employee.role}</Typography>
                </Paper>
                <Box mt={3}>
                    <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ borderRadius: 2, px: 3, py: 1, backgroundColor: "#ff735c" }}>
                        Update Profile
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default EmployeeProfile;