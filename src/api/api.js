import axios from "axios";

const api = axios.create({
  baseURL: "https://agroguide-backend.onrender.com/api",
});

export default api;
