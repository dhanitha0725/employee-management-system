import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    // Save the token (e.g., in localStorage) for later use
                    localStorage.setItem('authToken', res.data.access_token);
    
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
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={login}>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
