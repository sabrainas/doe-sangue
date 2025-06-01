import { useQuery } from "@tanstack/react-query";
import axios from "@/services/api";
import { useEffect } from "react";

const getAllDonors = async () => {
  const response = await axios.get("/usuario");
  return response.data;
};

export const useGetAllDonors = () => {
  const query = useQuery({
    queryKey: ["getAllDonors"],
    queryFn: getAllDonors,
  });

  useEffect(() => {
    if (query.isSuccess) {
      console.log("Doadores listados com sucesso!");
    }
  }, [query.isSuccess]);

  useEffect(() => {
    if (query.isError) {
      console.error("Erro ao listar doadores:", query.error);
    }
  }, [query.isError, query.error]);

  return query;
};
