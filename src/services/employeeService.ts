import axios from "axios";

const API_URL = "http://localhost:8090/users/";
const DELETE_API_URL = "http://localhost:8090/employee";

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

export const deleteEmployee = async (employeeId: number, token: string): Promise<void> => {
  try {
    await axios.delete(`${DELETE_API_URL}/delete/${employeeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
};