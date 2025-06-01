import { UserContext } from "@/context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import axiosInstance from "@/services/api"; 

type LoginData = {
  email: string;
  senha: string;
};

type UserData = {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  tipo: string;
  celular: string;
  regiao: string;
  senha: string;
};

const login = async (loginData: LoginData): Promise<UserData> => {
  if (!loginData?.email || !loginData?.senha) {
    throw new Error("Dados de login incompletos.");
  }

  await axiosInstance.post(
    `/usuario/login?email=${encodeURIComponent(loginData.email)}&senha=${encodeURIComponent(loginData.senha)}`
  );

  const response = await axiosInstance.get('/usuario/eu');
  return response.data as UserData;
};

export const useLogin = () => {
  const { setUserData } = useContext(UserContext);
  const router = useRouter();

  return useMutation<UserData, Error, LoginData>({
    mutationFn: login,
    onSuccess: (data: UserData) => {
      localStorage.setItem("userData", JSON.stringify(data));
      setUserData(data);
      router.push("/dashboard/doador");
    },
    onError: (error: Error) => {
      console.error("Erro ao realizar login:", error);
      alert("Falha ao realizar login. Verifique suas credenciais e tente novamente.");
    },
  });
};
