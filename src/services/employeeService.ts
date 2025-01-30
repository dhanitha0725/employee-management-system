import axios from "axios";

const GET_ALL_USERS_API_URL = "http://localhost:8090/users/";
const DELETE_API_URL = "http://localhost:8090/employee/delete";
const GET_USER_BY_ID_API_URL = "http://localhost:8090/employee/getEmployeeById";
const UPDATE_USER_API_URL = "http://localhost:8090/employee/update";

// fetch all employees
export const fetchEmployees = async (token: string) => {
  try {
    const response = await axios.get(GET_ALL_USERS_API_URL, {
        headers: {
            Authorization: `Bearer ${token}`, //pass jwt token
        },
    });
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};

export const deleteEmployee = async (employeeId: number, token: string): Promise<void> => {
  try {
    await axios.delete(`${DELETE_API_URL}/${employeeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
};

// Fetch employee by ID
export const fetchEmployee = async (employeeId: number, token: string) => {
  try {
    const response = await axios.get(`${GET_USER_BY_ID_API_URL}/${employeeId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Pass JWT token
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching employee:", error);
    throw error;
  }
};

// Update employee
export const updateEmployee = async (employeeId: number, token: string, employeeData: any) => {
  try {
    const response = await axios.put(`${UPDATE_USER_API_URL}/${employeeId}`, employeeData, {
      headers: {
        Authorization: `Bearer ${token}`, // Pass JWT token
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error;
  }
};