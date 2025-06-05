import { useQuery } from "@tanstack/react-query";
import axios from "@/services/api";
import { useEffect } from "react";
import { Hemocenter } from "@/types/types";

const getHemocenter = async (): Promise<Hemocenter[]> => {
  const response = await axios.get("/hemocentro");
  const data: Hemocenter[] = response.data;

  const groupedByType = data.reduce((acc: Record<string, Hemocenter>, current: Hemocenter) => {
    if (!acc[current.tipo] || current.id > acc[current.tipo].id) {
      acc[current.tipo] = current;
    }
    return acc;
  }, {});

  return Object.values(groupedByType);
};


export const useGetHemocenter = () => {
  const query = useQuery({
    queryKey: ["getHemocenter"],
    queryFn: getHemocenter,
  });

  useEffect(() => {
    if (query.isSuccess) {
      console.log("Hemocentro buscado!");
    }
  }, [query.isSuccess]);

  useEffect(() => {
    if (query.isError) {
      console.error("Erro ao buscar hemocentro:", query.error);
    }
  }, [query.isError, query.error]);

  return query;
};
