"use client";

import React, { Suspense, useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { usePostCriarAgendamento } from "@/hooks/scheduleDonation/useScheduleDonation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import { useGetListarRegioes } from "@/hooks/get-regions/useGetRegions";
import { useSearchParams, useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function AgendarDoacaoPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const requisicaoId = searchParams.get("requisicaoId");

    const { mutate, isPending } = usePostCriarAgendamento();
    const { data: locais, isLoading: isLoadingRegions } = useGetListarRegioes();

    const [formData, setFormData] = useState({
        center: "",
        date: "",
        bloodType: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBloodTypeSelect = (type: string) => {
        setFormData((prev) => ({ ...prev, bloodType: type }));
    };

    useEffect(() => {
        if (locais && locais.length > 0) {
            if (requisicaoId) {
                const localSelecionado = locais.find((local: string) => {
                    const [id] = local.split(" - ");
                    return id === requisicaoId;
                });
                if (localSelecionado) {
                    const [id] = localSelecionado.split(" - ");
                    setFormData((prev) => ({ ...prev, center: id }));
                } else {
                    const [primeiroId] = locais[0].split(" - ");
                    setFormData((prev) => ({ ...prev, center: primeiroId }));
                }
            } else {
                const [primeiroId] = locais[0].split(" - ");
                setFormData((prev) => ({ ...prev, center: primeiroId }));
            }
        }
    }, [requisicaoId, locais]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.center) {
            toast.error("Por favor, selecione um local.");
            return;
        }
        if (!formData.bloodType) {
            toast.error("Por favor, selecione um tipo sanguíneo.");
            return;
        }
        if (!formData.date) {
            toast.error("Por favor, selecione uma data.");
            return;
        }

        const isoDate = new Date(formData.date).toISOString();

        mutate(
            {
                verificacao: "pendente",
                data: isoDate,
                requisicao: {
                    id: Number(requisicaoId),
                },
            },
            {
                onSuccess: () => {
                    toast.success("Agendamento realizado com sucesso!");
                    setTimeout(() => {
                        router.push("/dashboard/doador");
                    }, 1500);
                },
                onError: (error: any) => {
                    toast.error(
                        error?.response?.data?.message ||
                            "Erro ao realizar o agendamento (Já existe agendamento marcado!!)"
                    );
                },
            }
        );
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Toaster position="top-center" />
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
                            <i className="fas fa-heartbeat text-2xl"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-red-600">Hemolink</h1>
                    </div>
                    <Link href="/dashboard/doador" className="text-gray-600 hover:text-red-600">
                        <i className="fas fa-arrow-left mr-1"></i> Voltar
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                        <div className="flex items-center mb-6">
                            <div className="bg-red-100 p-3 rounded-lg mr-4">
                                <i className="fas fa-hand-holding-medical text-red-600 text-xl"></i>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Agendar Doação</h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* Local de Doação */}
                            <div className="mb-6">
                                <label htmlFor="center" className="block text-gray-700 font-medium mb-2">
                                    Local de Doação
                                </label>
                                <select
                                    id="center"
                                    name="center"
                                    value={formData.center}
                                    onChange={handleInputChange}
                                    disabled={isLoadingRegions}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    required
                                >
                                    {locais?.map((local: string, index: number) => {
                                        const [id, ...rest] = local.split(" - ");
                                        const nome = rest.join(" - ");
                                        return (
                                            <option key={index} value={id}>
                                                {nome}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            {/* Data */}
                            <div className="mb-8">
                                <label className="block text-gray-700 font-medium mb-3">Data</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>

                            {/* Tipo Sanguíneo */}
                            <div className="mb-8">
                                <label className="block text-gray-700 font-medium mb-3">Tipo Sanguíneo</label>
                                <div className="grid grid-cols-4 gap-4">
                                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                                        <button
                                            type="button"
                                            key={type}
                                            className={`bg-red-600 text-white py-2 px-4 rounded-lg text-center cursor-pointer ${
                                                formData.bloodType === type ? "opacity-100" : "opacity-60"
                                            }`}
                                            onClick={() => handleBloodTypeSelect(type)}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Botões */}
                            <div className="flex justify-end space-x-4">
                                <Link
                                    href="/dashboard/doador"
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition duration-300"
                                >
                                    Cancelar
                                </Link>
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className={`bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center ${
                                        isPending ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                >
                                    <i className="fas fa-calendar-check mr-2"></i>{" "}
                                    {isPending ? "Agendando..." : "Confirmar Agendamento"}
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
            <Suspense fallback={<div>Carregando...</div>}>
                <AgendarDoacaoPage />
            </Suspense>
        </QueryClientProvider>
    );
}
