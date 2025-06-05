import { useQuery } from "@tanstack/react-query";
import axios from "@/services/api";
import { useEffect } from "react";

const getListRequestsFeed = async () => {
  const response = await axios.get("/requisicoes/feed");
  return response.data;
};

export const useGetListRequestsFeed = () => {
  const query = useQuery({
    queryKey: ["getListRequestsFeed"],
    queryFn: getListRequestsFeed,
  });

  useEffect(() => {
    if (query.isSuccess) {
      console.log("Receptores listados com sucesso!");
    }
  }, [query.isSuccess]);

  useEffect(() => {
    if (query.isError) {
      console.error("Erro ao listar receptores:", query.error);
    }
  }, [query.isError, query.error]);

  return query;
};
