"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';
import { Bell, User, MapPin, Phone, Hospital, Users, HandHeart, History, CheckCircle, ChartLine, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from "@/context/UserContext";

interface UserData {
  nome: string;
  tipo: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  celular: string;
  regiao: string;
}

export default function DashboardDoadorPage() {
  const { userData } = useContext(UserContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    console.log("userData no dashboard:", userData);
  }, [userData]);
  
  useEffect(() => {
    if (!userData && !isLoading) {
      router.push("/login");
    }
  }, [userData, isLoading, router]);

  if (!userData) return <p>Carregando...</p>;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - User Card */}
          <div className="w-full lg:w-1/3">
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
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-lg mr-3">
                    <Hospital className="text-gray-600" />
                  </div>
                </div>
              </div>
              <Link href="/dashboard/doador/editar" className="block">
                <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center">
                  <span className="mr-2">Editar dados</span>
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <Link href={"/dashboard/doador/stats-doador"} className="block mt-6">
              <div className="mt-6 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                  <ChartLine className="text-red-600 mr-2" /> Minhas Estatísticas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Doações</p>
                    <p className="text-xl font-bold text-red-600">8</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Vidas salvas</p>
                    <p className="text-xl font-bold text-red-600">24</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Section - Main Actions */}
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

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <History className="text-red-600 mr-2" /> Atividade Recente
              </h3>
              <div className="space-y-4">
                <div className="flex items-start pb-4 border-b border-gray-100">
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                    <CheckCircle />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Doação realizada</p>
                    <p className="text-sm text-gray-500">Você doou sangue no Hemocentro de São Paulo em 15/06/2023</p>
                  </div>
                </div>
                <div className="flex items-start pb-4 border-b border-gray-100">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                    <Bell />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Lembrete de doação</p>
                    <p className="text-sm text-gray-500">Você pode doar sangue novamente a partir de 15/09/2023</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">
                    <Heart />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Impacto positivo</p>
                    <p className="text-sm text-gray-500">Sua última doação ajudou a salvar 3 vidas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >

      {/* Footer */}
      < Footer />
    </div >
  );
}