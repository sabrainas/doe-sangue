import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://hemolink-9fau.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export default axiosInstance;