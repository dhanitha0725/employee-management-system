import React, { useState } from "react";
import axios from "axios";
import RegisterImg from '../assets/RegisterImg.jpg';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register: React.FC = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function save(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8090/employee/save", {
                first_name: firstname,
                last_name: lastname,
                address: address,
                email: email,
                phone: phone,
                password: password,
            });
            alert("Employee Registration Successfully");
            navigate("/login");
        } catch (err) {
            alert(err);
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
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="card shadow-lg p-4" style={{ height: "80vh", width: "70vh"}}>
                        <h1 className="text-center mb-5">Employee Registration</h1>
                        <form onSubmit={save} className="needs-validation">
                            <div className="form-floating mb-4 mx-5">                                
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="firstname" 
                                    placeholder="First Name"
                                    value={firstname}
                                    onChange={(event) => setFirstname(event.target.value)}
                                    required
                                />
                                <label htmlFor="firstname">First Name</label>
                            </div>

                            <div className="form-floating mb-4 mx-5">                                
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="lastname" 
                                    placeholder="Last Name"
                                    value={lastname}
                                    onChange={(event) => setLastname(event.target.value)}
                                    required
                                />
                                <label htmlFor="lastname">Last Name</label>
                            </div>

                            <div className="form-floating mb-4 mx-5">                                
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="address" 
                                    placeholder="Address"
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}
                                    required
                                />
                                <label htmlFor="address">Address</label>
                            </div>

                            <div className="form-floating mb-4 mx-5">                                
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-floating mb-4 mx-5">                                
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="phone" 
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                    required
                                />
                                <label htmlFor="phone">Phone Number</label>
                            </div>

                            <div className="form-floating mb-4 mx-5">                                
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                                <label htmlFor="password">Password</label>
                            </div>

                            <div className="d-flex justify-content-center mt-5">
                                <button 
                                    type="submit" 
                                    className="btn" 
                                    style={{ backgroundColor: '#ff735c', color: 'white', width: '20%' }}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
