import axios from "axios";

export const fetchEmployeeDetails = async (token: string) => {
  try {
    const response = await axios.get('http://localhost:8090/users/currentuser', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Error fetching employee details:", err);
    throw err;
  }
};