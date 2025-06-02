"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { login } from "@/hooks/login/useLogin";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const queryClient = new QueryClient();

function LoginPage() {
  const { setUserData } = useContext(UserContext);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginData = {
      email: formData.get("email") as string,
      senha: formData.get("senha") as string,
    };
    login(loginData);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <div className="bg-red-600 text-white p-2 rounded-lg">
            <i className="fas fa-heartbeat text-2xl"></i>
          </div>          
          <span className="text-xl font-bold">Hemolink</span>
        </Link>
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Entrar</h1>
          </div>
          <Tabs defaultValue="doador" className="w-full">
            <TabsContent value="doador">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Seu email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="senha" className="text-sm font-medium leading-none">
                    Senha
                  </label>
                  <Input id="senha" name="senha" type="password" placeholder="Sua senha" required />
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" disabled={status === "pending"}>
                  {status === "pending" ? "Entrando..." : "Entrar"}
                </Button>
              </form>
              <div className="text-center p-3">
                <p className="text-sm text-gray-500">
                  Ainda não está cadastrado?{" "}
                  <Link href="/cadastro" className="text-red-600 hover:underline">
                    Cadastre-se aqui
                  </Link>
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default function LoginPageWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginPage />
    </QueryClientProvider>
  );
}