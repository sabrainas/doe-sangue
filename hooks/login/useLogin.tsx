import { useMutation } from "react-query";
import axios from "@/services/api";

interface LoginData {
  email: string;
  senha: string;
}

interface UserData {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  tipo: string;
  celular: string;
  cep: string;
  senha: string;
}

const login = async (loginData: LoginData): Promise<UserData> => {
  const response = await axios.post(
    `usuario/login?email=${encodeURIComponent(loginData.email)}&senha=${encodeURIComponent(loginData.senha)}`
  );
  return response.data;
};

export const useLogin = () => {
  return useMutation(login, {
    onSuccess: (data) => {
      console.log("Login realizado com sucesso!", data);

      localStorage.setItem("user", JSON.stringify(data));
      window.location.href = "/dashboard/home"; 

    },
    onError: (error) => {
      console.error("Erro ao realizar login:", error);
    },
  });
};