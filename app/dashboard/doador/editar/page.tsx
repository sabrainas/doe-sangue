"use client";

import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useGetListarRegioes } from "@/hooks/get-regions/useGetRegions";
import { useEditDonor } from "@/hooks/edit-donor/useEditDonor";
import { getLoggedUser } from "@/hooks/login/getLoggedUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserData } from "@/types/types";

const queryClient = new QueryClient();

function EditarDoadorPage() {
    const { data: regions, isLoading: isLoadingRegions } = useGetListarRegioes();
    const [formData, setFormData] = useState<Partial<UserData>>({});
    const [editandoSenha, setEditandoSenha] = useState(false);
    const [isLoadingUser, setIsLoadingUser] = useState(true);
    const mutation = useEditDonor();

    useEffect(() => {
        const loadUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("Token não encontrado. Redirecionando para login.");
                    alert("Você precisa estar logado para acessar esta página.");
                    window.location.href = "/login";
                    return;
                }

                const user = await getLoggedUser();
                if (user.dataNascimento) {
                    // Garantindo o formato dd/mm/yyyy para exibir no input
                    const date = new Date(user.dataNascimento);
                    const formattedDate = date.toLocaleDateString("pt-BR", {
                        timeZone: "UTC",
                    });
                    user.dataNascimento = formattedDate;
                }

                setFormData(user);
            } catch (err) {
                console.error("Erro ao carregar usuário logado:", err);
                alert("Erro ao carregar dados do usuário. Verifique sua autenticação.");
            } finally {
                setIsLoadingUser(false);
            }
        };

        loadUser();
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const dataToSend = { ...formData };

        // Converter dataNascimento para ISO para backend
        if (
            formData.dataNascimento &&
            typeof formData.dataNascimento === "string"
        ) {
            const [day, month, year] = formData.dataNascimento.split("/");
            if (day && month && year) {
                const isoDate = new Date(`${year}-${month}-${day}T00:00:00Z`).toISOString();
                dataToSend.dataNascimento = isoDate;
            }
        }
        // Se senha vazia, remove para não enviar
        if (!dataToSend.senha) delete dataToSend.senha;

        try {
            await mutation.mutateAsync(dataToSend);
            alert("Cadastro atualizado com sucesso!");
        } catch (err) {
            console.error("Erro ao atualizar cadastro:", err);
            alert("Erro ao atualizar o cadastro.");
        }
    };

    if (isLoadingUser) {
        return <div>Carregando dados do usuário...</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
                            <i className="fas fa-heartbeat text-2xl"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-red-600">Hemolink</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="/dashboard/doador" className="text-gray-600 hover:text-red-600">
                            <i className="fas fa-arrow-left mr-1"></i> Voltar
                        </a>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                        <div className="flex items-center mb-6">
                            <div className="bg-red-100 p-3 rounded-lg mr-4">
                                <i className="fas fa-user-edit text-red-600 text-xl"></i>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Editar Cadastro
                            </h2>
                        </div>

                        {formData?.id ? (
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Nome
                                        </label>
                                        <input
                                            type="text"
                                            name="nome"
                                            value={formData.nome || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                            placeholder="Seu nome"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email || ""}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="seu.email@exemplo.com"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Tipo Sanguíneo
                                    </label>
                                    <select
                                        name="tipo"
                                        value={formData.tipo || ""}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        required
                                    >
                                        <option value="">Selecione seu tipo sanguíneo</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        CPF
                                    </label>
                                    <input
                                        type="text"
                                        name="cpf"
                                        value={formData.cpf || ""}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="000.000.000-00"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Data de Nascimento
                                    </label>
                                    <input
                                        type="text"
                                        name="dataNascimento"
                                        value={formData.dataNascimento || ""}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="dd/mm/aaaa"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Telefone
                                    </label>
                                    <input
                                        type="text"
                                        name="celular"
                                        value={formData.celular || ""}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="(00) 00000-0000"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Senha
                                    </label>
                                    {editandoSenha ? (
                                        <input
                                            type="password"
                                            name="senha"
                                            value={formData.senha || ""}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                            placeholder="Digite sua nova senha"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-between">
                                            <input
                                                type="password"
                                                value="********"
                                                disabled
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setEditandoSenha(true);
                                                    setFormData((prev) => ({ ...prev, senha: "" }));
                                                }}
                                                className="ml-4 text-red-600 hover:underline text-sm"
                                            >
                                                Trocar senha
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="regiao"
                                        className="block text-gray-700 font-medium mb-2"
                                    >
                                        Região
                                    </label>
                                    <select
                                        id="regiao"
                                        name="regiao"
                                        value={formData.regiao || ""}
                                        onChange={handleInputChange}
                                        disabled={isLoadingRegions}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        required
                                    >
                                        <option value="">Selecione uma região</option>
                                        {regions?.map((region: string, index: number) => {
                                            const clinicName = region.split(" - ")[0];
                                            return (
                                                <option key={index} value={region}>
                                                    {clinicName}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center"
                                >
                                    <i className="fas fa-save mr-2"></i> Salvar Cadastro
                                </button>
                            </form>
                        ) : (
                            <div className="text-center text-gray-600">
                                <p>Carregando dados do usuário...</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default function EditarDoadorPageWrapper() {
    return (
        <QueryClientProvider client={queryClient}>
            <EditarDoadorPage />
        </QueryClientProvider>
    );
}
