import { useQuery } from "react-query";
import axios from "@/services/api";

const getListarRegioes = async () => {
  const response = await axios.get("/usuario/regioes");
  return response.data;
};

export const useGetListarRegioes = () => {
  return useQuery("getListarRegioes", getListarRegioes, {
    onSuccess: () => {
      console.log("Regiões listadas com sucesso!");
    },
    onError: (error: any) => {
      console.error("Erro ao listar regiões:", error);
    },
  });
};
