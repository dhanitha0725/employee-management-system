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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function validateInputs() {
    let newErrors: { [key: string]: string } = {};

    if (!firstname.trim()) newErrors.firstname = "First name is required.";
    else if (!/^[A-Za-z]+$/.test(firstname)) newErrors.firstname = "Only letters allowed.";

    if (!lastname.trim()) newErrors.lastname = "Last name is required.";
    else if (!/^[A-Za-z]+$/.test(lastname)) newErrors.lastname = "Only letters allowed.";

    if (!address.trim()) newErrors.address = "Address is required.";

    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Invalid email format.";

    if (!phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone number must be 10 digits.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";
    else if (!/[A-Z]/.test(password))
      newErrors.password = "Must include at least one uppercase letter.";
    else if (!/[0-9]/.test(password))
      newErrors.password = "Must include at least one number.";
    else if (!/[!@#$%^&*]/.test(password))
      newErrors.password = "Must include at least one special character.";

    if (!confirmPassword) newErrors.confirmPassword = "Confirm password is required.";
    else if (confirmPassword !== password) newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateInputs()) return;

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
      {errors.firstname && <p className="text-danger">{errors.firstname}</p>}

      <InputField
        label="Last Name"
        type="text"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      {errors.lastname && <p className="text-danger">{errors.lastname}</p>}

      <InputField
        label="Address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {errors.address && <p className="text-danger">{errors.address}</p>}

      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p className="text-danger">{errors.email}</p>}

      <InputField
        label="Phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {errors.phone && <p className="text-danger">{errors.phone}</p>}

      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p className="text-danger">{errors.password}</p>}

      <InputField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}

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
