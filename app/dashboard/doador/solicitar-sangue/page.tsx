"use client";

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function SolicitarDoacaoPage() {
    const [formData, setFormData] = useState({
        bloodType: "",
        hemocenter: "",
        description: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBloodTypeSelect = (type: string) => {
        setFormData((prev) => ({ ...prev, bloodType: type }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        setFormData((prev) => ({ ...prev, documents: files }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.bloodType) {
            alert("Por favor, selecione um tipo sanguíneo");
            return;
        }

        if (!formData.hemocenter) {
            alert("Por favor, selecione um hemocentro");
            return;
        }

        if (!formData.urgencyLevel) {
            alert("Por favor, selecione um nível de urgência");
            return;
        }

        if (!formData.description.trim()) {
            alert("Por favor, descreva o caso");
            return;
        }

        alert("Solicitação enviada com sucesso! Os doadores compatíveis serão notificados.");
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
                    <div className="flex items-center space-x-4">
                        <a href="/" className="text-gray-600 hover:text-red-600">
                            <i className="fas fa-arrow-left mr-1"></i> Voltar
                        </a>
                    </div>
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
                                            key={type}
                                            className={`blood-type-option bg-red-600 text-white py-2 px-4 rounded-lg text-center cursor-pointer ${formData.bloodType === type ? "selected" : ""
                                                }`}
                                            onClick={() => handleBloodTypeSelect(type)}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Hemocentro */}
                            <div className="mb-8">
                                <label className="block text-gray-700 font-medium mb-3">Hemocentro de Destino</label>
                                <select
                                    name="hemocenter"
                                    value={formData.hemocenter}
                                    onChange={handleInputChange}
                                    className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                >
                                    <option value="" disabled>
                                        Selecione um hemocentro
                                    </option>
                                    <option value="1">Hospital Santa Catarina - São Paulo, SP</option>
                                    <option value="2">Hospital Carlo Chagas - Guarulhos, SP</option>
                                    <option value="3">Hospital XP Investimentos - São Paulo, SP</option>
                                    <option value="4">Santo André Hospitais - Santo André, SP</option>
                                    <option value="5">Hemocentro Municipal - São Bernardo do Campo, SP</option>
                                </select>
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
                                ></textarea>
                            </div>

                            {/* Botões */}
                            <div className="flex justify-end space-x-4">
                                <a href="/" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition duration-300">
                                    Cancelar
                                </a>
                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center"
                                >
                                    <i className="fas fa-paper-plane mr-2"></i> Enviar Solicitação
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="bg-white border-t border-gray-200 py-6 mt-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
                                <i className="fas fa-heartbeat text-xl"></i>
                            </div>
                            <h2 className="text-xl font-bold text-red-600">Hemolink</h2>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-600 hover:text-red-600">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-red-600">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-red-600">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-red-600">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100 text-center text-gray-500 text-sm">
                        <p>© 2023 Hemolink. Todos os direitos reservados.</p>
                        <p className="mt-2">Sistema de gerenciamento de doadores de sangue</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}