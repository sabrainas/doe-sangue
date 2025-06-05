"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { User, MapPin, Phone, Users, HandHeart, Droplet } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDeleteDonors } from "@/hooks/delete/useDeleteDonors";
import { UserContext } from "@/context/UserContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useGetHemocenter } from '@/hooks/hemocenter/useGetHemocenter';
import { useGetUserAgendamento } from '@/hooks/scheduleDonation/useGetUserAgendamento';
import { useDeleteUserAgendamento } from '@/hooks/scheduleDonation/useDeleteAgendamento';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';


const queryClient = new QueryClient();

function DashboardDoadorPage() {
  const { userData } = useContext(UserContext);
  const router = useRouter();
  const [isAwaiting, setIsAwaiting] = useState(true);
  const deleteMutation = useDeleteDonors();
  const { data: hemocenterData } = useGetHemocenter();
  const { data: agendamentoData, isLoading: isLoadingAgendamento } = useGetUserAgendamento(userData?.id ?? 0);
  const deleteAgendamentoMutation = useDeleteUserAgendamento(agendamentoData?.id);
  
  useEffect(() => {
    console.log("Agendamento:", agendamentoData);
  }, [agendamentoData]);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAwaiting(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!userData && !isAwaiting) {
      router.push("/login");
    }
  }, [userData, isAwaiting, router]);

  if (!userData) return <p>Carregando...</p>;

  const handleDeleteAccount = () => {
    deleteMutation.mutate(undefined, {
      onSuccess: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        window.location.href = "/";
      },
      onError: (error: Error) => {
        alert("Erro ao encerrar conta: " + error.message);
      },
    });
  };

  const handleConfirmarDoacao = (id: number) => {
  deleteAgendamentoMutation.mutate(id, {
    onSuccess: () => {
      alert("Doação confirmada e agendamento removido!");
      queryClient.invalidateQueries({
        queryKey: ['agendamento-user', userData?.id],
      });
    },
    onError: (error: any) => {
      alert("Erro ao confirmar doação: " + error.message);
    },
  });
};

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Card do Usuário */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <User className="text-red-600 text-3xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">{userData?.nome}</h2>
                <div className="mt-2 bg-red-600 text-white rounded-full px-4 py-1 text-sm font-bold shadow-md">
                  Tipo Sanguíneo: {userData?.tipo || "Desconhecido"}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-lg mr-3">
                    <MapPin className="text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Região</h3>
                    <p className="text-gray-800">{userData?.regiao}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-lg mr-3">
                    <Phone className="text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Celular</h3>
                    <p className="text-gray-800">{userData?.celular}</p>
                  </div>
                </div>
              </div>
              <Link href="/dashboard/doador/editar" className="block">
                <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center">
                  <span className="mr-2">Editar dados</span>
                </button>
              </Link>
            </div>

            {/* Card de Agendamento - SOMENTE SE TIVER AGENDAMENTO */}
            {isLoadingAgendamento ? (
              <div className="mt-6 bg-white rounded-xl p-4 shadow-md">
                <p className="text-gray-600">Carregando agendamento...</p>
              </div>
            ) : agendamentoData ? (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Doação Agendada</CardTitle>
                  <CardDescription>Veja os detalhes da sua próxima doação</CardDescription>
                </CardHeader>
                <CardContent>
                  {agendamentoData.length > 0 ? (
                      agendamentoData.map((agendamento:any) => (
                          <div key={agendamento.id} className="space-y-2 border rounded-md p-4">
                            <p><span className="font-medium">Doador:</span> {agendamento.usuario?.nome || "Não informado"}</p>
                            <p><span className="font-medium">Data:</span> {new Date(agendamento.data).toLocaleDateString()}</p>
                            <p><span className="font-medium">Status:</span> {agendamento.status || "Pendente"}</p>
                            <div className="flex justify-center mt-4">
                              <button 
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                onClick={() => handleConfirmarDoacao(agendamento.id)}
                              >
                                Confirmar Doação
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>Nenhum agendamento encontrado.</p>
                      )}
                  </CardContent>
              </Card>
            ) : (
              <div className="mt-6 bg-white rounded-xl p-4 shadow-md">
                <p className="text-gray-600">Nenhum agendamento encontrado!</p>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Olá, {userData?.nome}!</h2>
              <p className="text-gray-600 mb-6">O que você gostaria de fazer hoje?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-red-100 hover:border-red-200 rounded-xl p-6 cursor-pointer flex flex-col items-center text-center shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
                  <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4">
                    <Users className="text-3xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Visualizar receptores</h3>
                  <p className="text-gray-600 text-sm mb-4">Encontre quem precisa de uma doação e realize um agendamento</p>
                  <Link href="/dashboard/doadores">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition">
                      Acessar
                    </button>
                  </Link>
                </div>
                <div className="bg-white border-2 border-red-100 hover:border-red-200 rounded-xl p-6 cursor-pointer flex flex-col items-center text-center shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
                  <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4">
                    <HandHeart className="text-3xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Solicitar doação</h3>
                  <p className="text-gray-600 text-sm mb-4">Solicite uma doação de sangue para você ou alguém próximo</p>
                  <Link href="/dashboard/doador/solicitar-sangue">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition">
                      Solicitar
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Estoque de Sangue */}
            <Card>
              <CardHeader>
                <CardTitle>Estoque de Sangue</CardTitle>
                <CardDescription>Situação atual por tipo sanguíneo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hemocenterData ? hemocenterData.map((item) => {
                    let corTexto = "";
                    let corBarra = "";
                    let largura = "";
                    let status = "";

                    switch (item.nivel) {
                      case 1:
                        corTexto = "text-green-600";
                        corBarra = "bg-green-500";
                        largura = "100%";
                        status = "Estável";
                        break;
                      case 2:
                        corTexto = "text-yellow-600";
                        corBarra = "bg-yellow-500";
                        largura = "50%";
                        status = "Atenção";
                        break;
                      case 3:
                      default:
                        corTexto = "text-red-600";
                        corBarra = "bg-red-500";
                        largura = "15%";
                        status = "Crítico";
                        break;
                    }

                    return (
                      <div key={item.tipo} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Droplet className="h-5 w-5 text-red-600" />
                            <span className="font-medium">{item.tipo}</span>
                          </div>
                          <span className={`text-sm font-medium ${corTexto}`}>{status}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-100">
                          <div
                            className={`h-2 rounded-full ${corBarra}`}
                            style={{ width: largura }}
                          ></div>
                        </div>
                      </div>
                    );
                  }) : (
                    <p className="text-gray-600">Carregando estoque...</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Botão de deletar conta */}
        <div className='mt-8 flex justify-end'>
          <button
            onClick={() => handleDeleteAccount()}
            disabled={deleteMutation.isPending}
            className={`px-4 py-2 rounded-md transition-colors justify-items-end ${deleteMutation.isPending
              ? "text-gray-400 bg-gray-200 cursor-not-allowed"
              : "text-white bg-red-600 hover:bg-red-700"
              }`}
          >
            {deleteMutation.isPending ? "Deletando conta" : "Deletar conta"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function VerDoadorPageWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardDoadorPage />
    </QueryClientProvider>
  );
}
