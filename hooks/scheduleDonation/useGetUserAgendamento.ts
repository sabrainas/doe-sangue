import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/api";

// Ajuste o endpoint conforme sua API
const getUserAgendamento = async () => {
  const response = await axiosInstance.get("/agendamentos");
  console.log("Resposta API agendamento:", response.data);
  return response.data;
};

export const useGetUserAgendamento = (id: number) => {
  return useQuery({
    queryKey: ["agendamento-usuario", id],
    queryFn: () => getUserAgendamento(),
    enabled: !!id,  // só roda se o id existir (true)
  });
};
