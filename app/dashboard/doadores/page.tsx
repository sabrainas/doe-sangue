"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { User, MapPin, Phone } from "lucide-react";
import { useGetAllDonors } from "@/hooks/get-donors/useGetAllDonors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function DashboardDoadorPage() {
    const { data, isLoading, isError } = useGetAllDonors();

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header */}
            <Navbar />
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Doadores Disponíveis</h2>
                        <p className="text-gray-600">Encontre doadores compatíveis com seu tipo sanguíneo</p>
                    </div>
                    <div className="mt-4 md:mt-0 w-full md:w-auto">
                        <div className="relative">
                            <input type="text" placeholder="Buscar por nome, tipo sanguíneo..."
                                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                        </div>
                    </div>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex justify-center items-center h-64">
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Error State */}
                {isError && (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-red-600">Erro ao carregar os doadores.</p>
                    </div>
                )}

                {/* Donor Cards */}
                {!isLoading && !isError && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {data?.map((donor: any) => (
                            <Card key={donor.id} className="border-l-4 border-l-red-600 rounded-xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                                <div className="p-5">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center">
                                            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                                                <User className="text-red-600 text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800">{donor.nome}</h3>
                                                <p className="text-sm text-gray-500">Última doação:</p>
                                            </div>
                                        </div>
                                        <div className="bg-red-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
                                            <span className="font-bold p-2">{donor.tipo}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center text-sm text-gray-600">
                                        <MapPin className="mr-2 text-red-500" />
                                        <span> </span>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                        <span className={`text-xs px-2 py-1 rounded ${donor.urgencyColor}`}>{donor.urgency}</span>
                                        <Button
                                            variant="default"
                                            className={`${donor.urgency === "Indisponível" ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
                                                } text-white px-3 py-1 rounded-lg text-sm font-medium transition duration-300`}
                                            disabled={donor.urgency === "Indisponível"}
                                        >
                                            {donor.urgency === "Indisponível" ? "Indisponível" : "Contatar"} <Phone className="ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
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