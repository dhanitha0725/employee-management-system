import axios from "axios";

const API_URL = "http://localhost:8090/users/";

// fetch all employees
export const fetchEmployees = async (token: string) => {
  try {
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`, //pass jwt token
        },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};