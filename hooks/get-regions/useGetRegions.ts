"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "@/services/api";
import { useEffect } from "react";

type Regiao = string[]; 

const getListarRegioes = async (): Promise<Regiao> => {
  const response = await axios.get("/usuario/regioes");
  return response.data;
};

export const useGetListarRegioes = () => {
  const query = useQuery<Regiao, Error>({
    queryKey: ["getListarRegioes"],
    queryFn: getListarRegioes,
  });

  useEffect(() => {
    if (query.isSuccess) {
      console.log("Regiões listadas com sucesso!");
    }
  }, [query.isSuccess]);

  useEffect(() => {
    if (query.isError) {
      console.error("Erro ao listar regiões:", query.error);
    }
  }, [query.isError, query.error]);

  return query;
};
