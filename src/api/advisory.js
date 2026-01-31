import api from "../api";   // ✅ correct path

export const getAdvice = (data) => api.post("/advisory/get", data);

export const getHistory = (id) =>
  api.get(`/advisory/history/${id}`);
