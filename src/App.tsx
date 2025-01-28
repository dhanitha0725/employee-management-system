import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EmployeeProfile from "./pages/EmployeeProfile";

const App: React.FC = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/employeePage" element={<EmployeePage />} />
          <Route path="/employeeProfile" element={<EmployeeProfile />} /> {/* Add this line */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
