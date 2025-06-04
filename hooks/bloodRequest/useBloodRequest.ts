import { useMutation } from "@tanstack/react-query";
import axios from "@/services/api";

interface RequestBloodPayload {
  tipo: string;
  local: string;
  descricao: string;
}

const criarRequisicao = async (usuarioId: number, data: RequestBloodPayload) => {
  const response = await axios.post(`/requisicoes/usuarios/${usuarioId}`, {
    ...data,
    id: 0,
    dataCriacao: new Date().toISOString(),
    usuario: null,
  });
  return response.data;
};

export const usePostCriarRequisicao = (usuarioId: number) => {
  return useMutation((data: RequestBloodPayload) => criarRequisicao(usuarioId, data), {
    onSuccess: () => {
      console.log("Requisição criada com sucesso!");
    },
    onError: (error: any) => {
      console.error("Erro ao criar requisição:", error?.response?.data || error.message);
    },
  });
};
