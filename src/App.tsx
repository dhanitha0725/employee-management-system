import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeePage />} />
      </Routes>
    </Router>
  );
};

export default App;
