import React, { useState } from "react";
import InputField from "./inputField";  

interface RegisterFormProps {
  onRegister: (userData: any) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    onRegister({
      first_name: firstname,
      last_name: lastname,
      address: address,
      email: email,
      phone: phone,
      password: password,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="needs-validation">
      <InputField
        label="First Name"
        type="text"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <InputField
        label="Last Name"
        type="text"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <InputField
        label="Address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div className="d-flex justify-content-center mt-4">
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#ff735c", color: "white", width: "50%" }}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
