import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import RegisterImg from "../assets/Employee.jpg";
import RegisterForm from "../components/RegisterForm";
import { registerUser } from "../services/authService"; 
import "bootstrap/dist/css/bootstrap.min.css";

const Register: React.FC = () => {
  const navigate = useNavigate();

  async function handleRegister(userData: any) {
    try {
      await registerUser(userData);  
      alert("Employee Registration Successfully");
      navigate("/");
    } catch (err) {
      alert("Registration failed. Please try again.");
    }
  }

  return (
    <>
      <Helmet>
        <title>Register - Employee Portal</title>
        <meta name="description" content="Create your employee account to access the portal." />
        <meta name="keywords" content="register, sign up, employee portal, employee management" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <div className="container-fluid vh-100">
        <div className="row">
          {/* Left Side (Image) */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={RegisterImg}
              alt="Employee Registration"
              className="img-fluid rounded"
              style={{ height: "80%", objectFit: "contain" }}
            />
          </div>

          {/* Right Side (Form) */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-3">
            <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "500px" }}>
              <h1 className="text-center mb-4" style={{ color: "#3a5c64", fontWeight: 600 }}>
                Employee Registration
              </h1>
              <RegisterForm onRegister={handleRegister} />
              <div className="d-flex justify-content-center mt-3">
                <p>Already have an account?</p>
                <a href="/" className="ms-2" style={{ color: "#ff735c" }}>
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
