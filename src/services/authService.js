import axios from "axios";

const API_URL = "http://localhost:8081/api";

export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    return response.data;
  } catch (error) {
    console.error("Registration failed", error.response?.data);
    throw error;
  }
};
