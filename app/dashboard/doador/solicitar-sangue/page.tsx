"use client";

import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { usePostCriarRequisicao } from "@/hooks/bloodRequest/useBloodRequest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const queryClient = new QueryClient();

function SolicitarDoacaoPage() {
    const searchParams = useSearchParams();
    const requisicaoId = searchParams.get("requisicaoId");

    const [formData, setFormData] = useState({
        name: "",
        bloodType: "",
        description: "",
    });

    useEffect(() => {
        if (requisicaoId) {
          console.log("Requisição selecionada:", requisicaoId);
        }
      }, [requisicaoId]);

    const { mutate, isPending } = usePostCriarRequisicao();

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBloodTypeSelect = (type: string) => {
        setFormData((prev) => ({ ...prev, bloodType: type }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!formData.bloodType) return alert("Por favor, selecione um tipo sanguíneo");
        if (!formData.description.trim()) return alert("Por favor, descreva o caso");
    
        mutate({
            nome: formData.name,
            tipo: formData.bloodType,
            descricao: formData.description,
          });
      };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
                            <i className="fas fa-heartbeat text-2xl"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-red-600">Hemolink</h1>
                    </div>
                    <Link href="/dashboard/doadores" className="text-gray-600 hover:text-red-600">
                        <i className="fas fa-arrow-left mr-1"></i> Voltar
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                        <div className="flex items-center mb-6">
                            <div className="bg-red-100 p-3 rounded-lg mr-4">
                                <i className="fas fa-tint text-red-600 text-xl"></i>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Solicitar Doação de Sangue</h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* Tipo Sanguíneo */}
                            <div className="mb-8">
                                <label className="block text-gray-700 font-medium mb-3">Tipo Sanguíneo Necessário</label>
                                <div className="grid grid-cols-4 gap-4">
                                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                                        <button
                                            type="button"
                                            key={type}
                                            className={`bg-red-600 text-white py-2 px-4 rounded-lg text-center cursor-pointer ${formData.bloodType === type ? "opacity-100" : "opacity-60"}`}
                                            onClick={() => handleBloodTypeSelect(type)}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Descrição */}
                            <div className="mb-8">
                                <label className="block text-gray-700 font-medium mb-3">Descrição do Caso</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Descreva detalhes sobre o paciente, motivo da necessidade, quantidade necessária, etc."
                                    required
                                />
                            </div>

                            {/* Botões */}
                            <div className="flex justify-end space-x-4">
                                <a href="/dashboard/doadores" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition duration-300">
                                    Cancelar
                                </a>
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className={`bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center ${isPending ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                >
                                    <i className="fas fa-paper-plane mr-2"></i> {isPending ? "Enviando..." : "Enviar Solicitação"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default function DashboardDoadorPageWrapper() {
    return (
        <QueryClientProvider client={queryClient}>
            <SolicitarDoacaoPage />
        </QueryClientProvider>
    );
}