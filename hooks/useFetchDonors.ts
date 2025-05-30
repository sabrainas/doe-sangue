import { useMutation } from "react-query";
import axios from "@/services/api";

const createDonor = async (donorData: { name: string; bloodType: string; location: string }) => {
  const response = await axios.post("/donors", donorData);
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