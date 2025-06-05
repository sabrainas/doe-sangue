import { useMutation } from "@tanstack/react-query";
import api from "@/services/api";

const deleteUserAgendamento = async (id: number) => {
  const response = await api.delete(`/agendamentos/${id}`);
  console.log("Resposta API agendamento:", response.data);
  return response.data;
};

export const useDeleteUserAgendamento = (id: number) => {
  return useMutation({
    mutationFn: (id: number) => deleteUserAgendamento(id),
  });
};