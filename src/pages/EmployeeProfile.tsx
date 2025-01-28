import React from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/EmployeeProfile.css'; // Import the CSS file
import useremp from '../assets/useremp.png';

const EmployeeProfile: React.FC = () => {
    const navigate = useNavigate();

    const handleUpdate = () => {
        navigate('/update-employee');
    };

    const employee = {
        employee_id: 12345,
        first_name: 'Pasan',
        last_name: 'Mayura',
        address: 'No. 123, Main Street, Colombo 05',
        phone: '0712345678',
        role: 'Ass.Software Engineer'
    };

    return (
        <Container className="container">
            <Typography variant="h3" component="h2" align="center" gutterBottom className="maintitle">
                User Profile
            </Typography>
            <Paper elevation={3} className="image-paper">
                <img src={useremp} alt="Employee" className="Userimg" />
                <div className="profile-details">
                    <Typography variant="h4" component="h1" className="title">
                        {employee.first_name} {employee.last_name}
                    </Typography>
                    <Typography variant="h6" component="h3" className="role">
                        {employee.role}
                    </Typography>
                </div>
            </Paper>
            <Paper elevation={3} className="paper">
                
                <Typography variant="body1" className="info">
                    <strong>ID:</strong> {employee.employee_id}
                </Typography>
                <Typography variant="body1" className="info">
                    <strong>Address:</strong> {employee.address}
                </Typography>
                <Typography variant="body1" className="info">
                    <strong>Phone  :</strong> {employee.phone}
                </Typography>
                <Typography variant="body1" className="info">
                    <strong>Role   :</strong> {employee.role}
                </Typography>
                <div className="button-container">
                    <Button variant="contained" className="button" onClick={handleUpdate}>
                        Update Profile
                    </Button>
                </div>
            </Paper>
        </Container>
    );
};

export default EmployeeProfile;