import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "@/services/api";

interface DonorData {
  id?: number;
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  tipo: string;
  celular: string;
  regiao: string;
  senha: string;
}

const createDonor = async (donorData: DonorData): Promise<DonorData> => {
  const response = await axios.post("/usuario/cadastrar", donorData);
  return response.data;
};

export const useCreateDonor = (): UseMutationResult<DonorData, Error, DonorData, unknown> => {
  return useMutation<DonorData, Error, DonorData>({
    mutationFn: createDonor,
    onSuccess: () => { console.log("Doador criado com sucesso!"); },
    onError: (error: Error) => { console.error(error.message); },
  });
};