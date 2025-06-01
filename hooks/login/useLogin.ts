import { useMutation } from "react-query";
import axios from "@/services/api";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";

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
  await axios.post(
    `/usuario/login?email=${encodeURIComponent(loginData.email)}&senha=${encodeURIComponent(loginData.senha)}`,
    {},
    { withCredentials: true }
  );

  const response = await axios.get('/usuario/eu', { withCredentials: true });
  return response.data;
};

export const useLogin = () => {
  const { setUserData } = useContext(UserContext);
  const router = useRouter();

  return useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("userData", JSON.stringify(data)); 
      setUserData(data);
      router.push("/dashboard/doador");
    },
    onError: (error) => {
      console.error("Erro ao realizar login:", error);
    },
  });
};
