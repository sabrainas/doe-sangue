import { useQuery } from "react-query";
import axios from "@/services/api";

const getAllDonors = async () => {
  const response = await axios.get("/usuario");
  return response.data;
};

export const useGetAllDonors = () => {
  return useQuery("getAllDonors", getAllDonors, {
    onSuccess: () => {
      console.log("Doadores listados com sucesso!");
    },
    onError: (error: any) => {
      console.error("Erro ao listar doadores:", error);
    },
  });
};
