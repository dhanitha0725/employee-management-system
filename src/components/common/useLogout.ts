import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userToken");
    sessionStorage.removeItem("userToken");

    // Redirect to login page
    navigate("/");

    console.log("User logged out");
  };

  return logout;
};

export default useLogout;
