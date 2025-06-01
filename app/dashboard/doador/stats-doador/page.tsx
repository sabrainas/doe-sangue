"use client";

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function StatsDoadorPage() {
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
                        <a href="/dashboard/doador/profile" className="text-gray-600 hover:text-red-600">
                            <i className="fas fa-arrow-left mr-1"></i> Voltar
                        </a>
                        <div className="relative">
                            <i className="fas fa-bell text-gray-600 text-xl cursor-pointer"></i>
                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
                        </div>
                        <a href="/dashboard/doador/profile">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                <i className="fas fa-user text-gray-600"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header com informações do doador */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center mb-4 md:mb-0">
                            <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mr-4">
                                <i className="fas fa-user text-red-600 text-2xl"></i>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">João Silva</h2>
                                <div className="flex items-center mt-1">
                                    <div className="bg-red-600 text-white px-2 py-1 rounded-md text-xs font-bold mr-2">O+</div>
                                    <span className="text-gray-600 text-sm">Doador desde: 15/05/2018</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                            <div className="flex items-center">
                                <div className="bg-red-100 p-2 rounded-full mr-3">
                                    <i className="fas fa-heart text-red-600"></i>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Próxima doação possível</h3>
                                    <p className="text-red-600 font-bold">15/09/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cartões de estatísticas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Total de Doações */}
                        <div className="stat-card bg-white rounded-xl shadow-md p-6 transition duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-gray-500 font-medium">Total de Doações</h3>
                                    <p className="text-3xl font-bold text-gray-800 mt-1">12</p>
                                </div>
                                <div className="bg-red-100 p-3 rounded-lg">
                                    <i className="fas fa-syringe text-red-600 text-xl"></i>
                                </div>
                            </div>
                            <div className="flex items-center text-green-600 text-sm">
                                <i className="fas fa-arrow-up mr-1"></i>
                                <span>2 doações a mais que no ano passado</span>
                            </div>
                        </div>

                        {/* Vidas Impactadas */}
                        <div className="stat-card bg-white rounded-xl shadow-md p-6 transition duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-gray-500 font-medium">Vidas Impactadas</h3>
                                    <p className="text-3xl font-bold text-gray-800 mt-1">36</p>
                                </div>
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <i className="fas fa-users text-blue-600 text-xl"></i>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm">Cada doação pode salvar até 3 vidas</p>
                        </div>

                        {/* Dias para Próxima Doação */}
                        <div className="stat-card bg-white rounded-xl shadow-md p-6 transition duration-300 pulse">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-gray-500 font-medium">Dias para próxima doação</h3>
                                    <p className="text-3xl font-bold text-gray-800 mt-1">23</p>
                                </div>
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <i className="fas fa-calendar-check text-green-600 text-xl"></i>
                                </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Histórico de Doações */}
                    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-800">Histórico de Doações</h3>
                        </div>

                        <div className="donation-timeline pl-8">
                            {/* Doação Recente */}
                            <div className="timeline-item relative pb-6">
                                <div className="flex flex-col md:flex-row justify-between bg-red-50 rounded-lg p-4">
                                    <div>
                                        <p className="font-bold text-gray-800">Doação Completa</p>
                                        <p className="text-gray-600 text-sm">Hemocentro São Paulo</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <p className="text-gray-800">
                                            <i className="fas fa-calendar-alt mr-2 text-red-600"></i> 15/06/2023
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Doações Passadas */}
                            <div className="timeline-item relative pb-6">
                                <div className="flex flex-col md:flex-row justify-between bg-white border border-gray-100 rounded-lg p-4">
                                    <div>
                                        <p className="font-bold text-gray-800">Doação Completa</p>
                                        <p className="text-gray-600 text-sm">Hemocentro ABC</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <p className="text-gray-800">
                                            <i className="fas fa-calendar-alt mr-2 text-red-600"></i> 10/03/2023
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}