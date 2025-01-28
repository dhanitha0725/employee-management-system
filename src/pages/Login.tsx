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
            await axios.post("http://localhost:8090/employee/login", {
                email: email,
                password: password,
            }).then((res) => {
                console.log(res.data);

                if (res.data.message === "Email not exists") {
                    alert("Email not exists");
                } else if (res.data.message === "Login Success") {
                    navigate('/home');
                } else {
                    alert("Incorrect Email or Password");
                }
            }, fail => {
                console.error(fail);
            });
        } catch (err) {
            alert(err);
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
