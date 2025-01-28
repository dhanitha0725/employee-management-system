import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import RegisterImg from '../assets/RegisterImg.jpg';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8090/auth/login", {
                email: email,
                password: password,
            }).then((res) => {
                console.log(res.data);
    
                // Check if a token is returned
                if (res.data.access_token) {    
                    // Navigate to the employee page
                    navigate('/employeePage');
                } else {
                    // If no token, display an error
                    alert("Login failed. Please check your email or password.");
                }
            }, fail => {
                console.error(fail);
            });
        } catch (err) {
            alert("An error occurred during login. Please try again.");
            console.error(err);
        }
    }    

    return (
        <div className="container-fluid vh-100">
            <div className="row">
                {/* Left Side (Image) */}
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img 
                        src={RegisterImg} 
                        alt="Placeholder"
                        className="img-fluid rounded"
                        style={{ height: '80%', objectFit: 'contain' }}
                    />
                </div>

                {/* Right Side (Form) */}
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-3">
                    <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "500px"}}>
                        <h1 className="text-center mb-4" style={{ color:"#3a5c64", fontWeight:600 }}>Employee Login</h1>
                        <form onSubmit={login}>
                            <div className="form-floating mb-4">                            
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-floating mb-4">                            
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <label htmlFor="password">Password</label>
                            </div>

                            <div className="d-flex justify-content-center mt-4">
                                <button 
                                    type="submit" 
                                    className="btn" 
                                    style={{ backgroundColor: '#ff735c', color: 'white', width: '50%' }}
                                >
                                    Login
                                </button>                                
                            </div>

                            <div className="d-flex justify-content-center mt-3">
                                <p>Don't Have an Account?</p>
                                <a href="/register" className="ms-2" style={{ color: '#ff735c'}}>Sign Up</a>
                            </div>                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
