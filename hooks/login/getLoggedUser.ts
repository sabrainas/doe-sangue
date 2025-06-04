import axiosInstance from "@/services/api";
import { UserData } from "@/types/types";

export const getLoggedUser = async (): Promise<UserData> => {
  const response = await axiosInstance.get("/usuario/eu");
  return response.data;
};
