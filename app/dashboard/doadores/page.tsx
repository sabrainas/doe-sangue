"use client";

import { Card } from "@/components/ui/card";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { User, } from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useGetListRequestsFeed } from "@/hooks/feed/useGetListRequestsFeed";
import Link from "next/link";

const queryClient = new QueryClient();

function DashboardDoadorPage() {
    const { data, isLoading, isError } = useGetListRequestsFeed();

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header */}
            <Navbar />
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Pacientes Disponíveis</h2>
                    </div>
                </div>

                {isLoading && (
                    <div className="flex justify-center items-center h-64">
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Error State */}
                {isError && (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-red-600">Erro ao carregar o feed.</p>
                    </div>
                )}

                {/* Donor Cards */}
                {!isLoading && !isError && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {data?.map((receptor: any) => (
                            <Link
                                key={receptor.id}
                                href={`/dashboard/doador/agendar-doacao?requisicaoId=${receptor.id}`}
                                className="block"
                            >
                                <Card className="border-l-4 border-l-red-600 rounded-xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                                    <div className="p-5">
                                        <div className="flex items-start justify-between">
                                        <div className="flex items-center">
                                            <div className="bg-red-100 p-3 rounded-lg mr-4">
                                            <i className="fas fa-user text-red-600 text-xl"></i>
                                            </div>
                                            <div className="max-w-[200px]"> {/* limitar largura para o texto */}
                                            <h3 className="text-lg font-bold text-gray-800 truncate">{receptor.nome}</h3>
                                            <p className="text-sm text-gray-600 mt-1 truncate">Descrição: {receptor.descricao}</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default function DashboardDoadorPageWrapper() {
    return (
        <QueryClientProvider client={queryClient}>
            <DashboardDoadorPage />
        </QueryClientProvider>
    );
}

function getListRequestsFeed(): { data: any; isLoading: any; isError: any; } {
    throw new Error("Function not implemented.");
}
