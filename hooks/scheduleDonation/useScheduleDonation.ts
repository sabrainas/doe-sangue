import { useMutation} from "@tanstack/react-query";
import axiosInstance from "@/services/api";

interface AgendamentoPayload {
    verificacao: string;
    data: string;
    requisicao: { id: number };
  }

  const criarAgendamento = async (data: AgendamentoPayload): Promise<any> => {
    const response = await axiosInstance.post("/agendamentos/cadastrar", data);
    return response.data;
  };
  
  export const usePostCriarAgendamento = () => {
    return useMutation({
      mutationFn: criarAgendamento,
      onSuccess: () => console.log("Agendamento criado com sucesso!"),
      onError: (error: any) => console.error("Erro ao criar agendamento:", error?.response?.data || error.message),
    });
  };
  
  