import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const instance = axios.create({ baseURL: `${baseURL}/api` });

// attach token automatically
instance.interceptors.request.use((config) => {
  const t = localStorage.getItem("homehero_token");
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

export default instance;
