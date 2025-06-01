import { useMutation } from "react-query";
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

const createDonor = async (donorData: DonorData) => {
  const response = await axios.post("/usuario/cadastrar", donorData);
  return response.data;
};

export const useCreateDonor = () => {
  return useMutation(createDonor, {
    onSuccess: () => {
      console.log("Doador criado com sucesso!");
    },
    onError: (error) => {
      console.error("Erro ao criar doador:", error);
    },
  });
};