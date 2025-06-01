"use client";

import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function EditarDoadorPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        cpf: "",
        birthDate: "",
        bloodType: "",
        phone: "",
        cep: "",
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBloodTypeSelect = (type: string) => {
        setFormData((prev) => ({ ...prev, bloodType: type }));
    };

    const handleCepSearch = () => {
        const cep = formData.cep.replace(/\D/g, "");
        if (cep.length !== 8) {
            alert("CEP inválido. Digite os 8 dígitos.");
            return;
        }

        // Simulação de busca de CEP
        setTimeout(() => {
            setFormData((prev) => ({
                ...prev,
                street: "Rua das Flores",
                neighborhood: "Jardim Primavera",
                city: "São Paulo",
                state: "SP",
            }));
        }, 800);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.bloodType) {
            alert("Por favor, selecione seu tipo sanguíneo");
            return;
        }

        if (!formData.birthDate) {
            alert("Por favor, insira sua data de nascimento");
            return;
        }

        const parts = formData.birthDate.split("/");
        const birthDay = new Date(
            parseInt(parts[2], 10), // Ano
            parseInt(parts[1], 10) - 1, // Mês (0-indexado)
            parseInt(parts[0], 10) // Dia
        );
        const today = new Date();
        let age = today.getFullYear() - birthDay.getFullYear();
        const monthDiff = today.getMonth() - birthDay.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDay.getDate())) {
            age--;
        }

        if (age < 18) {
            alert("Você precisa ter pelo menos 18 anos para se cadastrar como doador");
            return;
        }

        alert("Cadastro atualizado com sucesso!");
    };

    useEffect(() => {
        // Simulação de dados existentes do usuário
        const userData = {
            firstName: "Fulano",
            lastName: "Da Silva Sauro",
            email: "fulano.silva@exemplo.com",
            cpf: "123.456.789-00",
            birthDate: "12/11/2005",
            bloodType: "O+",
            phone: "(11) 98765-4321",
            cep: "01234-567",
            street: "Rua dos Doadores",
            number: "123",
            complement: "Apto 101",
            neighborhood: "Jardim Hemolink",
            city: "São Paulo",
            state: "SP",
        };

        setFormData(userData);
    }, []);

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
                        <a href="/" className="text-gray-600 hover:text-red-600">
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
                            <h2 className="text-2xl font-bold text-gray-800">Cadastro de Doador</h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Nome</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Seu nome"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Sobrenome</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Seu sobrenome"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="seu.email@exemplo.com"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">CPF</label>
                                <input
                                    type="text"
                                    name="cpf"
                                    value={formData.cpf}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="000.000.000-00"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Data de Nascimento</label>
                                <input
                                    type="text"
                                    name="birthDate"
                                    value={formData.birthDate}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="dd/mm/aaaa"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Telefone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="(00) 00000-0000"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">CEP</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        name="cep"
                                        value={formData.cep}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="00000-000"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={handleCepSearch}
                                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-r-lg font-medium transition duration-300"
                                    >
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div className="md:col-span-2">
                                    <label className="block text-gray-700 font-medium mb-2">Rua</label>
                                    <input
                                        type="text"
                                        name="street"
                                        value={formData.street}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Nome da rua"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Número</label>
                                    <input
                                        type="text"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Nº"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Complemento</label>
                                    <input
                                        type="text"
                                        name="complement"
                                        value={formData.complement}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Apto, bloco, etc."
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Bairro</label>
                                    <input
                                        type="text"
                                        name="neighborhood"
                                        value={formData.neighborhood}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Bairro"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Cidade</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Cidade"
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Estado</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Estado"
                                    readOnly
                                />
                            </div>

                            <div className="mb-8">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            name="terms"
                                            type="checkbox"
                                            className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-medium text-gray-700">
                                            Eu concordo com os{" "}
                                            <a href="#" className="text-red-600 hover:text-red-800">
                                                Termos de Uso
                                            </a>{" "}
                                            e{" "}
                                            <a href="#" className="text-red-600 hover:text-red-800">
                                                Política de Privacidade
                                            </a>
                                        </label>
                                        <p className="text-gray-500">
                                            Ao criar sua conta, você concorda com nossos termos e condições.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center"
                            >
                                <i className="fas fa-save mr-2"></i> Salvar Cadastro
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}