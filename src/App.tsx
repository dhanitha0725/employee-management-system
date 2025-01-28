import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/employeePage" element={<EmployeePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
