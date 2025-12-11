import axios from "axios";

// Base URL from environment variable
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add token from localStorage automatically
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("homehero_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
