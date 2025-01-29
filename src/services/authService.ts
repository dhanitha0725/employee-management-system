import axios from "axios";

const API_URL = "http://localhost:8090/auth";

interface LoginResponse {
  access_token?: string;
}

interface RegisterResponse {
  message?: string;
}

// Login API request
export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Register API request
export const registerUser = async (userData: any): Promise<RegisterResponse> => {
  try {
    const response = await axios.post<RegisterResponse>("http://localhost:8090/employee/save", userData);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
