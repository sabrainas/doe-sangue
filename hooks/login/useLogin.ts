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

export const login = async (loginData: { email: string; senha: string }) => {
  const params = new URLSearchParams();
  params.append('email', loginData.email);
  params.append('senha', loginData.senha);

  const response = await axiosInstance.post('/usuario/login', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });

  if (response.data !== "Login bem-sucedido!") {
    throw new Error("Credenciais inválidas");
  }

  const userResponse = await axiosInstance.get('/usuario/eu');

  return userResponse.data;
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
