import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "@/services/api";

interface RequestBloodPayload {
  nome: string;
  tipo: string;
  descricao: string;
}

const criarRequisicao = async (data: RequestBloodPayload): Promise<any> => {
  const response = await axios.post("/requisicoes/usuarios/eu", data);
  return response.data;
};

export const usePostCriarRequisicao = (): UseMutationResult<any, Error, RequestBloodPayload> => {
  return useMutation<RequestBloodPayload, Error, RequestBloodPayload>({
    mutationFn: criarRequisicao,
    onSuccess: () => {
      console.log("Requisição criada com sucesso!");
    },
    onError: (error: any) => {
      console.error("Erro ao criar requisição:", error?.response?.data || error.message);
    },
  });
};
