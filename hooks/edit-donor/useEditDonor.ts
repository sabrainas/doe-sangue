import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/services/api";
import { UserData } from "@/types/types";

export const useEditDonor = () => {
  return useMutation<UserData, Error, Partial<UserData>>({
    mutationFn: async (data) => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token não encontrado. Faça login novamente.");
        throw new Error("Token não encontrado. Faça login novamente.");
      }

      console.log("Token encontrado:", token);
      console.log("Dados enviados para edição:", data);

      const response = await axiosInstance.put(`/usuario/eu`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Resposta da API:", response.data);
      return response.data as UserData;
    },
  });
};