import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import EmployeeImg from "../assets/Employee.jpg";
import { Helmet } from "react-helmet";
import InputField from "../components/inputField";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/LoginRegister.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await loginUser(email, password);
      if (res.access_token) {
        localStorage.setItem("authToken", res.access_token);
        navigate("/employeePage");
      } else {
        alert("Login failed. Check your email or password.");
      }
    } catch (error) {
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Employee Portal</title>
        <meta name="description" content="Log in to access your employee account and manage details."/>
        <meta name="keywords" content="login, employee portal, employee management"/>
      </Helmet>

      <div className="container-fluid vh-100">
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={EmployeeImg}
              alt="Employee Login Portal"
              className="img-fluid rounded"
              style={{ height: "80%", objectFit: "contain" }}
            />
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-3">
            <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "500px" }}>
              <h1 className="text-center mb-4" style={{ color: "#3a5c64", fontWeight: 600 }}>
                Employee Login
              </h1>
              <form onSubmit={handleLogin}>
                <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className="d-flex justify-content-center mt-4">
                  <button type="submit" className="btn" style={{ backgroundColor: "#ff735c", color: "white", width: "50%" }}>
                    Login
                  </button>
                </div>

                <div className="d-flex justify-content-center mt-3">
                  <p>Don't Have an Account?</p>
                  <a href="/register" className="ms-2" style={{ color: "#ff735c" }}>
                    Sign Up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
