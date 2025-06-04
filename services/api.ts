// services/api.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://hemolink-9fau.onrender.com/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const rotasPublicas = [
    "/usuario/regioes",
    "/usuario/cadastrar",
    "/auth/login",  
  ];

  const isPublic = rotasPublicas.some((rota) => config.url?.includes(rota));

  if (!isPublic) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.error("Token não encontrado no interceptor.");
    }
  } else {
    if (config.headers) {
      delete config.headers.Authorization;
    }
  }

  return config;
});

export default axiosInstance;
