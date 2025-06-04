import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/services/api";
import { UserData } from "@/types/types";

export const useEditDonor = () => {
  return useMutation<UserData, Error, Partial<UserData>>({
    mutationFn: async (data) => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token não encontrado. Faça login novamente.");

      const loggedUserResponse = await axiosInstance.get("/usuario/eu");
      const userId = loggedUserResponse.data.id;

      const response = await axiosInstance.put(`/usuario/${userId}`, data);
      return response.data as UserData;
    }
  });
};
