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

export const login = async (loginData: LoginData): Promise<UserData> => {
  const response = await axiosInstance.post(
    "/auth/login",
    loginData,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );

  const token = response.data; 

  if (!token) {
    throw new Error("Credenciais inválidas");
  }

  localStorage.setItem("token", token);

  const userResponse = await axiosInstance.get("/usuario/eu", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
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
